import './App.css'
// import { useState } from 'react'
import TrackCard from './components/TrackCard'
import Player from './components/Player'

function App() {
  
  const mockTracks = [
    { id: 1, name: 'Song One', artist: 'Artist A', image: 'https://via.placeholder.com/200?text=Album+1' },
    { id: 2, name: 'Song Two', artist: 'Artist B', image: 'https://via.placeholder.com/200?text=Album+2' },
    { id: 3, name: 'Song Three', artist: 'Artist C', image: 'https://via.placeholder.com/200?text=Album+3' },
    { id: 4, name: 'Song Four', artist: 'Artist D', image: 'https://via.placeholder.com/200?text=Album+4' },
    { id: 5, name: 'Song Five', artist: 'Artist E', image: 'https://via.placeholder.com/200?text=Album+5' },
    { id: 6, name: 'Song Six', artist: 'Artist F', image: 'https://via.placeholder.com/200?text=Album+6' },
  ]
  
  return (
    <div className="flex h-screen bg-spotify-black text-white">
      
      <aside className="w-64 bg-spotify-black-light border-r border-spotify-gray-300 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-black mb-8">SPOTIFY</h1>
          <nav className="space-y-2">
            <a href="#" className="block px-4 py-2 rounded hover:bg-spotify-gray-300 transition">Home</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-spotify-gray-300 transition">Search</a>
            <a href="#" className="block px-4 py-2 rounded hover:bg-spotify-gray-300 transition">Library</a>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        
        <div className="flex-1 bg-linear-to-b from-spotify-gray-300 to-spotify-black p-8 overflow-y-auto">
          <h2 className="text-4xl font-bold mb-8">Good Evening</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>

        <Player />

      </main>

    </div>
  )
}

export default App
