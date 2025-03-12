import {Icon } from "../components/icons/Icon";
import { CpuOutput } from "zebar"; 
import cpuIconLow from "../assets/cpu_low.svg"
import cpuIcon40 from "../assets/cpu_40.svg"
import cpuIcon60 from "../assets/cpu_60.svg"
import cpuIcon80 from "../assets/cpu_80.svg"
import cpuIconFull from "../assets/cpu_full.svg"
import "./Cpu.css"

const cpuIcon = (value: number) => {
  if (value < 20) return cpuIconLow
  if (value < 40) return cpuIcon40
  if (value < 60) return cpuIcon60
  if (value < 80) return cpuIcon80
  return cpuIconFull
}

export interface CpuProps {
  cpu: CpuOutput
}

export function Cpu({cpu} : CpuProps) {
  return (
    <div className="cpu-block">
      <Icon path={cpuIcon(cpu.usage)} classes="cpu-icon"/>
      
      <div className="cpu-value">
        <i>cpu</i>
        <i>{Math.round(cpu.usage)}%</i>
      </div>
    </div>
  )
}
