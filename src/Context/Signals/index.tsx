import { effect, signal } from "@preact/signals-react";

export const workSpace = signal(localStorage.getItem("workSpace")!);
effect(() => {
  localStorage.setItem("workSpace", workSpace.value);
});

export const sideBarExpanded = signal(false);

export const peopleInWorkspace = signal(
  JSON.parse(localStorage.getItem("peopleInWorkspace")!) || [
    {
      role: "ADMIN",
      email: "ken99@yahoo.com",
    },
    {
      role: "SUPER ADMIN",
      email: "Abe45@gmail.com",
    },
    {
      role: "TEACHER",
      email: "Monserrat44@gmail.com",
    },
    {
      role: "STUDENT",
      email: "Silas22@gmail.com",
    },
    {
      role: "SUPER ADMIN",
      email: "Abe45@gmail.com",
    },
    {
      role: "TEACHER",
      email: "Monserrat44@gmail.com",
    },
    {
      role: "STUDENT",
      email: "Silas22@gmail.com",
    },
  ]
);
