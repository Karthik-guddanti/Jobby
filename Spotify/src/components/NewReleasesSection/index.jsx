import { useEffect, useState } from "react"

const NewReleasesSection = () => {
  const [albums, setAlbums] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://apis.ccbp.in/spotify-clone/new-releases", {
          headers: {
            Authorization: `Bearer ${document.cookie.replace("jwt_token=", "")}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch new releases")
        }

        const data = await response.json()

        // Safely check if data.albums is an array
        const albumsArray = Array.isArray(data.albums) ? data.albums : []
        setAlbums(albumsArray)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAlbums()
  }, [])

  if (isLoading) {
    return <p className="text-white">Loading albums...</p>
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <div className="mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-white">New Releases</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="bg-gray-800 p-4 rounded-lg shadow">
            <img
              src={album.image_url}
              alt={album.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 text-white font-semibold text-sm">{album.name}</h3>
            <p className="text-xs text-gray-400">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewReleasesSection
