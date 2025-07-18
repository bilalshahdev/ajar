import { DashboardStat } from "@/types";
import { BiCategoryAlt } from "react-icons/bi";
import { FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineRequestPage } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import StatsCard from "../cards/stats-card";

const dashboardStats: DashboardStat[] = [
  {
    title: "Users",
    value: 486,
    icon: HiUsers,
    bgColor: "bg-rose-500",
  },
  {
    title: "Zones",
    value: 14,
    icon: FaMapMarkedAlt,
    bgColor: "bg-orange-500",
  },
  {
    title: "Categories",
    value: 43,
    icon: BiCategoryAlt,
    bgColor: "bg-pink-500",
  },
  {
    title: "Leasers",
    value: 2,
    icon: FaHandshake,
    bgColor: "bg-green-500",
  },
  {
    title: "Total Earning",
    value: 57,
    icon: RiMoneyDollarCircleFill,
    bgColor: "bg-yellow-500",
  },
  {
    title: "Requests",
    value: 21,
    icon: MdOutlineRequestPage,
    bgColor: "bg-blue-500",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dashboardStats.map(({ title, value, icon: Icon, bgColor }) => (
        <StatsCard
          key={title}
          title={title}
          value={value.toString()}
          icon={<Icon />}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
