import { Icon } from "../components/icons/Icon"
import { GlazeWmOutput } from "zebar"
import "./Mode.css"
import resizeIcon from "../assets/resize_mode.svg"
import pauseIcon from "../assets/pause_mode.svg"

export interface ModeProps {
  mode: GlazeWmOutput
}

const modeIcon = (name: string) => {
  switch (name) {
    case "resize": return resizeIcon;
    case "pause": return pauseIcon;
    default: return "";
  }
}

export function Mode({mode}: ModeProps) {
  return (
    <div className="bind-mode">
      {mode.bindingModes && mode.bindingModes.map(mode => (
        <div key={mode.name}>
          <Icon path={modeIcon(mode.displayName ?? mode.name)} classes="mode"/>
        </div>
      ))}
    </div>
  )
}
