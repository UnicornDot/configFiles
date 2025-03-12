import appIcon from "../assets/app_icon.svg";
import { Icon } from "../components/icons/Icon";
import "./AppIcon.css"

export function AppIcon() {
  return (
    <>
      <Icon path={appIcon} classes="logo"/>
    </>
  )
}
