import React from 'react';

interface WebsitePreviewProps {
  generatedWebsite: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ generatedWebsite }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Website Preview</h2>
      {generatedWebsite ? (
        <div className="border border-gray-300 rounded-md p-4">
          <iframe
            srcDoc={generatedWebsite}
            title="Generated Website Preview"
            className="w-full h-96 border-0"
            sandbox="allow-scripts"
          />
        </div>
      ) : (
        <p className="text-gray-600">Your generated website will appear here.</p>
      )}
    </div>
  );
};

export default WebsitePreview;