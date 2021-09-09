import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { smallProjectsPortfolio, comingSoonPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("smallProjects");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "smallProjects",
      title: "Small Projects",
    },
    {
      id: "comingSoon",
      title: "Coming Soon",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "smallProjects":
        setData(smallProjectsPortfolio);
        break;
      case "comingSoon":
        setData(comingSoonPortfolio);
        break;
      default:
        setData(smallProjectsPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Other Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
