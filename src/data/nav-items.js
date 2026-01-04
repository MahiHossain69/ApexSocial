import {
  Achievement,
  ApplicationIcon,
  BlankHeart,
  CandidatesIcon,
  DocumentIcon,
  HomeIcon,
  InfoIcon,
  InterviewsIcon,
  MessagesIcon,
  PlaneIcon,
  SearchIcon,
  SmallBuilding,
  StarIcon,
  UserICon,
} from "@/components/shared/svgs";

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Host Families",
    href: "/host-families",
    icon: SearchIcon,
  },
  // {
  //   label: "Candidates",
  //   href: "/candidates",
  //   icon: CandidatesIcon,
  // },
  // {
  //   label: "My Messages",
  //   href: "/messages",
  //   icon: MessagesIcon,
  // },
  // {
  //   label: "Interviews",
  //   href: "/interviews",
  //   icon: InterviewsIcon,
  // },
  {
    label: "My Favorites",
    href: "/MyFavorites",

    icon: BlankHeart,
  },
  {
    label: "Starred",
    href: "/starred",
    icon: StarIcon,
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

export const secondNavItem = [
  // {
  //   label: "User",
  //   href: "/user",
  //   icon: UserICon,
  // },
  // {
  //   label: "Favorite",
  //   href: "/favorite",
  //   icon: BlankHeart,
  // },
  // {
  //   label: "Star",
  //   href: "/star",
  //   icon: StarIcon,
  // },
  {
    label: "Apex Academy",
    href: "/apex-academy",
    icon: Achievement,
  },
  {
    label: "My Community and My Area Director",
    href: "/my-community-and-area-director",
    icon: SmallBuilding,
  },
  {
    label: "My Travel",
    href: "/my-travel",
    icon: PlaneIcon,
  },
  {
    label: "Program Information and Application Forms",
    href: "/program-information-and-application-forms",
    icon: InfoIcon,
  },
  {
    label: "Resources",
    href: "/resources",
    icon: DocumentIcon,
  },
];
