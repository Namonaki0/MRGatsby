import React from "react"
import { Link } from "gatsby"
import { useState } from "react"

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [burgerEffect, setBurgerEffect] = useState("close")

  return (
    <div>
      <nav>
        {/* <Link to="/" className="logo-link">
          <img
            src="https://www.storefrontier.com/sites/default/files/artwork_preview/front/66357/rizzo_4_200619_preview_34424_842_black.png"
            alt="logo"
            className="logo"
          />
        </Link> */}

        <ul className={openMenu ? "menu-active" : ""}>
          <li className="nav-li">
            <Link
              to="/"
              className="nav-link"
              onClick={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
            >
              home
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="/videos"
              className="nav-link"
              onClick={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
            >
              videos
            </Link>
          </li>
          <li className="nav-li">
            <Link
              to="/merch"
              className="nav-link"
              onClick={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
              onKeyDown={() => {
                setOpenMenu(!openMenu)
                setBurgerEffect("close")
              }}
            >
              merch
            </Link>
          </li>
        </ul>

        <div
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

// if (nav) {
//   //? NAVBAR BEHAVIOUR ON SCROLL
//   window.addEventListener("scroll", () => {
//     const nav = document.querySelector("nav")
//     const logo = document.querySelector(".logo")
//     if (window.scrollY > 0) {
//       nav.className.add("scroll-effect")
//       logo.className.add("scroll-effect")
//       burgerMenu.className.add("scroll-effect")
//     } else {
//       nav.className.remove("scroll-effect")
//       logo.className.remove("scroll-effect")
//       burgerMenu.className.remove("scroll-effect")
//     }
//   })
// }
