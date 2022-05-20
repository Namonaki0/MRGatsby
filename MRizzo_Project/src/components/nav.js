import React from "react"
import { Link } from "gatsby"
import { useState, useEffect, useRef } from "react"
import {
  BsSpotify,
  BsYoutube,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import { motion } from "framer-motion"
import { navbarEffect } from "./FramerMotion"

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [burgerEffect, setBurgerEffect] = useState("close")
  const [pageYOffset, setPageYOffset] = useState(null)

  const windowScrollYOffset = {
    height: 50,
    width: "90%",
    background: "#00000085",
  }

  if (window) {
    window.addEventListener("scroll", () => {
      setPageYOffset(window.pageYOffset)
    })
  }

  // typeof window !== "undefined" &&
  //   this.addEventListener("scroll", () => {
  //     setPageYOffset(window.pageYOffset)
  //   })

  return (
    <div>
      <nav variants={navbarEffect} initial="hidden" animate="show">
        <ul className={openMenu ? "menu-active" : ""}>
          <li className="nav-li">
            <Link
              to="/"
              activeStyle={{ color: "white", borderBottom: "2px solid white" }}
              className="nav-link"
              onClick={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
            >
              home
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="/videos"
              partiallyActive={true}
              activeStyle={{ color: "white", borderBottom: "2px solid white" }}
              className="nav-link"
              onClick={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
            >
              videos
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="/merch"
              partiallyActive={true}
              activeStyle={{ color: "white", borderBottom: "2px solid white" }}
              className="nav-link"
              onClick={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(null)
                setBurgerEffect("close")
              }}
            >
              merch
            </Link>
          </li>

          <div className="nav-social-media">
            <a
              href="https://open.spotify.com/artist/4MzKbulWnDVjGnMDMz1g8j?si=Cw7D7ZOHT82IxqUa79OBLQ"
              target="_blank"
              rel="noreferrer"
            >
              <BsSpotify />
            </a>
            <a
              href="https://www.youtube.com/c/MarcRizzoOfficial/about"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube />
            </a>
            <a
              href="https://music.apple.com/us/artist/marc-rizzo/80030449"
              target="_blank"
              rel="noreferrer"
            >
              <BsApple />
            </a>
            <a
              href="https://deezer.page.link/LLoZB1W3Cucuj6128"
              target="_blank"
              rel="noreferrer"
            >
              <FaDeezer />
            </a>
            <a
              href="https://www.facebook.com/marcrizzoband/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/marcrizzo_ripandshred/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>

            <a
              href="https://twitter.com/rizzomarc"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
        </ul>

        <div
          style={{
            background:
              pageYOffset > windowScrollYOffset.height
                ? windowScrollYOffset.background
                : "",
            width:
              pageYOffset > windowScrollYOffset.height
                ? windowScrollYOffset.width
                : "",
          }}
          className="burger-menu"
          aria-hidden="true"
          onClick={() => {
            setOpenMenu(!openMenu)
            setBurgerEffect(burgerEffect === "open" ? "close" : "open")
          }}
          onKeyDown={() => {
            setOpenMenu(!openMenu)
            setBurgerEffect("close")
          }}
        >
          <span
            className={burgerEffect}
            aria-hidden="true"
            onClick={() => {
              setOpenMenu(!openMenu)
              setBurgerEffect(burgerEffect === "open" ? "close" : "open")
            }}
            onKeyDown={() => {
              setOpenMenu(!openMenu)
              setBurgerEffect("close")
            }}
          ></span>
          <span className={burgerEffect}></span>
          <span className={burgerEffect}></span>
        </div>
      </nav>
    </div>
  )
}
