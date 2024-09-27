import "./blog.css";

import React from "react";
import { Text } from "../components/ui/text";
import Link from "next/link";
import { buttonVariants } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col gap-12 justify-center h-dvh">
      <div className="flex flex-col items-center -space-y-28">
        <Text variant={"h1"} className="text-[200px] text-natural-200">
          404
        </Text>
        <Text variant={"h1"} className="text-6xl">
          Page Not Found!
        </Text>
      </div>

      <Link
        href={"/"}
        className={buttonVariants({
          className: "text-lg !rounded-full",
          size: "lg",
        })}
      >
        Home
      </Link>
    </div>
  );
}