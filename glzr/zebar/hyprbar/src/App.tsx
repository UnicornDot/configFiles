// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './App.css'
import { Weather } from './widgets/Weather'
import * as zebar from "zebar"
import { AI } from './widgets/AI';
import { Media } from './widgets/Media';
import { Mode } from './widgets/Mode';
import { AppIcon } from './widgets/AppIcon';
import { Workspace } from './widgets/Workspace';
import { Direction } from './widgets/Direction';
import { Notify } from './widgets/Notify';
import { Date } from './widgets/Date';
import { Cpu } from './widgets/Cpu';
import { Memory } from './widgets/Memory';
import { Battery } from './widgets/Battery';
import { Network } from './widgets/Network';


const providers = zebar.createProviderGroup({
  weather: { type: "weather" },
  media: { type: "media" },
  glazewm: { type: "glazewm" },
  date: { type: "date", formatting: "yyyy/MM/dd", locale: "zh" },
  time: { type: "date", formatting: "t EEE", locale: "zh" },
  cpu: { type: "cpu" },
  battery: { type: "battery" },
  memory: { type: "memory" },
  network: { type: "network" }
})

function App() {
  const [output, setOutput] = useState(providers.outputMap);
  useEffect(() => {
    providers.onOutput(() => setOutput(providers.outputMap));

  })

  return (
    <>
      <div className="app">
        <div className="left">
          {output.weather && <Weather weather={output.weather} />}
          {output.glazewm && <Mode mode={output.glazewm} />}
          <AI />
          {output.media && <Media media={output.media} />}
        </div>
        <div className="center">
          <AppIcon />
          {output.glazewm && <Workspace glazewm={output.glazewm} />}
          {output.glazewm && <Direction glazewm={output.glazewm} />}
        </div>
        <div className="right">
          {output.network && <Network network={output.network} />}
          {output.cpu && <Cpu cpu={output.cpu} />}
          {output.memory && <Memory memory={output.memory} />}
          {output.battery && <Battery battery={output.battery} />}
          {output.date && output.time && <Date date={output.date} time={output.time} />}
          <Notify />
        </div>
      </div>
    </>
  )
}

export default App
