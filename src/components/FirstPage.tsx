"use client";

import About from "@/components/About";
import Card from "@/components/Card";
import Description from "@/components/Description";
import { firstDescription } from "@/utils/constants";

const FirstPage = () => {
  return (
    <>
      <About
        headerDesc="Hi, I'm Aakash"
        paraDesc="Full Stack Dev"
        belowParaDesc="I build web apps, squash bugs, and occasionally touch grass."
      />
      <Description
        descriptionArray={firstDescription}
        descriptionTitle="What I Can do"
      />
      <div className="selection:bg-black selection:text-white">
        <h2 className="text-[1.125rem] font-medium text-black ">
          What I'm Working On Now
        </h2>
        <Card
          Title="RAG Chatbot"
          Description={["NextJS", "NeonDB", "AI"]}
          NavigateToLink="RAG-Chatbot.com"
        />
      </div>
    </>
  );
};

export default FirstPage;
