import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const AboutUs = () => {
  const data = useStaticQuery(query)
  return (
    <section className="aboutus-section">
      <div className="img-block">
        <Img fluid={data.file.childImageSharp.fluid} className="aboutus-img" />
      </div>
      <div className="aboutus-content">
        <div className="aboutus-content-group">
          <h1 className="about-content-title">量身打造治療計畫</h1>
          <h4 className="about-content-article">
            針對每一個獨一無二的孩子，打造專屬的治療計畫。分析造成孩子發育不良的根本原因，制定方案，而不單只以口腔或是牙齒的情況去處理。
          </h4>
        </div>
        <div className="aboutus-content-group">
          <h1 className="about-content-title">全方位治療</h1>
          <h4 className="about-content-article">
          由眾多齒顎醫學美學專家、營養學專家及生長發育專家組建而成，將顏值發育管理、大腦發育、形體發育、呼吸睡眠及營養等領域融入至我們的醫療理念，由一個團隊負責一位孩子。
          </h4>
        </div>
        <div className="aboutus-content-group">
          <h1 className="about-content-title">守護孩子的健康與自信心</h1>
          <h4 className="about-content-article">
          我們創立的目的是為守護所有孩童的健康，讓各地的孩童皆能接受到最好的身心發育管理。我們著重於兒童的成長發育及自信心的建立，比你更在乎孩子的未來、孩子的自信心！
          </h4>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "aboutus.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutUs
