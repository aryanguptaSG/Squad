import {
  CheckCircledIcon,
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "ADMIN",
    label: "Admin",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "SUBADMIN",
    label: "Sub Admin",
    icon: CircleIcon,
  },
  {
    value: "TEACHER",
    label: "Teacher",
    icon: StopwatchIcon,
  },
  {
    value: "STUDENT",
    label: "Students",
    icon: CheckCircledIcon,
  },
];
