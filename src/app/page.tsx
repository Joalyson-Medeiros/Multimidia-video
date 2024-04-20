'use client'
import videos, { Video } from "./data/video";

import { useContext, useState } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPlay, FaVolumeMute, FaExpand } from "react-icons/fa";
import { FaPause, FaVolumeHigh, FaForwardStep } from "react-icons/fa6";

export default function Home() {
  const {
    videoURL,
    totalTime,
    currentTime,
    videoRef,
    canvasRef,
    playing,
    mute,
    volume,
    playPause,
    configCurrentTime,
    configVideo,
    changeVolume,
    changeIconMute,
    nextVideo,    
    changeFullScreen,
  } = useContext(HomeContext);

  const [showVolumeMixer, setShowVolumeMixer] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    changeVolume(volume);
  }

  return (
    <body>
      <main className="mx-auto w-[80%] mt-14 flex">
        <div className="w-[65%]">
          <video className="w-full" ref={videoRef} src={videoURL} hidden></video>
          <canvas className="bg-purple-500 w-full h-[400px]" ref={canvasRef}></canvas>
          <div id="playVolume" className="bg-purple-900">
            <input
              className="ml-4 w-[96%]"
              type="range"
              min={0}
              max={totalTime}
              value={currentTime}
              onChange={(e) => configCurrentTime(Number(e.target.value))}
            >
            </input>

            <button className="text-purple-400 ml-5 mr-1" onClick={playPause}>{playing ? <FaPause /> : <FaPlay />}</button>
            <button className="text-purple-400 ml-5 mr-1" onClick={nextVideo}>{<FaForwardStep />}</button>
            <button className="text-purple-400 ml-5 mr-1" onClick={changeIconMute}
              onMouseEnter={() => setShowVolumeMixer(true)}
              onMouseLeave={() => { if (!showVolumeMixer) setShowVolumeMixer(false) }}> {mute ? <FaVolumeMute /> : <FaVolumeHigh />}
            </button>

            {showVolumeMixer && (
              <span onMouseEnter={() => setShowVolumeMixer(true)} onMouseLeave={() => setShowVolumeMixer(false)}>
                <input
                  type="range"
                  defaultValue={1}
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  className="w-[10%]"
                  onChange={change} />
              </span>
            )}
            
            <button className="text-purple-400 float-right mr-5" onClick={changeFullScreen}><FaExpand /></button>                        
          </div>
        </div>
        <div className="w-[35%] h-[100vh] ml-[10%]">
          {
            videos.map((video: Video, index) => {
              return (
                <div className="bg-purple-400 mb-2">
                  <button className="w-full" onClick={(e) => configVideo(index)}>
                    <div id="element">
                      <img key={index} src={video.imageURL} alt="" className="w-full h[200px]" />
                      <h1 className="text-white ml-8 mr-3">{video.description}</h1>
                    </div>
                  </button>
                </div>
              )
            })
          }
        </div>
      </main>
    </body>
  );
}
