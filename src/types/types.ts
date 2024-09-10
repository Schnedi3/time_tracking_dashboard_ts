interface Item {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

export interface ICardProps {
  className: string;
  item: Item;
  timePeriod: string;
}

export type TimePeriod = "daily" | "weekly" | "monthly";
