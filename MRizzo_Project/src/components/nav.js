import React from "react"
import { Link } from "gatsby"
import { useState } from "react"

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [burgerEffect, setBurgerEffect] = useState("close")

  return (
    <div>
      <nav>
        <a className="logo-link" href="/">
          <img
            src="https://www.storefrontier.com/sites/default/files/artwork_preview/front/66357/rizzo_4_200619_preview_34424_842_black.png"
            alt="logo"
            className="logo"
          />
        </a>

        <ul className={openMenu ? "menu-active" : ""}>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/videos" className="nav-link">
              videos
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/merch" className="nav-link">
              merch
            </Link>
          </li>
        </ul>

        <div
          className="burger-menu"
          onClick={() => {
            setOpenMenu(!openMenu)
            setBurgerEffect(burgerEffect === "open" ? "close" : "open")
          }}
        >
          <span className={burgerEffect}></span>
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
