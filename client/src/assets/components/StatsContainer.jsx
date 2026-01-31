import Wrapper from "../wrappers/StatsContainer";
import StatItem from "../wrappers/StatItem";
import { FaBriefcase, FaCalendarCheck, FaTrophy, FaTimesCircle } from "react-icons/fa";

const StatCard = ({ count, title, icon, color, bcg }) => {
  return (
    <StatItem color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </StatItem>
  );
};

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "applied jobs",
      count: defaultStats?.applied || 0,
      icon: <FaBriefcase />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "job offers",
      count: defaultStats?.offer || 0,
      icon: <FaTrophy />,
      color: "#16a34a",
      bcg: "#dcfce7",
    },
    {
      title: "jobs rejected",
      count: defaultStats?.rejected || 0,
      icon: <FaTimesCircle />,
      color: "#dc2626",
      bcg: "#fee2e2",
    },
  ];

  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatCard key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
