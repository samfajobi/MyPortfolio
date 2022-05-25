import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import Typical from 'react-typical'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useRef } from 'react';
//import { HashLink as Link } from "react-router-hash-link";



const Container = styled.div`
  width: 100vw;
  height: 680px;
  background-color: #D6FDFA;
  position: relative;
  
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`
const Image = styled.img`
  height: 980px;
  margin-bottom: 50%;
  margin-right: 25%;
 
  
  transition:  left 1s;
  
  &hover: {
    left: 30px;


  }
 
`

const ProfileInfo = styled.div`
  flex: 1;
  margin-bottom: 7%;
  margin-left: 15%;
`

const LeftSideIcons = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 30px;
  margin-bottom: 10%;
  
`
const A = styled.a`
  text-decoration: none;
  
`

const Content = styled.div`
    content: " ";
    margin-top: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 38px; 
    width: 3px;
    height: 21%;
    background-color: black;
`

const RightContent = styled.div` 
   content: " ";
   margin-top: 15px;
   position: absolute;
   bottom: 0;
   right: 0;
   margin-right: 4.25%; 
   width: 3px;      
   height: 21%;
   background-color: black;
  
`

const RightSideIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 3%;
  margin-bottom: 10%;
  
`

const Icon = styled.div`
 margin-top: 12px;
 width: 30px;
 height: 30px;
 background-color: #70B4AE;
 border-radius: 50%;
 padding: 8px;
 display: flex;
 justify-content: center;
 align-items: center;
`




const Hi = styled.h1`
  font-size: 55px;
  margin-bottom: 10px
`

const Name = styled.h1`
  font-size: 45px;
`

const Span = styled.span`
  color: #70B4AE;
`
const Title = styled.h3`
  margin: 20px 0px;
`
const ResumeLink = styled.button`
  padding: 10px 30px;
  background-color: black;
  color: white;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: #70B4AE;
  }

`



const NavIcons = styled.div`
  background-color: #CAF4F0;
  width: 20%;
  height: 60px;
  display: flex;
  align-items: center;
  bottom: 0;
  position: fixed;
  margin-left: 23%;
  margin-bottom: 1%;
  border-radius: 30px;
  opacity: 0.7;
  justify-content: space-between;
  padding: 0px 25px;
  
`

const Icons = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  backgroud-color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;

  &:hover{
    background-color: lightgray;
  }
  
`





const HomeSection = () => {

  const Home = useRef(null)
  
  return (
    <Container>
      <Wrapper>
        <ProfileInfo>
         <LeftSideIcons>
            <A href="https://www.linkedin.com/in/sam-fajobi77/" >
              <Icon><LinkedInIcon /></Icon>
            </A>
            <A href="https://github.com/samfajobi">
              <Icon><GitHub /></Icon>
            </A>  
         </LeftSideIcons>
         {/* <Content></Content> */}
          <Hi>Hi, </Hi>
          <Name>I'm Sam<Span>_Fajobi</Span></Name>
          <Title>
            I'm a <Typical 
              loop={Infinity}
              wrapper="i" 
              steps={
                ['Full Stack Developer',
                 1100, 
                 'Software Developer',
                 1100,
                 'Coder',
                  1100,
                  "Web Developer",
                  1100
                ]
              }
            />
          </Title>
          <A href="C:\Users\USER\Downloads\Resume.pdf" >
            <ResumeLink>RESUME</ResumeLink>
          </A>
          
           <NavIcons>
            <Icons><HomeIcon/></Icons>
            <Icons><InfoIcon/></Icons>
            <Icons><WorkOutlineOutlinedIcon/></Icons>
            <Icons><ArchiveOutlinedIcon/></Icons>
            <Icons><BuildOutlinedIcon/></Icons>
            <Icons><ContactsOutlinedIcon/></Icons>
          </NavIcons>
        </ProfileInfo>
        <RightSideIcon>
          <A href="https://wa.me/08153382359" >
            <Icon><WhatsAppIcon /></Icon>
          </A>
          <A href="https://twitter.com/Samfajobi2" >
            <Icon><TwitterIcon/></Icon>
          </A>
        </RightSideIcon>
        <RightContent></RightContent>
        <ImageContainer>
          <Image src="/images/MyImg2a.png"/ >
        </ImageContainer>
      </Wrapper>
      
    </Container>
  )
}

export default HomeSection