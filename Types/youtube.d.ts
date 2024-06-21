// types/youtube.d.ts
declare global {
    interface Window {
      onYouTubeIframeAPIReady: () => void;
    }
  
    namespace YT {
      class Player {
        constructor(id: string | HTMLElement, options: YT.PlayerOptions);
        playVideo(): void;
        mute(): void;
        unMute(): void;
        setLoop(loop: boolean): void;
      }
  
      interface PlayerOptions {
        events: {
          onReady?: (event: YT.PlayerEvent) => void;
          onStateChange?: (event: YT.OnStateChangeEvent) => void;
        };
      }
  
      interface PlayerEvent {
        target: YT.Player;
      }
  
      interface OnStateChangeEvent extends PlayerEvent {
        data: number;
      }
  
      const PlayerState: {
        PLAYING: number;
      };
    }
  }
  
  export {};
  