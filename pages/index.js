import Head from 'next/head'
import mainLogo from '../assets/images/Sea-Undergraduate-Logo.png'
import backgroundHead from '../assets/images/BG-Head.jpg'
import homeImage from '../assets/images/icon-graduate.png'

import freshmen from '../assets/images/icon-freshmen.png'

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <div className="header">
        <img src={mainLogo} alt="Sea Undergraduate Scholarship" className="main-logo"/>
        <nav className="nav-content">
          <a href="#home" className="nav-item">Home</a>
          <a href="#program" className="nav-item">Program</a>
          <a href="#apply" className="nav-item">Apply Here</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>
      </div>
      <section className="home">
        <img src={backgroundHead} className="w-100" />
        <div className="caption-container">
          <div className="w-50">
            <h4 className="title">
              Congratulations Sea Scholarship 2019 Awardees
            </h4>
            <p>The Sea Scholarship Committee is proud to announce the 2019 Academic Year Sea Scholarship recipients.  Final award email notifications were sent on October 17, 2019.</p>
          </div>
          <div className="graduation-image">
            <img src={homeImage} />
          </div>
        </div>
      </section>
      <section className="program">
        <div className="container">

          <h4 className="title">
            Undergraduate Scholarship Program
          </h4>
          <p>We are excited to announce that Sea Indonesia is now partnering with five universities in Indonesia and offering a merit-based scholarship to bright Indonesian students. This scholarship is our commitment to give back to the community by empowering youth through education. Through this scholarship, we hope to provide talented students with the opportunity to pursue a bachelor’s degree and solve the talent-gap issue in the technology industry in Indonesia.</p>
          <div className="card-container">
            <div className="card">
              <img src={freshmen} className="icon"/>
              <p><strong>Requirements:</strong></p><ul><li>Indonesian citizen</li><li>A first-year student majoring in an eligible major in Sea's partner university</li><li>Not having any other scholarships or work commitments with other organizations</li><li>Maintain a minimum of 3.5/4.0 cumulative GPA throughout the study</li></ul><p><strong>Benefits:</strong></p><ul><li>Full tuition fee and monthly stipend all the way to the completion of the 4th year of study</li><li>Laptop</li><li>Internship opportunity in Sea Businesses (Garena, Shopee, Airpay)</li><li>Development program</li></ul>
            </div>
            <div className="card second">
            lalalala
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
