import { WeatherOutput } from "zebar"
import { Icon } from "../components/icons/Icon"
import "./weather.css"
import clearDay from "../assets/clear_day.svg"
import clearNight from "../assets/clear_night.svg"
import cloudyDay from "../assets/cloudy_day.svg"
import cloudyNight from "../assets/cloudy_night.svg"
import lightRainDay from "../assets/light_rain_day.svg"
import lightRainNight from "../assets/light_rain_night.svg"
import heavyRainDay from "../assets/heavy_rain_day.svg"
import heavyRainNight from "../assets/heavy_rain_night.svg"
import snowDay from "../assets/snow_day.svg"
import snowNight from "../assets/snow_night.svg"
import thunderDay from "../assets/thunder_day.svg"
import thunderNight from "../assets/thunder_night.svg"

export interface WeatherProps {
  weather: WeatherOutput
}

const icons = {
  clear_day: clearDay,
  clear_night: clearNight,
  cloudy_day: cloudyDay,
  cloudy_night: cloudyNight,
  light_rain_day: lightRainDay,
  light_rain_night: lightRainNight,
  heavy_rain_day: heavyRainDay,
  heavy_rain_night: heavyRainNight,
  snow_day: snowDay,
  snow_night: snowNight,
  thunder_day: thunderDay,
  thunder_night: thunderNight

}

export function Weather({ weather } : WeatherProps) {
  const icon  = icons[weather.status]
    return (
      <div className="weacher">
        <Icon path={icon} classes="wea-icon"/>
        <div className="wea-value">{Math.round(weather.celsiusTemp)}°C</div>
      </div>
    )
}
