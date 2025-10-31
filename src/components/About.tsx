import React from "react";

function About({
  headerDesc,
  paraDesc,
  belowParaDesc,
}: {
  headerDesc: string;
  paraDesc: string;
  belowParaDesc?: string;
}) {
  return (
    <div className="space-y-2 selection:bg-black selection:text-white">
      <h1
        className={` text-[1.75rem] font-semibold text-black tracking-tight `}
      >
        {headerDesc}
      </h1>
      <p className="text-subtitle text-gray-500 font-medium mb-3">{paraDesc}</p>
      <hr />
      <p className="text-subtitle text-gray-500 font-medium mb-3">
        {belowParaDesc}
      </p>
    </div>
  );
}

export default About;
