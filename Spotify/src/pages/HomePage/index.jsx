import { useEffect, useState } from "react"

import FeaturedPlaylistsSection from "../../components/FeaturedPlaylistsSection"
import CategoriesSection from "../../components/CategoriesSection"
import NewReleasesSection from "../../components/NewReleasesSection"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import "./index.css"

const HomePage = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([])
  const [categories, setCategories] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get("jwt_token")
    if (!token) {
      navigate("/login")
      return
    }

    fetchFeaturedPlaylists(token)
    fetchCategories(token)
    fetchNewReleases(token)
  }, [navigate])

  const fetchFeaturedPlaylists = async (token) => {
    const res = await fetch("https://apis.ccbp.in/spotify-clone/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    setFeaturedPlaylists(data.playlists)
  }

  const fetchCategories = async (token) => {
    const res = await fetch("https://apis.ccbp.in/spotify-clone/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    setCategories(data.categories)
  }

  const fetchNewReleases = async (token) => {
    const res = await fetch("https://apis.ccbp.in/spotify-clone/new-releases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    setNewReleases(data.albums)
  }

  return (
    <div className="home-page">
      <Header />
      <div className="home-content">
        <FeaturedPlaylistsSection playlists={featuredPlaylists} />
        <CategoriesSection categories={categories} />
        <NewReleasesSection albums={newReleases} />
      </div>
    </div>
  )
}

export default HomePage
