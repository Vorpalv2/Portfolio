"use client";
import React, { ViewTransition } from "react";

export default function ViewTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransition enter={"none"}>{children}</ViewTransition>;
}
