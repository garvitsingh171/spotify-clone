import { useSpotifyStore } from '../store/spotifyStore'

export default function TrackCard({ track }) {
  
  const setCurrentTrack = useSpotifyStore((state) => state.setCurrentTrack)
  
  const handleClick = () => {
    setCurrentTrack(track)
  }
  
  return (
    <div className="bg-spotify-gray-300 rounded-lg p-4 hover:bg-spotify-gray-200 transition cursor-pointer group" onClick={handleClick}>
      
      <div className="relative mb-4 rounded overflow-hidden bg-gray-700 aspect-square">
        <img 
          src={track.image} 
          alt={track.name}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-spotify-green rounded-full p-4 text-black hover:scale-110 transition">
            ▶
          </button>
        </div>
      </div>
      
      <h3 className="font-semibold truncate text-white">{track.name}</h3>
      <p className="text-sm text-spotify-gray-100 truncate">{track.artist}</p>
      
    </div>
  )
}
