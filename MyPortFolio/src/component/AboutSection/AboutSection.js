import styled from "styled-components";
import {useRef} from 'react';


const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 800px;
  justify-content: center;
  margin-top: 30px
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 70%;
 
`
const ImgContainer = styled.div`
  
  width: 45%;
`
const Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  margin-left: 55px;
`
const InfoContainer = styled.div`
  
  text-align: justify;
  width: 60%;
  
`

const GitHub = styled.div``






const Title = styled.h2`
  
`
const Desc = styled.div`
  margin-top: 20px;
`

const Desc2 = styled.p`
  margin-top: 40px;
  
`
const ContactInfo = styled.div`
  margin-top: 40px;
`
const Span = styled.span`
  color: #F397FC;
 
`
const Mail = styled.div`
  margin-bottom: 5px;
`

const Phone = styled.div`
  margin-bottom: 5px;
`
const LinkedIn = styled.div`
  margin-bottom: 5px;
`


const Resume = styled.button`
  margin-top: 30px;
  padding: 10px 50px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 13px;
  font-weight: 400;
  
`




const AboutSection = (props) => {
  return (
   <Container ref={props.About}>
       <Wrapper>
           <ImgContainer>
             <Image src='/myimg1.jpg'/>
           </ImgContainer>
           <InfoContainer>
               <Title>
                Hello! I'm Sam_Codes, <br/>A Full Stack Developer<br/> From Lagos, Nigeria.
               </Title>
            <Desc>I'm a passionate and dedicated Junior full stack developer adept at 
                building web from front to back with so much efficiency
                and accuracy.<br/>
                Through bootcamps, online courses, i have developed a strong understanding 
                of Javascript(ES5 & Es6), React Js, Node.Js, Express.Js, MongoDB, HTML%, CSS3. 
                I find a lot of joy and excitement utilizing my skills in bringing ideas to life,
                troubleshooting bugs, and pushing my projects forward  
            </Desc>
            <Desc2>
              I'm open to all kinds of business ideas, job opportunities, open source projects and more. Feel free to connect with me!
              Let's talk about web dev, web design and anything related to tech. I'd also like 
              to know how i can be of help to your business or team. <br />
              I'm  looking to collaborate and work with other passionate developers and expand my
              network.

            </Desc2>
            <ContactInfo>
               <Mail><Span>Mail: </Span>fajoiolusegun99@gmail.com</Mail>
               <Phone><Span>Phone No: </Span>08153382359</Phone>
               <LinkedIn><Span>LinkedIn: </Span>https://www.linkedin.com/in/sam-fajobi77/</LinkedIn>
               <GitHub><Span>GitHub: </Span>https://github.com/samfajobi</GitHub>
           </ContactInfo>
           <Resume>RESUME</Resume>
           </InfoContainer>
           
           
       </Wrapper>

   </Container>
  )
}

export default AboutSection