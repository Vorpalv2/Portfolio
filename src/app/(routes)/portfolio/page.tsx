"use client";
import Button from "@/components/Button";
import FifthPage from "@/components/FifthPage";
import FirstPage from "@/components/FirstPage";
import FourthPage from "@/components/FourthPage";
import SecondPage from "@/components/SecondPage";
import ThirdPage from "@/components/ThirdPage";
import { usePageContext } from "@/utils/PageContext";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const currentPageContext = usePageContext();

  const PageComponent = (() => {
    switch (currentPageContext.currentPage) {
      case 1:
        return FirstPage;
      case 2:
        return SecondPage;
      case 3:
        return ThirdPage;
      case 4:
        return FourthPage;
      case 5:
        return FifthPage;
      default:
        return null;
    }
  })();

  if (!PageComponent) return null;

  return (
    <motion.div
      className="blur-xs"
      key={currentPageContext.currentPage}
      initial={{
        filter: "blur(3px)",
        opacity: 1,
      }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(3px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <PageComponent />
      {currentPageContext.currentPage === 1 && (
        <div className="flex justify-end m-2">
          <Button buttonName="Next" />
        </div>
      )}
      {currentPageContext.currentPage === 2 && (
        <div className="flex justify-between m-2">
          <Button buttonName="Prev" />
          <Button buttonName="Next" />
        </div>
      )}
      {currentPageContext.currentPage === 3 && (
        <div className="flex justify-between m-2">
          <Button buttonName="Prev" />
          <Button buttonName="Next" />
        </div>
      )}
      {currentPageContext.currentPage === 4 && (
        <div className="flex justify-between m-2">
          <Button buttonName="Prev" />
          <Button buttonName="Next" />
        </div>
      )}
      {currentPageContext.currentPage === 5 && (
        <div className="flex justify-start m-2">
          <Button buttonName="Prev" />
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioPage;
