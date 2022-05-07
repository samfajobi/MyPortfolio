import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 700px;
  background-color: #FAF7FA;
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



const SkillsSection = (props) => {
  return (
   <Container ref={props.Skill}>
       <Wrapper>
           <SkillsTitle>Skills</SkillsTitle>
           <Desc>Language and Skills I have learnt and used in my projects</Desc>
           <Icons>
               <Icon1>
                   <Image src='/html.png' />
                   <IconName>HTML 5</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/images/css3.png' />
                   <IconName>CSS 3</IconName>
               </Icon2>
               <Icon3>
               <Image src='/images/javascript.png' />
                   <IconName>HTML 5</IconName>
               </Icon3>
               <Icon4>
               <Image src='/images/typescript-96.png' />
                   <IconName>HTML 5</IconName>
               </Icon4>
           </Icons> 
           <Icons>
               <Icon1>
                   <Image src='/images/sass-100.png' />
                   <IconName>TYPESCRIPT</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/images/react-80.png' />
                   <IconName>REACT</IconName>
               </Icon2>
               <Icon3>
               <Image src='/images/mongodb-96.png' />
                   <IconName>MONGO DB</IconName>
               </Icon3>
               <Icon4>
               <Image src='/images/node-js-96.png' />
                   <IconName>NODE JS</IconName>
               </Icon4>
           </Icons> 
           <Icons>
               <Icon1>
                   <Image src='images/redux-96.png' />
                   <IconName>REDUX</IconName>
               </Icon1>
               <Icon2>
                   <Image src='/images/amazon.png' />
                   <IconName>AWS</IconName>
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

export default SkillsSection;