import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// In a real application, you would store this in a database
// This is just for demonstration - in production, use a proper database
const resetTokens = new Map<string, { email: string; expires: number }>();

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: 'Token and password are required' },
        { status: 400 }
      );
    }

    // Validate password
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Check if token exists and is valid
    const tokenData = resetTokens.get(token);
    
    if (!tokenData) {
      return NextResponse.json(
        { message: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    // Check if token has expired
    if (Date.now() > tokenData.expires) {
      resetTokens.delete(token);
      return NextResponse.json(
        { message: 'Reset token has expired. Please request a new one.' },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12);

    // In a real application, you would update the user's password in the database
    // For now, we'll just simulate the update
    try {
      // Simulate database update
      // await db.user.update({
      //   where: { email: tokenData.email },
      //   data: { password: hashedPassword }
      // });
      
      console.log(`Password updated for user: ${tokenData.email}`);
      
      // Remove the used token
      resetTokens.delete(token);
      
      return NextResponse.json(
        { message: 'Password has been successfully reset' },
        { status: 200 }
      );
      
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { message: 'Failed to update password. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { message: 'Failed to reset password. Please try again.' },
      { status: 500 }
    );
  }
} 