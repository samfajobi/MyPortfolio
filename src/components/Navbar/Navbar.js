import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  background-color: blue; 
`
const Wrapper = styled.div``
const Right = styled.div``
const Left = styled.div``

const Navbar = () => {
  return (
   <Container>
       <Wrapper>
           <Right></Right>
           <Left></Left>
       </Wrapper>

   </Container>
  )
}

export default Navbar