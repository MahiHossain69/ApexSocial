import { ApplicationIcon, CandidatesIcon, HomeIcon, InterviewsIcon, MessagesIcon, SearchIcon } from "@/components/shared/svgs";

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Care Professionals",
    href: "/careProfessionals",
    icon: SearchIcon,
  },
  {
    label: "Candidates",
    href: "/candidates",
    icon: CandidatesIcon,
  },
  {
    label: "My Messages",
    href: "/messages",
    icon: MessagesIcon,
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: InterviewsIcon,
  },
  {
    label: "My Application",
    href: "/my-application",
    icon: ApplicationIcon,
  },
];
