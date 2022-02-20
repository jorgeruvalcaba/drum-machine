import React, { useState } from "react"

interface ButtonProps {
  text: string
  sourceFile: string
}

const Button = ({ text, sourceFile }: ButtonProps): JSX.Element => {
  const [audio] = useState(new Audio(sourceFile))

  const play = () => {
    audio.play()
  }

  return (
    <div
      className="drum-pad border-solid h-16 w-16 m-2 p-4 border-4 align-bottom text-center"
      id={`${text}`}
      onClick={play}
    >
      {text}
    </div>
  )
}

export default Button
