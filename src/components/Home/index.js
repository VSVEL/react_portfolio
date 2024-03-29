import { useState } from "react"
import "./index.scss"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect } from "react"
import Logo from "./Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = [" ", "S", "a", "k", "t", "h", "i", "v", "e", "l"]
  const jobArray = [
    "M",
    "o",
    "b",
    "i",
    "l",
    "e",
    " ",
    "&",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={24}
          />
          <br />
        </h1>
        <h2>
          Fullstack Developer / Flutter Developer / Product & Startup
          Enthusiaist
        </h2>
        {/* <Link to= '/contct' className='flat-button'>CONTACT ME</Link> */}
      </div>
      <div className="logo-container">
        <Logo />
      </div>
    </div>
  )
}

export default Home
