-- InnoSTEMLab Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create tables for the website

-- 1. Students/Enrollments table
CREATE TABLE students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  child_name VARCHAR(255) NOT NULL,
  parent_email VARCHAR(255) NOT NULL,
  child_age INTEGER NOT NULL,
  previous_experience VARCHAR(50) NOT NULL,
  program_code VARCHAR(20) NOT NULL, -- 'ages-6-9' or 'ages-10-13'
  num_classes INTEGER NOT NULL DEFAULT 1,
  total_amount DECIMAL(10,2) NOT NULL,
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'enrolled', -- 'enrolled', 'completed', 'cancelled'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Contact form submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new', -- 'new', 'replied', 'resolved'
  admin_notes TEXT
);

-- 3. Payment records table
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL, -- 'credit_card', 'paypal'
  payment_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  transaction_id VARCHAR(255),
  payment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Programs table (for future expansion)
CREATE TABLE programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(20) UNIQUE NOT NULL, -- 'ages-6-9', 'ages-10-13'
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price_per_class DECIMAL(10,2) NOT NULL,
  age_min INTEGER NOT NULL,
  age_max INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Website analytics/visits table (optional)
CREATE TABLE page_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path VARCHAR(255) NOT NULL,
  visitor_ip VARCHAR(45),
  user_agent TEXT,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default programs
INSERT INTO programs (code, name, description, price_per_class, age_min, age_max) VALUES
('ages-6-9', 'Introduction to Line Following Robots (Ages 6-9)', 'Beginner robotics program for young children', 50.00, 6, 9),
('ages-10-13', 'Introduction to Line Following Robots (Ages 10-13)', 'Intermediate robotics program for older children', 50.00, 10, 13);

-- Create indexes for better performance
CREATE INDEX idx_students_parent_email ON students(parent_email);
CREATE INDEX idx_students_program_code ON students(program_code);
CREATE INDEX idx_students_enrollment_date ON students(enrollment_date);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at);
CREATE INDEX idx_payments_student_id ON payments(student_id);
CREATE INDEX idx_payments_payment_date ON payments(payment_date);
CREATE INDEX idx_page_visits_page_path ON page_visits(page_path);
CREATE INDEX idx_page_visits_visited_at ON page_visits(visited_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to tables that need it
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) - for future admin panel
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- Create policies (for now, allow all operations - you can restrict later)
CREATE POLICY "Allow all operations on students" ON students FOR ALL USING (true);
CREATE POLICY "Allow all operations on contact_submissions" ON contact_submissions FOR ALL USING (true);
CREATE POLICY "Allow all operations on payments" ON payments FOR ALL USING (true);
CREATE POLICY "Allow all operations on programs" ON programs FOR ALL USING (true);
CREATE POLICY "Allow all operations on page_visits" ON page_visits FOR ALL USING (true); 