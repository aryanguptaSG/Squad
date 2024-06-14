import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "SUPER ADMIN",
    label: "Super Admin",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "ADMIN",
    label: "Admin",
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
