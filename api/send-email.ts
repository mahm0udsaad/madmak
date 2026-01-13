// Vercel serverless function
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { name, phone, email, message } = req.body;

    // Validate required fields
    if (!name || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Get API key from environment
    const resendApiKey = process.env.RESEND_API_KEY || "re_GF3cEsnG_FcDuqP77Q1qt8oZDHeDxWpJa";
    
    if (!resendApiKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'RESEND_API_KEY is not configured' 
      });
    }

    const resend = new Resend(resendApiKey);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const result = await resend.emails.send({
      from: 'website@madmakvi.online',
      to: '101mahm0udsaad@gmail.com',
      subject: 'Website message',
      html: emailContent,
    });

    return res.status(200).json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    });
  }
}
