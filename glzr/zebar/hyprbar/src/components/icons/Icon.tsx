export interface IconProps {
  path: string,
  classes: string | string[],
}

export function Icon({ path, classes } : IconProps ) {
  return (
    <div className={Array.isArray(classes) ? classes.join(" ") : classes }>
      <img src={path}/>
    </div>
  )
}
