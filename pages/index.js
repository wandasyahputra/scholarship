import Head from 'next/head'
import mainLogo from '../assets/images/Sea-Undergraduate-Logo.png'

export default function Home() {
  return (
    <div className="container">
      <img src={mainLogo} />
    </div>
  )
}
