import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
          <Head>
            <title>My Portfolio</title>
          </Head>
          <h1>Ntepela Clinton Letsoela</h1>
          <p>Information Engineer</p>
          <br></br>
          <img src='../facial.jpg'/>
          <br></br>
          <br></br>
          <h2>About</h2>
          <p className={styles.description.p}>
            I am a recent Information (Electrical) Engineering graduate from the University of the Witwatersrand.
            I am passionate about problem solving, particularly in software development. 
          </p>
          <br></br>
          <h2>Why I should join SovTech</h2>
          <p>
            I believe that I have the necessary skills required to join the software engineering graduate program at SovTech.
            Furthermore, the skills that I possess at the moment are still limited and I may not contribute directly to the success of the
            company but I am willing to learn and improve. In addition I am willing to dedicate myself to the work that will be given to me so 
            that next year I can be a suitable candidate for full time employment at SovTech. In addition to my technical skills, I am an effecient
            team worker and I have good communication skills.
          </p>
          <br></br>
          <h2>Previous Projects</h2>
          <br></br>
          <h2>Recommendations</h2>
          <br></br>
          <img src='../Recommendations.png'/>
          <p> For more information, please visit my linkedIn profile<a href="https://www.linkedin.com/in/clinton-letsoela-713654153/" className={styles.link} target="_blank"> <u>here</u></a>.</p>
      </div>
    </main>
  )
}
