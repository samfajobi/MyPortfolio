import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';




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
const ProjInfo = styled.div`
  opacity: 3;
  background: blue;
  postion: relative;

`
const Projects = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  cursor: pointer;

  &:hover ${ProjInfo} {
      opacity: 1;

  }
 
`
const Image = styled.img`
  width: 330px;

  &:hover ${ProjInfo} {
      opacity: 0.8;
      
      transition: all 1.1s ease;
      color: linear-gradient(
          rgba( 200, 255, 255, 0.5),
          rgba( 200, 255, 255, 0.6)
      );
      transform: scale(1.08);
  }
 
`


const Project1 = styled.div`
  flex: 1;
  color: blue;

  &:hover {
      background-color: ligthgray;
  }
  
`
const Project2 = styled.div`
  flex: 1;
`
const Project3 = styled.div`
  flex: 1;
`


const ProjDesc = styled.div`
`
const ProjIcons = styled.div`
`
const GithubIcon = styled.div`
`
const WebICon = styled.div`
`







const ProjectSec = (props) => {
  return (
    <Container ref={props.Project}>
        <Wrapper>
            <ProjTitle>My Works</ProjTitle>
            <ProjTitle2>Here are some of my projects i developed from skills learnt</ProjTitle2>
            <Projects>
                <Project1>
                    <Image src='/images/Project1.png'/>
                </Project1>
                <Project2>
                   <Image src='/images/Project1.png'/>
                </Project2>
                <Project3>
                  <Image src='/images/Project1.png'/>
                </Project3>
            </Projects>
            <ProjInfo>
                <ProjDesc></ProjDesc>
                <ProjIcons>
                    <GithubIcon><GitHubIcon /></GithubIcon>
                    <WebICon><LanguageIcon /></WebICon>
                </ProjIcons>
            </ProjInfo>
        </Wrapper>
    </Container>
  )
}

export default ProjectSec