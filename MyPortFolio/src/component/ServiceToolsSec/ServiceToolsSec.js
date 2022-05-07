import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 60%;
  margin: 60px 90px;
  text-align: center;
  
`

const SkillsTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Desc = styled.p`
  text-align: center;
  margin-bottom: 20px;
`

const Icons = styled.div`
  display: flex;
  margin: 30px 0px;
`
const Image = styled.img``
const IconName = styled.div``
const Icon1 = styled.div`
  flex: 1;
`
const Icon2 = styled.div`
  flex: 1; 
`
const Icon3 = styled.div`
  flex: 1;
`
const Icon4 = styled.div`
  flex: 1;
`



const ServiceTools = (props) => {
  return (
   <Container ref={props.Tool}>
       <Wrapper>
           <SkillsTitle>Tools</SkillsTitle>
           <Desc>Here are some tools I have used in my projects</Desc>
           <Icons>
               <Icon1>
                   <Image src='/images/gitIcon.png' />
                   <IconName>HTML 5</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon2>
               <Icon3>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon3>
               <Icon4>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon4>
           </Icons> 
           <Icons>
               <Icon1>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon2>
               <Icon3>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon3>
               <Icon4>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon4>
           </Icons> 
           <Icons>
               <Icon1>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon2>
               <Icon3>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon3>
               <Icon4>
               <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon4>
           </Icons> 
       </Wrapper>
   </Container>
  )
}

export default ServiceTools;