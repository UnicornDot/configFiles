import { Icon } from "../components/icons/Icon"
import { BatteryOutput } from "zebar"
import "./Battery.css"
import batteryLow from "../assets/batter_low.svg"
import battery40 from "../assets/batter_40.svg"
import battery60 from "../assets/batter_60.svg"
import battery80 from "../assets/batter_80.svg"
import batteryFull from "../assets/batter_full.svg"
import charging from "../assets/charging.svg"

export interface BatteryProps {
  battery: BatteryOutput
}

const batteryIcon = (battery: BatteryOutput) => {
  if (battery.isCharging) return charging;
  if (battery.chargePercent > 90) return batteryFull;
  if (battery.chargePercent > 60) return battery80;
  if (battery.chargePercent > 40) return battery60;
  if (battery.chargePercent > 20) return battery40;
  return batteryLow
}


export function Battery({battery}: BatteryProps) {
  return (
    <div className="battery-block">
      <Icon path={batteryIcon(battery)} classes="battery-icon"/>
      <div className="battery-value">
        {Math.round(battery.chargePercent)}%
      </div>
    </div>
  )
}
