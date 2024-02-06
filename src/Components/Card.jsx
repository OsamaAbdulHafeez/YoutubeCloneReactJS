import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: ${(props) => props.type === "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`
const Image = styled.img`
  width: 100%;
  height:${(props) => props.type === "sm" ? "100px" : "202px"};
  background-color: #999;
`
const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type === "sm" ? "0px" : "16px"};
  gap: 12px;
`
const ChannelImage = styled.img`
  width: 36px;
  height:36px;
  border-radius: 50%;
  background-color:#999;
  display: ${(props)=>props.type === "sm" && "none"};
`
const Texts = styled.div`
  
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  /* color:white; */
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 16px;
  /* color:white; */
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`
const Info = styled.div`
  /* color:white; */
  color: ${({ theme }) => theme.textSoft};
  font-size: 16px;
`
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} src='https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
        <Details type={type}>
          <ChannelImage type={type} src='https://yt3.ggpht.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s48-c-k-c0x00ffffff-no-rj'/>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Social Tube</ChannelName>
            <Info>690,000 viwes &bull; 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link >
  )
}

export default Card
