/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

type VideoType = "video/mp4" | "video/webm" | "video/ogg" | "video/x-m4v";

export interface VideoJsOptions {
  type?: VideoType;
  src?: string | { type: VideoType; src: string }[];
  autoplay?: boolean | "muted" | "play" | "any";
  controls?: boolean;
  responsive?: boolean;
  fluid?: boolean;
  height?: number | string;
  width?: number | string;
  loop?: boolean;
  poster?: string;
  preload?: "auto" | "metadata" | "none";
  aspectRatio?: string | "16:9" | "4:3" | "1:1";
  audioOnlyMode?: boolean;
  autoSetup?: boolean;
  breakpoints?: {
    tiny?: number;
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    xlarge?: number;
    huge?: number;
  };
  children?: [] | { [index: string]: any };
  disablePictureInPicture?: boolean;
  enableDocumentPictureInPicture?: boolean;
  experimentalSvgIcons?: boolean;
  fullscreen?: boolean;
  options?: {
    navigationUI: "hide" | "show";
    [index: string]: any;
  };
  id?: string;
  inactivityTimeout?: number;
  language?: "en" | "fa" | string;
  languages?: object;
  liveui?: boolean;
  liveTracker?: {
    trackingThreshold?: number;
    liveTolerance?: number;
  };
  nativeControlsForTouch?: boolean;
  normalizeAutoplay?: boolean;
  notSupportedMessage?: string;
  noUITitleAttributes?: boolean;
  playbackRates?: number[];
  plugins?: {
    [index: string]: any;
  };
  preferFullWindow?: boolean;
  restoreEl?: boolean;
  skipButtons?: {
    forward?: 5 | 10 | 30;
    backward?: 5 | 10 | 30;
  };
  sources?: {
    src: string;
    type: VideoType;
  }[];
  suppressNotSupportedError?: boolean;
  techCanOverridePoster?: boolean;
  techOrder?: string[];
  userActions?: {
    click?: boolean | ((event: any) => void);
    doubleClick?: boolean | ((event: any) => void);
    hotkeys?:
      | boolean
      | ((event: any) => void)
      | {
          fullscreenKey?: (event: any) => void;
          muteKey?: (event: any) => void;
          playPauseKey?: (event: any) => void;
        };
  };
  "vtt.js"?: string;
  nativeAudioTracks?: boolean;
  nativeTextTracks?: boolean;
  nativeVideoTracks?: boolean;
  preloadTextTracks?: boolean;

  [index: string]: any;
}

export interface ReactVideoJsProps {
  onReady?: (player: Player) => void;
  options: VideoJsOptions;
}

export const ReactVideoJs = (props: ReactVideoJsProps) => {
  const videoRef = React.useRef<any>(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default ReactVideoJs;
