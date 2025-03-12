import { Icon } from "../components/icons/Icon";
import notification from "../assets/notification.svg"
import * as zebar from "zebar";

async function openNotification() {
  await zebar.shellSpawn("powershell","~/.glzr/zebar/OpenNotificationCenter.ps1");
}

export function Notify() {
  return (
    <div onClick={() => openNotification()}>
      <Icon path={notification} classes="notification"/>
    </div>
  )
}
