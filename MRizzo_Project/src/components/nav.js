import React from "react"
import { Link } from "gatsby"
import { useState } from "react"

export default function Nav() {
  const [openMenu, setOpenMenu] = useState("")

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

        <div className="burger-menu" onClick={() => setOpenMenu(!openMenu)}>
          <span className="bar bar-one"></span>
          <span className="bar bar-two"></span>
          <span className="bar bar-three"></span>
        </div>
      </nav>
    </div>
  )
}
