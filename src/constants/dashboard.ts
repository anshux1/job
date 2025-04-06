import {
  Bookmark,
  BriefcaseBusiness,
  CirclePlus,
  CircleUser,
  Layers,
  Settings2,
} from "lucide-react"

export const employerDashboard = [
  {
    Icon: Layers,
    lable: "Overview",
    link: "/employer/dashboard",
  },
  {
    Icon: CircleUser,
    lable: "Employers Profile",
    link: "/employer/profile",
  },
  {
    Icon: CirclePlus,
    lable: "Post a Job",
    link: "/employer/post-job",
  },
  {
    Icon: BriefcaseBusiness,
    lable: "My Jobs",
    link: "/employer/my-jobs",
  },
  {
    Icon: Bookmark,
    lable: "Saved Candidates",
    link: "/employer/saved-candidates",
  },
  {
    Icon: Settings2,
    lable: "Settings",
    link: "/employer/settings",
  },
]
