import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
    color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 2px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`
const Title = styled.h1`
    font-size: 24px;
`
const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
`
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    padding: 10px;
    border-radius: 3px;
    width: 100%;
`
const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
`
const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`
const Links = styled.div`
  margin-left: 50px;
`
const Link = styled.span`
  margin-left: 30px;
`
const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to socialTube</SubTitle>
        <Input placeholder='User Name' />
        <Input type='password' placeholder='Password' />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder='User Name' />
        <Input type='email' placeholder='User Email' />
        <Input type='password' placeholder='Password' />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default Signin
