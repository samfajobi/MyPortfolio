import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';






const Container = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  justify-content: center;
  background-color: #C0FAFC;

  
`

const Wrapper = styled.div`
  text-align: center;
  width: 70%;
`
const ProjTitle = styled.h1`
  margin-top: 50px;
  margin-bottom: 20px;
`
const ProjTitle2 = styled.div`
  text-align: center;
`

const Projects = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
 
 
`


const ProjectCard1 = styled.div`
 
  border: 1px solid black;
  width: 300px;
  margin-right: 30px;
  margin-left: 4%;
`

const ProjectCard2 = styled.div`
 
  border: 1px solid black;
  width: 300px;
  margin-right: 30px;
`

const ProjectCard3 = styled.div`
 
  border: 1px solid black;
  width: 300px;
`


const ProjectImg = styled.div`
  
`

const Image = styled.img`
  width: 300px; 
`

const ProjectName = styled.h2`
  margin-top: 20px;
`
const ProjectDesc = styled.p`
  margin-top: 10px;
  padding: 5px;
  
`

const ProjIcons = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`
const A = styled.a``


const GitHub = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:  #05B6BD;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #08DCE5;
  }
`

const WebIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:  #05B6BD;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #08DCE5;
  }
`







const ProjectSec = (props) => {
  return (
    <Container ref={props.Project}>
        <Wrapper>
            <ProjTitle>My Works</ProjTitle>
            <ProjTitle2>Here are some of my projects i developed from skills learnt</ProjTitle2>
            <Projects>
              <ProjectCard1>
                <ProjectImg>
                  <Image src="/images/Project1.png" />
                </ProjectImg>
                <ProjectName>An E-commerce Website</ProjectName>
                <ProjectDesc>
                    An E-commerce website built with react.js, node.js, express.js
                    and mongodb as a database.
                </ProjectDesc>
                <ProjIcons>
                 <A href='https://github.com/samfajobi/Lumimi-EcommerceWebApp'><GitHub><GitHubIcon/></GitHub></A>
                 <A href="" ><WebIcon><LanguageIcon /></WebIcon></A>
                </ProjIcons>
              </ProjectCard1>

              <ProjectCard2>
                <ProjectImg>
                  <Image src="/images/Project1.png" />
                </ProjectImg>
                <ProjectName>A Business Website</ProjectName>
                <ProjectDesc>
                    A business website for a block industry for advertisement and 
                    sales of blocks, cements and numerous kinds of building 
                    materials
                </ProjectDesc>
                <ProjIcons>
                <A href='https://github.com/samfajobi/ChiristabossWeb'><GitHub><GitHubIcon/></GitHub></A>
                <A href="https://christabossglobal.netlify.app"><WebIcon><LanguageIcon /></WebIcon></A>
                </ProjIcons>
              </ProjectCard2>

              <ProjectCard3>
                <ProjectImg>
                  <Image src="/images/Project1.png" />
                </ProjectImg>
                <ProjectName>A Chat Application</ProjectName>
                <ProjectDesc>
                    A Chat Application built with react.js node.js framework called socket.io
                    and a simple rest api for user authentication and authorisation.
                </ProjectDesc>
                <ProjIcons>
                <A href='https://github.com/samfajobi/AChatAppWithReactJsAndNodeJs'><GitHub><GitHubIcon/></GitHub></A>
                <A href="" ><WebIcon><LanguageIcon /></WebIcon></A>
                </ProjIcons>
              </ProjectCard3>
      
            </Projects>
            
        </Wrapper>
    </Container>
  )
}

export default ProjectSec