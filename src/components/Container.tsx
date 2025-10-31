"use client";
import { PageContext } from "@/utils/PageContext";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { pageLayout } from "@/utils/constants";
import BackButton from "./BackButton";
import { motion } from "framer-motion";

export default function Container({ children }: { children: React.ReactNode }) {
  const [pageLayoutArray, setPageLayoutArray] = useState(pageLayout);
  const [currentPage, setCurrentPage] = useState(1);

  function handleClick(pageNo: number) {
    setCurrentPage(pageNo);
  }

  useEffect(() => {
    setPageLayoutArray((prevPageLayout) =>
      prevPageLayout.map((prevPage) => ({
        ...prevPage,
        isActive: prevPage.pageNumber === currentPage,
      }))
    );
  }, [currentPage]);

  return (
    <div className="min-h-screen flex items-start justify-center pt-16 md:pt-16 md:py-12 p-8 pb-16">
      <div className="text-left space-y-4 w-full max-w-md">
        <div className="flex justify-between">
          <div className="flex flex-row -space-x-2">
            {/* tabs */}
            {pageLayoutArray.map((page) => (
              <motion.div
                key={page.pageNumber}
                whileHover={{
                  scale: 1.4,
                  transition: {
                    duration: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                }}
                onClick={(e) => handleClick(Number(e.currentTarget.innerHTML))}
                onMouseEnter={(e) =>
                  handleClick(Number(e.currentTarget.innerHTML))
                }
                className={`z-${
                  page.pageNumber
                } select-none hover:border-gray-600 relative rounded-2xl pt-1 w-8 h-8 text-center  text-sm cursor-pointer transform transition hover:-translate-y-1 border-solid border-2 border-gray-300 ${
                  page.isActive ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {page.pageNumber}
              </motion.div>
            ))}
          </div>
          <div className="max-sm:hidden">
            <BackButton href="/" buttonName="Back to Homepage" />
          </div>
          <div className="md:hidden">
            <BackButton href="/" buttonName="Home" />
          </div>
        </div>

        <PageContext value={{ currentPage, setCurrentPage }}>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </PageContext>
      </div>
    </div>
  );
}
