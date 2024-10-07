import React, { useState } from 'react';
import { Dumbbell, Code, Shield, Layout, Database, Send } from 'lucide-react';
import WebsiteBuilder from './components/WebsiteBuilder';
import WebsitePreview from './components/WebsitePreview';

function App() {
  const [generatedWebsite, setGeneratedWebsite] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Arbox AI Website Builder</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WebsiteBuilder setGeneratedWebsite={setGeneratedWebsite} />
          <WebsitePreview generatedWebsite={generatedWebsite} />
        </div>
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code />}
              title="OpenAI Integration"
              description="Seamlessly integrated with GPT-4 for intelligent website generation."
            />
            <FeatureCard
              icon={<Dumbbell />}
              title="Fitness-Focused"
              description="Tailored content and design for fitness businesses."
            />
            <FeatureCard
              icon={<Layout />}
              title="Responsive Design"
              description="Ensures websites look great on all devices."
            />
            <FeatureCard
              icon={<Database />}
              title="Arbox CRM Integration"
              description="Incorporates your business data into the website content."
            />
            <FeatureCard
              icon={<Shield />}
              title="Secure Data Handling"
              description="Implements security measures to protect user information."
            />
            <FeatureCard
              icon={<Send />}
              title="Easy Deployment"
              description="Simple process to publish your generated website."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;