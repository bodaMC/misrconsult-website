"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/hero-media";

function HeroHeadline() {
  return (
    <h1 className="hero-cinematic__headline">
      <span className="hero-cinematic__headline-line text-white"></span>
      <span className="hero-cinematic__headline-line text-white"></span>
      <span className="hero-cinematic__headline-line hero-cinematic__headline-accent">
        
      </span>
    </h1>
  );
}

function PlayPauseIcon({ playing }: { playing: boolean }) {
  if (playing) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
        <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 translate-x-px">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function useHeroVideo(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadeddata", play);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    play();

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [videoRef]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }, [videoRef]);

  return { isPlaying, togglePlay };
}

export function HeroCinematic() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, togglePlay } = useHeroVideo(videoRef);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const exitOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.35, 0], {
    clamp: true,
  });
  const exitScale = useTransform(scrollYProgress, [0, 1], [1, 1.04], { clamp: true });
  const exitY = useTransform(scrollYProgress, [0, 1], [0, -56], { clamp: true });
  const exitBlur = useTransform(scrollYProgress, [0, 0.45, 1], [0, 4, 14], { clamp: true });
  const exitFilter = useTransform(exitBlur, (v) => `blur(${v}px)`);

  if (reducedMotion) {
    return (
      <section
        id="hero"
        ref={heroRef}
        className="hero-cinematic relative h-svh overflow-hidden bg-misr-950"
        aria-label="MisrConsult introduction"
      >
        <HeroScene
          videoRef={videoRef}
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          animate={false}
        />
      </section>
    );
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-cinematic relative h-svh overflow-hidden bg-misr-950"
      aria-label="MisrConsult introduction"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: exitOpacity,
          scale: exitScale,
          y: exitY,
          filter: exitFilter,
        }}
      >
        <HeroScene
          videoRef={videoRef}
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          animate
        />
      </motion.div>
    </section>
  );
}

function HeroScene({
  videoRef,
  isPlaying,
  onTogglePlay,
  animate,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  onTogglePlay: () => void;
  animate: boolean;
}) {
  return (
    <>
      <div className="absolute inset-0">
        <div className="hero-cinematic__video-wrap">
          <video
            ref={videoRef}
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_VIDEO_POSTER}
            className="hero-cinematic__video"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
        <div className="hero-cinematic__brand-tint" />
        <div className="hero-cinematic__edge-mask" aria-hidden />
        <div className="hero-cinematic__readability-gradient" aria-hidden />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-28 sm:px-12 sm:pb-32 lg:px-16 lg:pb-36">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <HeroHeadline />
          </motion.div>
        ) : (
          <HeroHeadline />
        )}

        <div className="mt-10">
          <button
            type="button"
            onClick={onTogglePlay}
            className="hero-cinematic__play-btn"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <PlayPauseIcon playing={isPlaying} />
          </button>
        </div>
      </div>
    </>
  );
}
