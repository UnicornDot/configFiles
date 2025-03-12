import { DateOutput } from "zebar"
import "./Date.css"
import clockIcon  from "../assets/clock.svg";
import { Icon } from "../components/icons/Icon";

export interface DateProps {
  time: DateOutput,
  date: DateOutput,
}


export function Date({date, time}: DateProps) {
  return (
    <div className="date-block">
      <Icon path={clockIcon} classes="date"/>
      <div className="date-value">
        <i>{time?.formatted} </i>
        <i>{date?.formatted} </i>
      </div>
    </div>
  )
}
