import { Icon } from "../components/icons/Icon";
import "./AI.css"
import deepseek from "../assets/ai.svg";
import * as zebar from "zebar";

async function openAI() {
  await zebar.shellSpawn("msedge", "--url https://chat.deepseek.com");
}

export function AI() {
  return (
    <div onClick={() => openAI()}>
      <Icon path={deepseek} classes="ai-agent"/>
    </div>
  )
}
