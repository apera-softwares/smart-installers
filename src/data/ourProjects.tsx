"user client";
import {
  AccessControllAndIntercoms,
} from "@/icons";

import ResidentialProjectsTab from "@/components/projects/ResidentialProjectsTab";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}


export const ourProjectTabs: TabItem[] = [
  {
    id: "compensation-tab-1",
    label: `Residential Projects`,
    content: <ResidentialProjectsTab />,
  },
  {
    id: "compensation-tab-2",
    label: `Commercial Projects`,
    content: <ResidentialProjectsTab />,
  },
  {
    id: "compensation-tab-3",
    label: `Office Projects`,
    content: <ResidentialProjectsTab />,
  },
  {
    id: "compensation-tab-4",
    label: `High-Rise Projects`,
    content: <ResidentialProjectsTab />,
  },
  {
    id: "compensation-tab-5",
    label: `Custom Work`,
    content: <ResidentialProjectsTab />,
  },
];

export const ourProjects = [
  {
    id: "project-101",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },
  {
    id: "project-102",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },
  {
    id: "project-103",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },
  {
    id: "project-104",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },
  {
    id: "project-105",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },
  {
    id: "project-106",
    icon: <AccessControllAndIntercoms />,
    project: " Smart Office Revamp – Downtown Manhattan",
    description:
      "Installed commercial-grade mesh Wi-Fi, biometric door access, and 12 HD surveillance cameras.",
  },

];
