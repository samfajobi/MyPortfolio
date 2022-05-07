import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import WhatsApp from '@material-ui/icons/WhatsApp';
import CopyrightIcon from '@material-ui/icons/Copyright';


const Container = styled.div`
  background-color: #08D6C2;
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center;
  
`
const Wrapper = styled.div`
  
  
`
const DevName = styled.h2`
  text-align: center;
  margin-top: 40px;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 40px;
`
const Li = styled.li`
  list-style: none;
  
`
const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  
  
`
const Icon = styled.div`
  
  padding: 0px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #079588;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
 
`

const A = styled.a`
  text-decoration: none;
  color: none;
`


const Copyright = styled.p``


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <DevName>Sam_Fajobi</DevName>
        <Ul>
          <Li>Abouts</Li>
          <Li>Projects</Li>
          <Li>Skills</Li>
        </Ul>
        <Icons>
          <A href='https://github.com/samfajobi' ><Icon><GitHub/></Icon></A>
          <A href='https://www.linkedin.com/in/sam-fajobi77/' ><Icon><LinkedInIcon /></Icon></A>
          <A href='https://wa.me/08153382359'><Icon><WhatsApp /></Icon></A>
        </Icons>
        <Copyright>Sam_Fajobi. All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  )
}


export default Footer