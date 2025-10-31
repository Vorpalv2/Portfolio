import React from "react";

export default function Description({
  listItemsCount,
  descriptionTitle,
  descriptionArray,
}: {
  listItemsCount?: number;
  descriptionTitle: string;
  descriptionArray: string[];
}) {
  return (
    <div className="selection:bg-black selection:text-white">
      <h2 className="font-medium text-black text-[1.125rem] py-2">
        {descriptionTitle}
      </h2>
      <ul className="space-y-2 list-disc ml-6 mb-4 text-[.875rem]">
        {descriptionArray.map((description, index) => (
          <li key={index} className="text-body text-gray-600">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}

// <li className="text-body text-gray-600">
//   Build responsive and intuitive web applications with React / Next.js
// </li>
// <li className="text-body text-gray-600">
//   Design and develop secure and scalable systems with Node.js / Python
// </li>
// <li className="text-body text-gray-600">
//   Build and maintain databases with PostgreSQL / MongoDB / MySQL
// </li>
// <li className="text-body text-gray-600">
//   Build clean, maintainable APIs with Express / FastAPI
// </li>
// <li className="text-body text-gray-600">
//   Learn frameworks and tools fast
// </li>
