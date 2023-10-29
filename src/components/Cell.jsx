import { useState } from "react";
import { getColor } from "../utils/getColor";
import dayjs from "dayjs";

export const Cell = ({ count, date, newMonthDay }) => {
  const formatDate = dayjs(date).format("dddd MMM DD, YYYY");
  const [over, setOver] = useState(false);
  const color = getColor(count);
  return (
    <li
      className="cell"
      style={{ background: color }}
      onMouseOver={() => {
        setOver(true);
      }}
      onMouseOut={() => setOver(false)}
    >
      {over && (
        <div className="alert_relative">
          <div className="alert">
          <div className="alert_contri">{count} contributions</div>
          <div className="alert_date">{formatDate}</div>
        </div>
        </div>
      )}
      <div></div>
      {newMonthDay ? (
        <div
          className="month"
        >
          {newMonthDay}
        </div>
      ) : null}
    </li>
  );
};
