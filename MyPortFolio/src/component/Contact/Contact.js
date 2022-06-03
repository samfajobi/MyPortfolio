import styled from "styled-components"
import { useState } from "react";
import axios from 'axios';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';



const Container = styled.div`
  background-color: #FAF7FA;
  width: 100vw;
  height: 540px;
  display: flex;
  justify-content: center;
  
`

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 60px 90px;
  
  
`

const LeaveMsg = styled.div`
  width: 90%;
`

const MsgTitle = styled.h1`
  margin-bottom: 10px;
`

const ContactInfo = styled.div`
  width: 50%;
`
const ContactTitle  = styled.h1`
  margin-bottom: 10px;
`
const ContactDesc = styled.p`
  
`
const ContactLctn = styled.div`
  display: flex;
  margin-top: 25px;
  
`
const Span = styled.div``
const ContactNo = styled.div`
  display: flex;
  margin: 20px 0px;
`
const ContactEmail = styled.div`
  display: flex;
 
`
const Form = styled.form``

const Input = styled.input`
  padding: 10px;
  margin: 20px 10px 10px 0px;
  width: ${props => props.prop === 'name' && '40%'};
  width: ${props => props.prop === 'subject' && '86%'};
  width: ${props => props.prop === 'msg' && '86%'};
  height: ${props => props.prop === 'msg' && '80px'};
  
 
` 
const Button = styled.button`
  padding: 10px ;
  border-radius: 6px;
  background-color: black;
  color: white;
  margin-top: 10px;

  &&:hover {
    color: lightgray;
  }
  
`
const CntctIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  border-color: #585EFC;
  color: #585EFC;
`
const Address = styled.div``
const NoIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border-color: #585EFC;
  color: #585EFC;
`
const EmailIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border-color: #585EFC;
  color: #585EFC;
  cursor: pointer;
  
`

const A = styled.a`
  text-decoration: none;
`


const PhoneNo = styled.div`
  height: 30px;
  width: 30px;
`
const Email = styled.div``


const Contact = () => {

  const [ name, setName]  = useState('')
  const [ senderEmail, setSenderEmail]  = useState('')
  const [ number, setNumber]  = useState('')
  const [ message, setMessage ]  = useState('')
  const [ sent, setSent ] = useState(false)


  
 const submitForm = () => {

  let formData = {
    name: name,
    email: senderEmail,
    number: number,
    message: message
  }

  axios.post("/api/form", formData).
  then( (response) => {
    setSent(true)
    
  }).catch( (err) => {
    console.log(err)
    console.log("Your form has not been processed")
  })

 }


  return (
   <Container id="contact">
     <Wrapper>
     <LeaveMsg> 
       <MsgTitle>Chat With Me!!</MsgTitle>
       <Form>
        <Input prop='name'
         placeholder='Your Name:' type='text'
         value={name}
         onChange={ (event) => setName(event.target.value) }
         />
        <Input prop='name'
         placeholder='Your Email:'
         value={senderEmail}
         onChange={ (event) => setSenderEmail(event.target.value) }
         />
        <Input prop='subject' 
        placeholder='Your PhoneNo:'
        value={number}
        onChange={ (event) => setNumber(event.target.value) }
        />
        <Input prop='msg' 
        placeholder='Your Message:' type='text'
        value={message}
        onChange={ (event) => setMessage(event.target.value) }
        />
       </Form>
       <Button onClick={submitForm}>MESSAGE ME</Button>
     </LeaveMsg>
     <ContactInfo>
       <ContactTitle>Contact Info</ContactTitle>
       <ContactDesc>Feel free to react out to me anytime, 
         anyday for any Project, business ideas</ContactDesc>
       <ContactLctn>
        <CntctIcon><LocationOnOutlinedIcon /></CntctIcon>
        <Address><b>Location</b><br/>Akoka, Yaba Lagos</Address>
       </ContactLctn>
       <ContactNo>
         <NoIcon><CallOutlinedIcon /></NoIcon>
         <PhoneNo><b>PhoneNo</b><br/> 08153382359</PhoneNo> 
       </ContactNo>
       <ContactEmail>
         <A href="mailto:fajobiolusegun@gmail.com" ><EmailIcon><EmailOutlinedIcon /></EmailIcon></A>
         <Email><b>Email</b><br/>fajobiolusegun@gmail.com</Email>
       </ContactEmail>
     </ContactInfo>
      </Wrapper>
    </Container>
  )
}

export default Contact