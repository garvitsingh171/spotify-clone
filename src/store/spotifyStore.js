import { create } from 'zustand'

export const useSpotifyStore = create((set) => ({
  
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.7,
  
  setCurrentTrack: (track) => set({ currentTrack: track }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  setCurrentTime: (time) => set({ currentTime: time }),
  
  setDuration: (duration) => set({ duration }),
  
  setVolume: (volume) => set({ volume }),
  
  nextTrack: () => {
    console.log("Next track would play here")
  },
  
  prevTrack: () => {
    console.log("Previous track would play here")
  }
  
}))
