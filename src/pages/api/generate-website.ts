import { NextApiRequest, NextApiResponse } from 'next';
import { generateWebsite } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { businessName, businessType, description } = req.body;

      if (!businessName || !businessType || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const prompt = `Create a responsive HTML website for a ${businessType} called "${businessName}". 
      Description: ${description}
      Include sections for: Home, About Us, Services, Class Schedule (if applicable), Contact Information.
      Use modern design principles and ensure it's mobile-friendly. Include inline CSS for styling.`;

      const generatedHtml = await generateWebsite(prompt);

      if (!generatedHtml) {
        throw new Error('Failed to generate website content');
      }

      res.status(200).json({ generatedHtml });
    } catch (error) {
      console.error('Error in API route:', error);
      res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}