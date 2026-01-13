import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// API middleware plugin
function apiPlugin(): Plugin {
  return {
    name: "api-plugin",
    configureServer(server) {
      server.middlewares.use("/api/send-email", async (req, res, next) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }

        try {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", async () => {
            try {
              const data = JSON.parse(body);
              const { name, phone, email, message } = data;

              if (!name || !phone || !message) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    success: false,
                    error: "Missing required fields",
                  })
                );
                return;
              }

              // Import and use Resend
              const { Resend } = await import("resend");
              const resendApiKey =
                process.env.RESEND_API_KEY ||
                process.env.VITE_RESEND_API_KEY ||
                "re_GF3cEsnG_FcDuqP77Q1qt8oZDHeDxWpJa";

              if (!resendApiKey) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    success: false,
                    error: "RESEND_API_KEY is not configured",
                  })
                );
                return;
              }

              const resend = new Resend(resendApiKey);

              const emailContent = `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email || "Not provided"}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
              `;

              const result = await resend.emails.send({
                from: "website@madmakvi.online", // Update this to your verified domain
                to: "101mahm0udsaad@gmail.com",
                subject: "Website message",
                html: emailContent,
              });

              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  success: true,
                  data: result,
                })
              );
            } catch (error) {
              console.error("Error sending email:", error);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  success: false,
                  error:
                    error instanceof Error
                      ? error.message
                      : "Failed to send email",
                })
              );
            }
          });
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              success: false,
              error: "Internal server error",
            })
          );
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    apiPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
