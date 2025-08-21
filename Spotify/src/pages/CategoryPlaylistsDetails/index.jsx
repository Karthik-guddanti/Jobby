import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import './index.css'

const CategoryPlaylistsDetails = () => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://apis2.ccbp.in/spotify-clone/category-playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      })
      if (res.ok) {
        const json = await res.json()
        setCategory(json.category)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (isLoading) return <p>Loading category playlists...</p>

  return (
    <div className="category-details-main">
      <Sidebar />
      <div className="category-details-content">
        <h2>{category.name}</h2>
        <div className="playlist-grid">
          {category.playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="playlist-card clickable"
              onClick={() => navigate(`/playlists/${playlist.id}`)}
            >
              <img src={playlist.image_url} alt={playlist.name} className="playlist-img" />
              <p className="playlist-name">{playlist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPlaylistsDetails
