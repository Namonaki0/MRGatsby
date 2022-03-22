import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Modal from "../components/Modal"

export default function Merch() {
  const [openModal, setOpenModal] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const [extLink, setExtLink] = useState(null)
  const [extName, setExtName] = useState(null)
  const [extSubName, setExtSubName] = useState(null)

  return (
    <Layout>
      <div className="merch-page-wrapper">
        <h1>MERCH</h1>

        <div className="merch-display">
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/product_mockups/66357/rizzo_7_170032_1083_325093_470_black170746_nobg.png?1638400254"
            loading="lazy"
            className="merch-img"
            data-link-cta="https://www.storefrontier.com/product/theflyer"
            data-name="The Flyer"
            data-sub-name=""
            alt="the flyer t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />

          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_1_155452_1083_324971_470_black155810_nobg.png?itok=ljd-UQGE"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/mrlive"
            data-name="MR-Live"
            data-sub-name=""
            alt="live t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_2_160250_1083_324990_470_black160826_nobg.png?itok=buJkTnTz"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/mrsignature"
            data-name="Signature"
            data-sub-name="Marc Rizzo"
            alt="signature t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_3_161224_1083_325007_470_black161529_nobg.png?itok=9LLiVPvo"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/mrliveblackandwhite"
            data-name="MR-Live"
            data-sub-name="Black & White"
            alt="M R Live black and white"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_5_164140_1083_325064_470_black164615_nobg.png?itok=juaAOPEX"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/mrlivefeeling"
            data-name="Feeling"
            data-sub-name="Live"
            alt="live feeling t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_8_171056_1083_325113_470_black171801_nobg.png?itok=AAhl2EjB"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/inadream"
            data-name="In A Dream"
            alt="in a dream t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_9_172200_1083_325128_470_black172607_nobg.png?itok=kkX_x-u_"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/ripandshredmmxx"
            data-name="Rip & Shred"
            data-sub-name="MMXX"
            alt="rip and shred MMXX t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
          <StaticImage
            src="https://www.storefrontier.com/sites/default/files/styles/product_listing_large/public/product_mockups/66357/rizzo_10_173139_1083_325150_470_black173515_nobg.png?itok=m2pDW7zm"
            loading="lazy"
            data-link-cta="https://www.storefrontier.com/product/mrlogo"
            data-name="Logo"
            alt="logo t-shirt"
            onClick={e => {
              setImgSrc(e.target.src)
              setOpenModal(true)
              setExtLink(e.target.dataset.linkCta)
              setExtName(e.target.dataset.name)
              setExtSubName(e.target.dataset.subName)
            }}
          />
        </div>

        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <div className="merch-modal-inner-wrapper">
            <div className="merch-name-wrapper">
              <span>{extSubName}</span>
              <p>{extName}</p>
            </div>
            <img src={imgSrc} alt="" />

            <a
              className="purchase-cta"
              href={extLink}
              target="_blank"
              rel="noreferrer"
            >
              purchase
            </a>
          </div>
        </Modal>

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
