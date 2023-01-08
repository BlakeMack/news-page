import { useState } from "react";

export default function UseHover () {
  const [hovered, setHovered] = useState(false)

  function enter(params) {
    setHovered(true)
    console.log(hovered)
  }

  function leave(params) {
    setHovered(false)
    console.log(hovered)
  }

  return [hovered, enter, leave]
}
