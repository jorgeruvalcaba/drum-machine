import type { NextPage } from "next"
import Head from "next/head"

import Button from "../components/Button"

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-orange-300 flex flex-col justify-center">
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="Side project to test Audio API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Drum Machine 👩‍🎤
        </h1>
        <div className="flex justify-center">
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
        </div>
      </main>

      <footer className="w-full mt-10 flex justify-center">
        <span>© {new Date().getFullYear()}</span>
        <a className="underline ml-1" href="https://jorgearuv.dev">
          Jorge Ruvalcaba
        </a>
      </footer>
    </div>
  )
}

export default Home
