import { GlazeWmOutput } from "zebar";
import "./Workspace.css"

export interface GlazewmProps {
  glazewm: GlazeWmOutput
}

export function Workspace({glazewm}: GlazewmProps) {
  return (
    <div className="workspaces">
      {glazewm.currentWorkspaces.map(workspace => (
        <button
          className={`workspace ${workspace.hasFocus && 'focused'} ${workspace.isDisplayed && 'displayed'}`}
          onClick={() =>
            glazewm.runCommand(
              `focus --workspace ${workspace.name}`,
            )
          }
          key={workspace.name}
        >
          {workspace.displayName ?? workspace.name}
        </button>
      ))}
    </div>
  )
}
