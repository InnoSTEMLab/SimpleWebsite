import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';
import PasswordResetEmail from '../../../components/PasswordResetEmail';
import { render } from '@react-email/render';

// In a real application, you would store this in a database
const resetTokens = new Map<string, { email: string; expires: number }>();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // In a real application, you would check if the email exists in your database
    // For now, we'll assume the email exists
    const userExists = true; // Replace with actual database check

    if (!userExists) {
      // Don't reveal if email exists or not for security
      return NextResponse.json(
        { message: 'If an account with that email exists, a password reset link has been sent.' },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 60 * 60 * 1000; // 1 hour

    // Store token (in production, store in database)
    resetTokens.set(resetToken, { email, expires });

    // Create reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

    // Render the React email template
    const emailHtml = render(PasswordResetEmail({ resetUrl }));

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'InnoSTEMLab <noreply@innostemlab.com>',
      to: [email],
      subject: 'Password Reset Request - InnoSTEMLab',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send reset email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'If an account with that email exists, a password reset link has been sent.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { message: 'Failed to send reset email. Please try again.' },
      { status: 500 }
    );
  }
} 