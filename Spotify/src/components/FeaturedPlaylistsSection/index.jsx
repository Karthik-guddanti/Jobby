import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const FeaturedPlaylistsSection = () => {
  const [playlists, setPlaylists] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://apis2.ccbp.in/spotify-clone/featured-playlists', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      })
      if (res.ok) {
        const json = await res.json()
        setPlaylists(json.playlists)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) return <p>Loading featured playlists...</p>

  return (
    <div>
      <h2 className="section-title">Featured Playlists</h2>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <div
            className="playlist-card clickable"
            key={playlist.id}
            onClick={() => navigate(`/playlists/${playlist.id}`)}
          >
            <img src={playlist.image_url} alt={playlist.name} className="playlist-img" />
            <p className="playlist-name">{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedPlaylistsSection

