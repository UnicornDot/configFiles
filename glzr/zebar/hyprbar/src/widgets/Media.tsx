
import { MediaOutput, MediaSession } from "zebar"
import mediaIcon from "../assets/media.svg"
import { Icon } from "../components/icons/Icon";
import "./Media.css"

export interface MediaProps {
  media: MediaOutput
}

const showTitle = (session: MediaSession) => {
  const title = session.title;
  if (title) {
    if (title.length > 26) {
      return title.substring(0, 26) + "...";
    } else {
      return title;
    }
  }
  return "";
}

export function Media({media} : MediaProps) {
  return (
    <div className="media">
      <Icon path={mediaIcon} classes="media-icon"/>
      <div>{media.session && showTitle(media.session)} </div>
    </div>
  )
}
