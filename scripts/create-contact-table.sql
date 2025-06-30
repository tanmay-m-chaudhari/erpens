-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new records (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create a policy for reading records (you can modify this based on your needs)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT 
  TO authenticated 
  USING (true);
