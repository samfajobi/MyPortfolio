import styled from "styled-components";
import HomeSection from "./component/HomeSection/HomeSection"
import AboutSection from './component/AboutSection/AboutSection';
import ProjectSec from "./component/ProjectSec/ProjectSec"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import SkillsSection from "./component/SkillsSection/SkillsSection"
import ServiceTools from "./component/ServiceToolsSec/ServiceToolsSec"
import DehazeIcon from '@material-ui/icons/Dehaze';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useRef }   from 'react';





const BigContainer = styled.div``
const SmallContainer = styled.div``


const Container = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #75F1E6;
  top: 0;
  
`

const Wrapper = styled.div`
  display: flex;
  padding: 10px 30px;

`



const Left = styled.div`
  flex: 1;
`
const DevName = styled.h1`
  display: flex;
  
`

const Span = styled.span`
  color: #70B4AE;
`

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 580px) {
    display: none;
  }
  
  
  
`
 

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 580px) {
    margin-right: 90px;
    
  }
  
  
  
`

const DarkModeIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
  

`

const ToggleIcon = styled.div`
  margin-top: 7px;
  margin-left: 40px;
  margin-right: 20px;
  @media screen and (min-width: 580px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: flex;
  text-align: center;
  
  
`
const Li = styled.li`
  padding-left: 25px;
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  color: ;

  &:hover {
    color: #058489;
  }
  
`




const App = () => {

  const Home = useRef(null)
  const About = useRef(null)
  const Project = useRef(null)
  const Skill = useRef(null)
  const Tool = useRef(null)
  


  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    
    <BigContainer>
      <Container ref={Home}>
        <Wrapper>
          <Left>
            <DevName>Sam<Span>_Fajobi</Span></DevName>
          </Left>
          <Center>
            <Ul>
              <Li onClick={ () => scrollToSection(Home) } >Home</Li>   
              <Li onClick={ () => scrollToSection(About) } >About</Li>
              <Li onClick={ () => scrollToSection(Project) } >Project</Li>
              <Li onClick={ () => scrollToSection(Skill) } >Skills</Li>
              <Li onClick={ () => scrollToSection(Tool) } >Tools</Li>
              <Li onClick={ () => scrollToSection(Contact) }>Contact</Li>
            </Ul>
          </Center>
          <Right>
            <DarkModeIcon><Brightness4Icon /></DarkModeIcon>
          </Right>
          <ToggleIcon>< DehazeIcon /></ToggleIcon>
        </Wrapper>
     </Container>
     
     <SmallContainer>
     <HomeSection />
     <AboutSection About={About}/>
     <ProjectSec Project={Project}/>
     <SkillsSection Skill={Skill}/>
     <ServiceTools Tool={Tool}/>
     <Contact />
     <Footer />
     </SmallContainer>
     
   </BigContainer>
 
   
  )
}

export default App