import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { childName, parentEmail, childAge, previousExperience, programCode, numClasses, totalAmount } = await request.json();

    // Validate required fields
    if (!childName || !parentEmail || !childAge || !previousExperience || !programCode || !numClasses || !totalAmount) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(parentEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Age validation
    if (childAge < 6 || childAge > 13) {
      return NextResponse.json(
        { error: 'Child age must be between 6 and 13 years old' },
        { status: 400 }
      );
    }

    // Program validation
    if (!['ages-6-9', 'ages-10-13'].includes(programCode)) {
      return NextResponse.json(
        { error: 'Invalid program selected' },
        { status: 400 }
      );
    }

    // Save enrollment to database
    const { data: enrollmentData, error: enrollmentError } = await supabase
      .from('students')
      .insert([
        {
          child_name: childName,
          parent_email: parentEmail,
          child_age: childAge,
          previous_experience: previousExperience,
          program_code: programCode,
          num_classes: numClasses,
          total_amount: totalAmount,
          status: 'enrolled'
        }
      ])
      .select();

    if (enrollmentError) {
      console.error('Database error:', enrollmentError);
      return NextResponse.json(
        { error: 'Failed to save enrollment. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Enrollment saved successfully:', enrollmentData[0]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enrollment saved successfully',
        enrollmentId: enrollmentData[0].id,
        student: enrollmentData[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Enrollment error:', error);
    return NextResponse.json(
      { error: 'Failed to process enrollment. Please try again.' },
      { status: 500 }
    );
  }
} 