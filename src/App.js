import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./assets/styles/main.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./Views/About"
import Contact from "./Views/Contact"
import Blog from "./Views/Blog"
import Post from "./Views/Post"
import Home from "./Views/Home"
import Realizations from "./Views/Realizations"
import Page from "./Views/Page"
import { pages, home } from "./api"
import HomeContext from "./HomeContext"
import { MetroSpinner } from "react-spinners-kit"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [loading])

  if (loading) {
    return (
      <div className="spinner">
        <MetroSpinner size={60} color="#fff" loading={loading} />
      </div>
    )
  }

  return (
    <>
      <HomeContext.Provider value={home[0]}>
        <BrowserRouter>
          <Header logo={home[0].logo} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/o-mnie" component={About} />
            <Route path="/realizacje" component={Realizations} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={Post} />
            {pages.map((page) => (
              <Route path={page.url} key={page.id}>
                <Page title={page.title} />
              </Route>
            ))}
            <Route path="/kontakt" component={Contact} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </HomeContext.Provider>
    </>
  )
}

export default App
