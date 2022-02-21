import React from "react"

import Button from "./button"

const DrumContainer = () => {
  return (
    <div className="max-w-md bg-white shadow-lg p-4 w-full">
      <div className="flex flex-row justify-center">
        <Button
          text="Q"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        <Button
          text="W"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        />
        <Button
          text="E"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
      </div>
      <div className="flex flex-row justify-center">
        <Button
          text="A"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        />
        <Button
          text="S"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        />
        <Button
          text="D"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        />
      </div>
      <div className="flex flex-row justify-center">
        <Button
          text="Z"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        />
        <Button
          text="X"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        />
        <Button
          text="C"
          sourceFile="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        />
      </div>
    </div>
  )
}

export default DrumContainer
