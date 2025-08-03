import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { studentId, amount, paymentMethod, paymentStatus, transactionId } = await request.json();

    // Validate required fields
    if (!studentId || !amount || !paymentMethod || !paymentStatus) {
      return NextResponse.json(
        { error: 'Missing required payment information' },
        { status: 400 }
      );
    }

    // Save payment to database
    const { data: paymentData, error: paymentError } = await supabase
      .from('payments')
      .insert([
        {
          student_id: studentId,
          amount: amount,
          payment_method: paymentMethod,
          payment_status: paymentStatus,
          transaction_id: transactionId || null
        }
      ])
      .select();

    if (paymentError) {
      console.error('Database error:', paymentError);
      return NextResponse.json(
        { error: 'Failed to save payment. Please try again.' },
        { status: 500 }
      );
    }

    // Update student status to 'paid' if payment is completed
    if (paymentStatus === 'completed') {
      const { error: updateError } = await supabase
        .from('students')
        .update({ status: 'paid' })
        .eq('id', studentId);

      if (updateError) {
        console.error('Failed to update student status:', updateError);
      }
    }

    console.log('Payment saved successfully:', paymentData[0]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Payment processed successfully',
        paymentId: paymentData[0].id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Payment API error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment. Please try again.' },
      { status: 500 }
    );
  }
} 