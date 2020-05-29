import Head from 'next/head'
import mainLogo from '../assets/images/Sea-Undergraduate-Logo.png'
import backgroundHead from '../assets/images/BG-Head.jpg'
import homeImage from '../assets/images/icon-graduate.png'

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
      <div className="home">
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
      </div>
    </div>
  )
}
