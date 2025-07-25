import { MenuItem, NavMenuItem } from "@/types";
import {
  FaChartBar,
  FaClipboardList,
  FaEnvelope,
  FaMoneyCheckAlt,
  FaQuestion,
  FaShapes,
  FaTicketAlt,
  FaUndo,
  FaUserFriends,
  FaUsers,
  FaVectorSquare,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { PiQuestionMarkFill } from "react-icons/pi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export const sidebarMenu: NavMenuItem[] = [
  { title: "Dashboard", path: "/", icon: MdOutlineDashboard },
  { title: "Zone Management", path: "/zone-management", icon: FaVectorSquare },
  {
    title: "Category Management",
    path: "/category-management",
    icon: FaShapes,
  },
  {
    title: "Field Management",
    path: "/field-management",
    icon: TbAdjustmentsHorizontal,
  },
  { title: "User Verification", path: "/user-verification", icon: FaUsers },
  { title: "Rental Listing", path: "/rental-listing", icon: FaClipboardList },
  {
    title: "Business Settings",
    path: "/business-settings",
    icon: FaMoneyCheckAlt,
  },
  { title: "Tickets", path: "/tickets", icon: FaTicketAlt },
  { title: "Refund Management", path: "/refund-management", icon: FaUndo },
  {
    title: "Staff Management",
    path: "/staff-management",
    icon: FaUserFriends,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: FaChartBar,
  },
  { title: "Messages", path: "/messages", icon: FaEnvelope },
  { title: "Help & Support", path: "/help-support", icon: FaQuestion },
  { title: "FAQs", path: "/faqs", icon: PiQuestionMarkFill },
  // { title: "Administration", path: "/administration", icon: FaBuilding },
];

// Navigation items with icons
export const navMenu: MenuItem[] = [
  { href: "/user-verification", label: "User" },
  { href: "/analytics", label: "reports" },
  { href: "/rental-listing", label: "listing" },
  { href: "/rental-policies", label: "rental policies" },
];

// export const navMenu: MenuItem[] = [
//   { href: "/", label: "leaser" },
//   { href: "/reports", label: "reports" },
//   { href: "/blocked", label: "blocked" },
//   { href: "/listing", label: "listing" },
//   { href: "/settings", label: "settings" },
// ];

export const businessNavMenu: MenuItem[] = [
  { href: "/", label: "Business Information" },
  { href: "/payment-methods", label: "Payment Methods" },
  { href: "/sms-module", label: "SMS Module" },
  { href: "/mail-config", label: "Mail Config" },
  { href: "/map-apis", label: "Map API’s" },
  { href: "/social-logins", label: "Socials Logins" },
  { href: "/recaptcha", label: "Recaptcha" },
  { href: "/firebase", label: "Firebase" },
  // { href: "/storage", label: "Storage" },
];
