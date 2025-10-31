import React from "react";

function TechStack({ stackName }: { stackName: string }) {
  return (
    <span className="px-2 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
      {stackName}
    </span>
  );
}

export default function Card({
  Title,
  Description,
  NavigateToLink,
}: {
  Title: string;
  Description: string[];
  NavigateToLink: string;
}) {
  return (
    <div className="selection:bg-black my-4 selection:text-white bg-gray-50 border border-gray-200 rounded-3xl p-4 max-w-[450px]">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <img
            className="w-4 h-4 rounded-full"
            src={"https://www.matthewporteous.com/caseprepared%20logo.svg"}
          />
          <h2 className="text-sm font-medium text-black">{Title}</h2>
          <div className="max-sm:absolute max-sm:right-8 md:hidden">
            <a
              className="text-xs text-blue-900  hover:underline transition-colors"
              href="https://ai-sdk-rag-vert-nine.vercel.app/"
            >
              {NavigateToLink}
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed max-sm:hidden">
          AI-powered tool to help consultants practice for their case
          interviews. Building intelligent feedback systems and realistic case
          simulations.
        </p>
        <div className="flex  justify-between">
          <div className="gap-2 flex-wrap flex">
            {Description.map((Description, Index) => (
              <TechStack key={Index} stackName={Description} />
            ))}
          </div>
          <a
            className="text-xs text-blue-900 hover:underline max-sm:hidden transition-colors"
            href="https://ai-sdk-rag-vert-nine.vercel.app/"
          >
            {NavigateToLink}
          </a>
        </div>
      </div>
    </div>
  );
}
