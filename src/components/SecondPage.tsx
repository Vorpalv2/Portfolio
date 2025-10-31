import About from "./About";
import Description from "./Description";
import { secondDescription, thirdDescription } from "@/utils/constants";

export default function SecondPage() {
  return (
    <>
      <About
        headerDesc="About Me"
        paraDesc="Who is Aakash"
        belowParaDesc="I'm a creative full stack developer with experience in modern web technologies."
      />
      <Description
        descriptionArray={secondDescription}
        descriptionTitle="My Journey"
      />
      <Description
        descriptionArray={thirdDescription}
        descriptionTitle="My Kind of Fun"
      />
    </>
  );
}
