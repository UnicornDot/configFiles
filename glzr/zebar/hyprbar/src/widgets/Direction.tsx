import { GlazewmProps } from "./Workspace";
import horizontal from "../assets/horizontal.svg"
import vertical from "../assets/vertical.svg"
import { Icon } from "../components/icons/Icon";
import "./Direction.css"

const directionIcon = (direction: string) => {
  switch (direction) {
    case "horizontal": return horizontal;
    case "vertical": return vertical;
    default: return "";
  }
}

export function Direction({ glazewm }: GlazewmProps) {
  return (
    <div onClick={() => glazewm.runCommand('toggle-tiling-direction')}>
      <Icon path={glazewm.tilingDirection && directionIcon(glazewm.tilingDirection)} classes="tiling-direction" />
    </div>
  )
}
