import { Icon } from "../components/icons/Icon";
import { NetworkOutput } from "zebar";
import wifiLow from "../assets/wifi_low.svg"
import wifi40 from "../assets/wifi_40.svg"
import wifi60 from "../assets/wifi_60.svg"
import wifi80 from "../assets/wifi_80.svg"
import wifiFull from "../assets/wifi_full.svg"
import ethernet from "../assets/ethernet.svg"
import networkLose from "../assets/network_lose.svg"
import "./Network.css"


const calSpeed = (siValue: number|undefined, siUnit: string | undefined ) => {
  if (siValue && siUnit) {
    return siValue + siUnit
  }
  return "0kb/s"
}

const networkIcon = (network: NetworkOutput ) => {
  switch(network.defaultInterface?.type) {
    case "ethernet":
      return ethernet;
    case "wifi":
      if (!network.defaultGateway || !network.defaultGateway.signalStrength) return networkLose;
      if (network.defaultGateway.signalStrength >= 80) return wifiFull;
      if (network.defaultGateway.signalStrength >= 60) return wifi80;
      if (network.defaultGateway.signalStrength >= 40) return wifi60;
      if (network.defaultGateway.signalStrength >= 20) return wifi40;
      return wifiLow;
    default: 
      return networkLose
  }
}

export interface NetworkProps {
  network: NetworkOutput
}

export function Network({network}: NetworkProps) {
  return (
    <div className="network-block">
      <Icon path={networkIcon(network)} classes="network-icon"/>
      <div className="network-value">
        <div>
          <i>↑</i>
          <i>{calSpeed(network.traffic?.transmitted.siValue, network.traffic?.transmitted.siUnit)}</i>
        </div>
        <div>
          <i>↓</i>
          <i>{calSpeed(network.traffic?.received.siValue, network.traffic?.received.siUnit)}</i>
        </div>
      </div>
    </div>
  ) 
}
