import * as React from "react";

export interface ComponentInfo {
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  from?: {
    creator: string;
    link: string;
  };
}

export type CollectionsTypes = Array<
  "general" | "animations-dev" | "50-day-challenge"
>;

export interface IndexData {
  general: ComponentInfo[];
  "animations-dev": ComponentInfo[];
  "50-day-challenge": ComponentInfo[];
}

export const NewIndex: IndexData = {
  general: [
    {
      name: "forms",
      component: React.lazy(() => import("./forms")),
    },
    {
      name: "number-animation",
      component: React.lazy(() => import("./number-animation")),
    },
    {
      name: "morph-css",
      component: React.lazy(() => import("./morph-css")),
    },
    {
      name: "Theme-Toggle",
      component: React.lazy(() => import("./theme-toggle")),
      from: {
        creator: "Татьяна Крупина",
        link: "https://www.figma.com/community/file/1052592425974607958/toggle-switch-free-can-edit",
      },
    },
  ],
  "animations-dev": [
    {
      name: "form-popover",
      component: React.lazy(() => import("./form-popover")),
    },
    // {
    //   name: "practice",
    //   component: React.lazy(() => import("./practice")),
    // },
  ],
  "50-day-challenge": [
    {
      name: "intro",
      component: React.lazy(() => import("./50-day-challenge/intro")),
    },
    {
      name: "day-1",
      component: React.lazy(() => import("./50-day-challenge/day-1")),
    },
    {
      name: "day-2",
      component: React.lazy(() => import("./50-day-challenge/day-2")),
    },
    {
      name: "day-3",
      component: React.lazy(() => import("./50-day-challenge/day-3/index")),
    },
    {
      name: "day-4",
      component: React.lazy(() => import("./50-day-challenge/day-4")),
    },
    {
      name: "day-5",
      component: React.lazy(() => import("./50-day-challenge/day-5")),
    },
    {
      name: "day-6",
      component: React.lazy(() => import("./50-day-challenge/day-6/index")),
    },
    {
      name: "day-7",
      component: React.lazy(() => import("./50-day-challenge/day-7")),
    },
    {
      name: "day-8",
      component: React.lazy(() => import("./50-day-challenge/day-8")),
    },
    {
      name: "day-9",
      component: React.lazy(() => import("./50-day-challenge/day-9")),
    },
    {
      name: "day-10",
      component: React.lazy(() => import("./50-day-challenge/day-10")),
    },
    {
      name: "day-11",
      component: React.lazy(() => import("./50-day-challenge/day-11")),
    },
    {
      name: "day-12",
      component: React.lazy(() => import("./50-day-challenge/day-12/index")),
    },
    {
      name: "day-13",
      component: React.lazy(() => import("./50-day-challenge/day-13")),
    },
    {
      name: "day-14",
      component: React.lazy(() => import("./50-day-challenge/day-14")),
    },
    {
      name: "day-15",
      component: React.lazy(() => import("./50-day-challenge/day-15")),
    },
    {
      name: "day-16",
      component: React.lazy(() => import("./50-day-challenge/day-16")),
    },
    {
      name: "day-17",
      component: React.lazy(() => import("./50-day-challenge/day-17")),
    },
    {
      name: "day-18",
      component: React.lazy(() => import("./50-day-challenge/day-18")),
    },
    {
      name: "day-19",
      component: React.lazy(() => import("./50-day-challenge/day-19/index")),
    },
    {
      name: "day-20",
      component: React.lazy(() => import("./50-day-challenge/day-20")),
    },
    {
      name: "day-21",
      component: React.lazy(() => import("./50-day-challenge/day-21")),
    },
    // {
    //   name: "test",
    //   component: React.lazy(() => import("./50-day-challenge/test/index")),
    // },
  ],
};
