import { ICardProps, TimePeriod } from "../types/types";
import IconEllipsis from "../assets/images/icon-ellipsis.svg";
import "../css/card.css";

export const Card = ({ className, item, timePeriod }: ICardProps) => {
  const { title, timeframes } = item;

  const currentTimeFrame = timeframes[timePeriod as TimePeriod];

  return (
    <section className={className}>
      <article>
        <div className="card_header">
          <h2>{title}</h2>
          <img src={IconEllipsis} alt="Options menu" />
        </div>

        <div className="card_time">
          <h3>
            {currentTimeFrame.current}
            {currentTimeFrame.current === 1 ? "hr" : "hrs"}
          </h3>
          <h4>
            Last Week - {currentTimeFrame.previous}
            {currentTimeFrame.previous === 1 ? "hr" : "hrs"}
          </h4>
        </div>
      </article>
    </section>
  );
};
