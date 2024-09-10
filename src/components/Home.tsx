import { useState } from "react";

import data from "../../data.json";
import { Card } from "./Card";
import Avatar from "../assets/images/image-jeremy.png";
import "../css/home.css";

export const Home = () => {
  const [timePeriod, setTimePeriod] = useState<string>("daily");

  const timeFrame = ["daily", "weekly", "monthly"];
  const classes = [
    "bg-work",
    "bg-play",
    "bg-study",
    "bg-exercise",
    "bg-social",
    "bg-care",
  ];

  return (
    <section className="grid_container">
      <article className="header">
        <div className="header_info">
          <img src={Avatar} alt="" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
        <ul>
          {timeFrame.map((frame) => (
            <li
              className={timePeriod === frame ? "active" : ""}
              key={frame}
              onClick={() => setTimePeriod(frame)}
            >
              {frame}
            </li>
          ))}
        </ul>
      </article>
      <article className="cards">
        {data.map((item, index) => (
          <Card
            key={item.title}
            className={`card ${classes[index % classes.length]}`}
            item={item}
            timePeriod={timePeriod}
          />
        ))}
      </article>
    </section>
  );
};
