import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import './index.css'

const PlaylistDetails = () => {
  const { id } = useParams()
  const [playlist, setPlaylist] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://apis2.ccbp.in/spotify-clone/playlists-details/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` },
      })
      if (res.ok) {
        const json = await res.json()
        setPlaylist(json.playlist)
      }
      setIsLoading(false)
    }

    getData()
  }, [id])

  if (isLoading) return <p>Loading playlist...</p>
  if (!playlist) return <p>Playlist not found.</p>

  return (
    <div className="playlist-details-main">
      <Sidebar />
      <div className="playlist-details-content">
        <Header /> {/* ✅ Included header here */}
        <h2>{playlist.name}</h2>
        <div className="songs-list">
          {playlist.tracks.items.map((trackItem, index) => {
            const track = trackItem.track
            return (
              <div className="song-card" key={track.id}>
                <p>{index + 1}. {track.name}</p>
                <p>Artist: {track.artists[0].name}</p>
                {track.preview_url && (
                  <audio controls src={track.preview_url}>
                    Your browser does not support audio.
                  </audio>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlaylistDetails
