import React from "react";
import About from "./About";
import Description from "./Description";
import {
  fifthDescription,
  fourthDescription,
  sixthDescription,
} from "@/utils/constants";

export default function ThirdPage() {
  return (
    <>
      <About
        headerDesc="Skills & Technologies"
        paraDesc="What I use to build things"
        belowParaDesc="Here are some of the technologies and tools I work with."
      />
      <Description
        descriptionArray={fourthDescription}
        descriptionTitle="Frontend"
      />
      <Description
        descriptionArray={fifthDescription}
        descriptionTitle="Backend"
      />
      <Description
        descriptionArray={sixthDescription}
        descriptionTitle="Tools & Deployment"
      />
    </>
  );
}
