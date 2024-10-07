import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateWebsite(prompt: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not set');
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a website generator for fitness businesses. Generate a complete HTML website based on the given prompt. Include inline CSS for styling.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 2000,
    });

    const generatedContent = completion.choices[0].message.content;
    if (!generatedContent) {
      throw new Error('No content generated from OpenAI');
    }

    return generatedContent;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error('Failed to generate website content: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}