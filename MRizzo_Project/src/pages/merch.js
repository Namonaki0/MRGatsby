import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import MerchModal from "../components/MerchModal"

export default function Merch() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Layout>
      <div className="merch-page-wrapper">
        <h1>MERCH</h1>

        <div className="merch-display">
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/product_mockups/66357/rizzo_7_170032_1083_325093_470_black170746_nobg.png?1638400254"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_1_155452_1083_324971_470_black155810_nobg.png?itok=ljd-UQGE"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_2_160250_1083_324990_470_black160826_nobg.png?itok=buJkTnTz"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_3_161224_1083_325007_470_black161529_nobg.png?itok=9LLiVPvo"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_5_164140_1083_325064_470_black164615_nobg.png?itok=juaAOPEX"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_8_171056_1083_325113_470_black171801_nobg.png?itok=AAhl2EjB"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_9_172200_1083_325128_470_black172607_nobg.png?itok=kkX_x-u_"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_10_173139_1083_325150_470_black173515_nobg.png?itok=m2pDW7zm"
            loading="lazy"
            alt=""
            onClick={() => setOpenModal(true)}
          />
        </div>

        <MerchModal isOpen={openModal}>
          <button>X</button>
          <StaticImage src="" alt="" />
          <h3>title</h3>
          <p>description</p>
        </MerchModal>

        <div className="frontier-shop">
          <a
            href="https://www.storefrontier.com/marcrizzo"
            target="_blank"
            rel="noreferrer"
          >
            more merch
          </a>
        </div>
      </div>
    </Layout>
  )
}
