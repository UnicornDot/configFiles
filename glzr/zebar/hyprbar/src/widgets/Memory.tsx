import {Icon } from "../components/icons/Icon";
import { MemoryOutput } from "zebar";
import memIconLow from "../assets/mem_low.svg"
import memIcon40 from "../assets/mem_40.svg"
import memIcon60 from "../assets/mem_60.svg"
import memIcon80 from "../assets/mem_80.svg"
import memIconFull from "../assets/mem_full.svg"

import "./Memory.css"

const memIcon = (value: number) => {
  if (value < 20) return memIconLow
  if (value < 40) return memIcon40
  if (value < 60) return memIcon60
  if (value < 80) return memIcon80
  return memIconFull
}

export interface MemoryProps {
  memory: MemoryOutput
}

export function Memory({memory}: MemoryProps) {
  return (
    <div className="memory-block">
      <Icon path={memIcon(memory.usage)} classes="memory-icon"/>
      <div className="memory-value">
        <i>mem</i>
        <i>{Math.round(memory.usage)}%</i>
      </div>
    </div>
  )
}
