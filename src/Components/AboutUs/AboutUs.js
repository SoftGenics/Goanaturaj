import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import './AboutUs.css';
const AboutUs = () => {

  return (
    <div>
      
        <NavbarMenu />
        <Container className='about-us'>
            <h2 className='mb-1'>About Us</h2>
            <h3 className='text-success'>...the Birth of ‘Goa Natural’</h3>
            <p>This is a story about a 10 year old boy who once was extremely scared and was
                crying because his mother was ill and was taken to the hospital. The doctors in
                the hospital said ‘she had serious heart problems and she may die any time.
                His mother survived for 3 more years and thinking of her death... every day
                and every night of those 3 years... were the scariest years in the life of that
                boy. She finally died of heart attack. Few years later when he was recovering
                from this childhood trauma his father was diagnosed with Cancer. And he too
                lost his life to this deadly disease. Mother with Heart attack and father with
                Cancer, his childhood was really a disaster.</p>
                <p>While he was growing up he thought he should do something for the
                    community to eradicate such deadly diseases so that no children should lose
                    their parents. He thought better healthcare facilities were required and he
                    even fought unsuccessfully for better hospital at his own village.</p>
                <p>As he grew up he understood, how much ever bigger hospitals we build, how
                    much ever better healthcare facilities we provide, how much ever more best
                    doctors we add, patients are not going to Reduce. He realised, Yes, of course,
                    we need better healthcare facilities, but it is more important to reduce the no
                    of patients. It is more important to target the very root cause of these diseases
                    and this thought process gave birth to a company called <b>‘Goa Natural’</b>.</p>
                    <p>It is now believed that our modern lifestyle and eating habits are responsible
                        for increase in patients of Diabetes, Heart attacks, Pressure, Cancer, etc and
                        the three major culprits in our kitchen are 
                        <ol>
                          <li>The Refined Oil</li>
                          <li>The processed Salt</li> 
                         <li> The Sugar</li>
                        </ol>
                        </p>
                        <p>Goa Natural produces Cold pressed Coconut oil, Groundnut oil and Safflower
                oil. Using cold pressed oils for cooking instead of refined oils could be one of
                the major answers to these deadly diseases. Infact, some doctors even
                prescribe cold pressed coconut oil for cancer patients.</p>

        </Container>
        <Footer />
    </div>
  )
}

export default AboutUs