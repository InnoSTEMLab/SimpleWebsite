import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the form data to console for testing
    console.log('Mock contact form submission:', body);
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully (mock)',
      emailId: 'mock-' + Date.now()
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Mock server error' },
      { status: 500 }
    );
  }
}
