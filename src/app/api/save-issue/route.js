import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { issue, email, timestamp } = await request.json();

    // Validate the data
    if (!issue) {
      return NextResponse.json({ error: 'Issue description is required' }, { status: 400 });
    }
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ecommersw@gmail.com',
        pass: 'vyjb vohc csdl fcjn'
      }
    });

    // Setup email data
    const mailOptions = {
      from: 'ecommersw@gmail.com',
      to: 'tanujgaming87@gmail.com',
      subject: 'New Issue Reported from Portfolio Website',
      text: `Issue: ${issue}\n\nReported by: ${email || 'Anonymous'}\nTimestamp: ${timestamp}`,
      html: `
        <h2>New Issue Reported</h2>
        <p><strong>Issue:</strong> ${issue}</p>
        <p><strong>Reported by:</strong> ${email || 'Anonymous'}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving issue:', error);
    return NextResponse.json({ error: 'Failed to save issue' }, { status: 500 });
  }
}