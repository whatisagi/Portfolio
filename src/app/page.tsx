"use client";

import { useEffect } from "react";
import { useLocalStorage } from "react-use";

import TechSection from "@/components/TechSection";
import BlogSection from "@/components/BlogSection";
import ProjectSection from "@/components/ProjectSection";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  const name = "Ali Reza Samadi";

  // const [newUser, setNewUser] = useLocalStorage("newUser", true);

  // useEffect(() => {
  //   if (newUser) {
  //     setTimeout(() => {
  //       setNewUser(false);
  //     }, 1000);
  //   }
  // }, [newUser, setNewUser]);

  const newUser = true;

  return (
    <main className="mx-auto max-w-3xl py-8 md:py-24">
      <div className="flex items-center justify-between gap-8">
        <h1 className="shrink-0 text-4xl font-bold">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="animate-blur opacity-0 blur-sm"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <SocialMedia />
      </div>
      <p
        className="animate-blur mt-3 text-muted opacity-0 blur-sm"
        style={{ animationDelay: ".5s" }}
      >
        I&apos;m Ali Reza! I&apos;ve got 3 years of web dev experience, mainly
        focusing on front-end magic with ReactJS. I&apos;m all about embracing
        new challenges and learning opportunities. Let&apos;s build something
        awesome together!
      </p>

      <div
        className="animate-blur opacity-0 blur-sm"
        style={{ animationDelay: ".7s" }}
      >
        <h2 className="mt-10">My Tech Stacks</h2>

        <TechSection />
      </div>

      <div
        className="animate-blur opacity-0 blur-sm"
        style={{ animationDelay: "1s" }}
      >
        <h2 className="mt-10">Blogs</h2>

        <BlogSection />
      </div>

      <div
        className="animate-blur opacity-0 blur-sm"
        style={{ animationDelay: "1.2s" }}
      >
        <h2 className="mt-10">Projects</h2>

        <ProjectSection />
      </div>
    </main>
  );
}