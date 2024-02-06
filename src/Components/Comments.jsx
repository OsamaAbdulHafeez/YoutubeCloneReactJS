import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  gap: 25px;
  margin: 30px 0;
`
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Name = styled.span`
    font-weight: 500;
    font-size: 14px;
`
const Date = styled.span`
    font-family: 14px;
    margin-left: 5px;
    color: ${({ theme }) => theme.textSoft};
`
const Text = styled.span`
    font-size: 14px;
`
const Comments = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s48-c-k-c0x00ffffff-no-rj' />
      <Details>
        <Name>John Doe <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, dignissimos. Nihil magni delectus similique sunt eligendi tempora quaerat, ratione harum.</Text>
      </Details>
    </Container>
  )
}

export default Comments
