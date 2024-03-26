'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard () {
    const [playing, setPlaying] = useState(true)
    useWindowListener('contextmenu', (event) => {event.preventDefault()})

    return (
        <div className="w-screen h-[100vh]">
            <VideoPlayer vdoSrc="/vdo/coWorking.mp4" isPlaying={playing}/>
        </div>
    )
}