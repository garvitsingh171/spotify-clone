import { useSpotifyStore } from '../store/spotifyStore'

export default function Player() {
  
  const currentTrack = useSpotifyStore((state) => state.currentTrack)
  const isPlaying = useSpotifyStore((state) => state.isPlaying)
  const currentTime = useSpotifyStore((state) => state.currentTime)
  const duration = useSpotifyStore((state) => state.duration)
  const togglePlay = useSpotifyStore((state) => state.togglePlay)
  const nextTrack = useSpotifyStore((state) => state.nextTrack)
  const prevTrack = useSpotifyStore((state) => state.prevTrack)
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }
  
  if (!currentTrack) {
    return (
      <footer className="h-24 bg-spotify-gray-300 border-t border-spotify-gray-300 p-4 flex items-center justify-center">
        <p className="text-gray-400">Select a track to play</p>
      </footer>
    )
  }
  
  return (
    <footer className="h-24 bg-spotify-gray-300 border-t border-spotify-gray-300 p-4 flex items-center gap-4">
      
      <div className="flex items-center gap-3 w-56">
        <img 
          src={currentTrack.image} 
          alt={currentTrack.name}
          className="w-12 h-12 rounded object-cover"
        />
        <div>
          <p className="text-white font-semibold text-sm truncate">{currentTrack.name}</p>
          <p className="text-spotify-gray-100 text-xs truncate">{currentTrack.artist}</p>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center gap-4">
        <button onClick={prevTrack} className="text-spotify-gray-100 hover:text-white text-xl">
          ⏮
        </button>
        
        <button onClick={togglePlay} className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition font-bold">
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <button onClick={nextTrack} className="text-spotify-gray-100 hover:text-white text-xl">
          ⏭
        </button>
      </div>
      
      <div className="w-64">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1">
          <div 
            className="bg-spotify-green h-full rounded-full transition"
            style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
          />
        </div>
      </div>
      
    </footer>
  )
}
