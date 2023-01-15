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
          <h2>About Me</h2>
          <br></br>
          <p className={styles.description.p}>
            My name is Ntepela Clinton Letsoela and I am 24 years old. I am a recent Information (Electrical) Engineering graduate from the University of the Witwatersrand.
            I am passionate about problem solving, particularly in software development. I was born in the Free State province and I moved to Johannesburg when I was 7 years old. 
            I matriculated in 2016 and decided to do Electrical Engineering because I wanted to solve the electricity crisis in South Africa. I failed my first year at university 
            because I found it difficult to adapt especially in the first semester.
            When I got to second year I was introduced to software development and I fell in love with it. When I got to third year I had to repeat again because it was the year
            when online learning was introduced due to the COVID-19 pandemic and we had to vacate from our student residences. Online learning and being at home made it difficult
            for me to study and these are some of the reasons I had to repeat third year. Furthermore, my love for software infludenced me to branch to
            Information Engineering in third year when we were presented with an option to branch. Last year (2022), I finally completed my degree and this made me happy and boosted my confidence.
            I am now looking for a software company that will enable me to enhance the skills that I currently posses because I want grow in the software industry.
          </p>
          <br></br>
          <h2>Why I should join SovTech!!</h2>
          <br></br>
          <p>
            I believe that I have the necessary skills required to join the software engineering graduate program at SovTech.
            Furthermore, the skills that I possess at the moment are still limited and I may not contribute directly to the success of the
            company but I am willing to learn and improve. In addition I am willing to dedicate myself to the work that will be given to me so 
            that next year I can be a suitable candidate for full time employment at SovTech. In addition to my technical skills, I am an effecient
            team worker and I have good communication skills. I have worked on a few projects independently and with team members. Working alone has boosted
            my confidence and has enabled me to have the ability to understand concepts individually and this has made me to be a self-driven person. Working
            with people has made me appreciate the importance of team work and good communication skills.
          </p>
          <br></br>
          <h2>Previous Projects</h2>
              <br></br>
              <p><strong>1. Web Scraping System for Big Data Applications: </strong>This was my final year project. We had to create a web scraping system that 
                consists of two components; a web scraper and a machine learning algorithm to analyse the scraped data. This system was developed using Python. Scrapy, which
                is a web scraping framework was used to extract data from a cryptocurrency website. Then a recurrent neural network was used to analyse the data. Once all the data was
                scraped and analysed, it was stored in a Microsoft SQL Server (MSSQL) database hosted on Microsoft Azure. The Python Django framework was used to create the front-end and SQLite was used to stored
                user information. The system was implemented by me and another classmate who was my partner. Link to code:
                <a  href="https://github.com/clinton724/ELEN4012-Web_Srapping" className={styles.link} target="_blank"><u>https://github.com/clinton724/ELEN4012-Web_Srapping</u></a>
              </p>
              <br></br>
              <p><strong>2. Small React app: </strong>This is a small web app where I was introducing myself to react. It is a simple app that consists of a signup page
              and validates user information before signing in and hashes the password. This web application was created using React and a
              MSSQL database hosted locally to store data. The app was implemented by myself alone. Link to code: <a href="https://github.com/clinton724/Software-webApp" className={styles.link} target="_blank"> <u>https://github.com/clinton724/Software-webApp</u></a></p>
              <br></br>
              <p><strong>3. Learning Management System: </strong>This was a 4th year software development project that was introducing web development. The web app was created using JavaScript and Node. Furthermore, we were not 
              allowed to use any framework like React or Angular. Again a MSSQL database was used to store user information. Tests were done using the jest 
              framework and were automated using Travis. The system was implemented by myself and other 4 members over a period of 4 weeks. We had to submit weekly sprints and each team member had to have at least 2 user stories
              per week. Link to code: <a href="https://drive.google.com/drive/folders/1RODp-KFcb73IX4iQ5xoN0QAO6wRZseZZ?usp=share_link" className={styles.link} target="_blank"> <u>https://drive.google.com/drive/folders/1RODp-KFcb73IX4iQ5xoN0QAO6wRZseZZ?usp=share_link</u></a></p>
          <br></br>
          <h2>Recommendations</h2>
          <br></br>
          <p>I was part of a data science intership last year. The internship was 6 weeks, it started in the July study break and ended in December. During the June-July period, the course covers data analysis techniques. There is a brief introduction to AWS, data warehousing, business intelligence and ETL concepts. The final period of the course covered machine learning and artificial intelligence in cloud computing. We Worked with Amazon Lambda, Lex, Kendra, S3, Comprehend and Sage.
            Suraksha Motilal is one of the students I was working with and the screenshot below shows what she had to say about me.
          </p>
          <br></br>
          <img src='../Recommendations.png'/>
          <p> For more information, please visit my linkedIn profile<a href="https://www.linkedin.com/in/clinton-letsoela-713654153/" className={styles.link} target="_blank"> <u>here</u></a>.</p>
      </div>
    </main>
  )
}
