"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/hero-media";

export function HeroPresentationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const syncAmbient = useCallback(() => {
    const main = videoRef.current;
    const ambient = ambientRef.current;
    if (!main || !ambient || main.paused) return;
    if (Math.abs(ambient.currentTime - main.currentTime) > 0.35) {
      ambient.currentTime = main.currentTime;
    }
  }, []);

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    const ambient = ambientRef.current;
    if (!video) return;

    if (video.ended) {
      video.currentTime = 0;
    }

    video
      .play()
      .then(() => {
        setIsPlaying(true);
        if (ambient) {
          ambient.currentTime = video.currentTime;
          void ambient.play().catch(() => {});
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const main = videoRef.current;
    if (!main) return;

    const onTimeUpdate = () => syncAmbient();
    main.addEventListener("timeupdate", onTimeUpdate);
    return () => main.removeEventListener("timeupdate", onTimeUpdate);
  }, [syncAmbient, isPlaying]);

  return (
    <div className="hero-video-fade-in w-full lg:justify-self-end">
      <div className="hero-presentation-stack relative w-full">
        <div className="hero-presentation-ambient" aria-hidden>
          <video
            ref={ambientRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
            tabIndex={-1}
            className="hero-presentation-ambient__video"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="hero-presentation-ambient__veil" />
        </div>

        <div
          className={`hero-presentation-frame relative z-[1] aspect-video w-full overflow-hidden rounded-[14px] ${
            isPlaying ? "hero-presentation-frame--playing" : ""
          }`}
        >
          <video
            ref={videoRef}
            poster={HERO_VIDEO_POSTER}
            playsInline
            preload="metadata"
            controls={isPlaying}
            className="absolute inset-0 h-full w-full object-cover"
            onPlay={() => {
              setIsPlaying(true);
              const ambient = ambientRef.current;
              const main = videoRef.current;
              if (ambient && main) {
                ambient.currentTime = main.currentTime;
                void ambient.play().catch(() => {});
              }
            }}
            onPause={() => {
              const video = videoRef.current;
              const ambient = ambientRef.current;
              if (video && video.currentTime < 0.25) {
                setIsPlaying(false);
                ambient?.pause();
              }
            }}
            onEnded={() => {
              setIsPlaying(false);
              const ambient = ambientRef.current;
              if (ambient) {
                ambient.pause();
                ambient.currentTime = 0;
              }
            }}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-misr-950/20 transition-colors duration-500 hover:bg-misr-950/30"
              aria-label="Play company presentation"
            >
              <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-misr-gold/35 bg-misr-950/55 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-misr-gold/60 group-hover:bg-misr-950/70">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 text-misr-gold transition-transform duration-500 group-hover:scale-110"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
