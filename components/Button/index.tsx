import React, {useState, useEffect} from 'react'

interface ButtonProps {
  text: string
  sourceFile: string
}

const Button = ({text, sourceFile}: ButtonProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>()

  useEffect(() => {
    setAudio(new Audio(sourceFile))
  }, [sourceFile])

  const play = () => {
    if (audio) audio.play()
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
