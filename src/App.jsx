import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api";
import dayjs from "dayjs";
import { getCalendar } from "./utils/calendar";
import { Cell } from "./components/Cell";

function App() {
  const [data, setData] = useState();
  const [weeks, setWeeks] = useState(55);
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  useEffect(() => {
    getData().then((data) => {
      setData(getCalendar(weeks, data, date));
    });
  }, [date, weeks]);

  return (
    <>
      <div className="header">
        <select onChange={(e) => setWeeks(e.target.value)}>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="70">70</option>
        </select>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
        />
      </div>
      {data?.length !== 0 ? (
        <>
          <ul className="list">
            {["Пр", 2, "Ср", 4, "Пт", 6, 7].map((day) => (
              <span className="days" key={day + "day"}>
                {typeof day == "string" && day}
              </span>
            ))}
            {data?.map((item) => (
              <Cell key={item.date + Math.random()} {...item} />
            ))}
          </ul>
        </>
      ) : (
        "Неправельный формат даты"
      )}
      <div className="footer">
        <span>меньше</span>{" "}
        {["#EDEDED", "#ACD5F2", "#7FA8C9", "#527BA0", "#254E77"].map(
          (color) => (
            <div key={color} style={{ background: color }}></div>
          )
        )}
        <span>больше</span>
      </div>
    </>
  );
}

export default App;
