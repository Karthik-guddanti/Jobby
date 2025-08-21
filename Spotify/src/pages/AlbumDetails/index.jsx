import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function AlbumDetails() {
  const {id} = useParams()
  const [albumData, setAlbumData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://apis.ccbp.in/music/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${document.cookie.split('jwt_token=')[1]}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setAlbumData(data.album_details)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="p-4 text-white bg-black min-h-screen">
        <Header />
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={albumData.image_url}
            alt={albumData.name}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div>
            <p className="text-sm text-gray-400">Album</p>
            <h1 className="text-3xl font-bold">{albumData.name}</h1>
            <p className="text-gray-400">{albumData.songs_count} Songs</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl mb-2">Tracks</h2>
          <ul className="space-y-2">
            {albumData.songs.map(song => (
              <li
                key={song.id}
                className="flex items-center justify-between bg-gray-800 p-3 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={song.image_url}
                    alt={song.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-medium">{song.name}</p>
                    <p className="text-gray-400 text-sm">{song.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AlbumDetails
