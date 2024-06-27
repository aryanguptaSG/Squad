import { effect, signal } from "@preact/signals-react";

export const allWorkspaces: any = signal([]);

export const workSpace: any = signal(null);

export const workSpaceId = signal(localStorage.getItem("workSpaceId"));
effect(() => {
  localStorage.setItem("workSpaceId", String(workSpaceId.value));
});

export const sideBarExpanded = signal(false);

export const peopleInWorkspace = signal([]);

export const feesConfig = signal([
  { name: "Admission Fees", duration: 1 },
  { name: "Exam Fees", duration: 2 },
  { name: "Tution Fees", duration: 12 },
]);

export const classRooms = signal([]);

export const selectedClass = signal("");
