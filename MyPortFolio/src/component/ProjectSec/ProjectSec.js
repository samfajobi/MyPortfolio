import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';






const Container = styled.div`
  width: 100vw;
  height: 620px;
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
  cursor: pointer;
 
`


const ProjectCard1 = styled.div`
  border: 1px solid black;
  width: 300px;
`

const ProjectCard
const ProjectImg = styled.div`
  
`

const Image = styled.img`
  width: 300px;
`

const ProjectName = styled.h2`
`
const ProjectDesc = styled.p`
  text-align: justify;
`

const ProjIcons = styled.div`
`

const GitHub = styled.div``

const WebIcon = styled.div``







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
                <ProjectName>E-commerce Website</ProjectName>
                <ProjectDesc>
                    An E-commerce website built with react.js, node.js, express.js
                    and mongodb as a database.
                </ProjectDesc>
                <ProjIcons>
                <GitHub><GitHubIcon/></GitHub>
                <WebIcon></WebIcon>
                </ProjIcons>
              </ProjectCard1>

              <ProjectCard2>
                <ProjectImg>
                  <Image src="/images/Project1.png" />
                </ProjectImg>
                <ProjectName>E-commerce Website</ProjectName>
                <ProjectDesc>
                    An E-commerce website built with react.js, node.js, express.js
                    and mongodb as a database.
                </ProjectDesc>
                <ProjIcons>
                <GitHub><GitHubIcon/></GitHub>
                <WebIcon></WebIcon>
                </ProjIcons>
              </ProjectCard2>

              <ProjectCard3>
                <ProjectImg>
                  <Image src="/images/Project1.png" />
                </ProjectImg>
                <ProjectName>E-commerce Website</ProjectName>
                <ProjectDesc>
                    An E-commerce website built with react.js, node.js, express.js
                    and mongodb as a database.
                </ProjectDesc>
                <ProjIcons>
                <GitHub><GitHubIcon/></GitHub>
                <WebIcon></WebIcon>
                </ProjIcons>
              </ProjectCard3>
      
            </Projects>
            
        </Wrapper>
    </Container>
  )
}

export default ProjectSec