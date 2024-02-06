import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comment from '../Components/Comment';
import Card from '../Components/Card';
const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 5;
`
const VideoWrapper = styled.div`
  
`
const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 10px;
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.div`
 color:${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 25px;
  color:${({ theme }) => theme.textSoft};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color:${({theme})=>theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
  font-size: 18px;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft};
  font-size: 15px;
`
const Description = styled.p`
    font-size: 16px;
`
const Subscribe = styled.button`
  height: fit-content;
  background-color: #cc1a00;
  cursor: pointer;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 3px;

`
const Recommendation = styled.div`
  flex: 2;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%" height="550" src="https://www.youtube.com/embed/yIaXoop8gl4?si=WxvWi4mcF6pqsbSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>
          Test Video
        </Title>
        <Details>
          <Info>729,687,000 views . jun 22, 2022</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon /> Like </Button>
            <Button><ThumbDownOffAltOutlinedIcon /> Dislike </Button>
            <Button><ReplyOutlinedIcon /> Reply </Button>
            <Button><AddTaskOutlinedIcon /> Save </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://yt3.ggpht.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s48-c-k-c0x00ffffff-no-rj' />
            <ChannelDetails>
              <ChannelName>Lama Dev</ChannelName>
              <ChannelCounter>200K subscriber</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore illo quam minima dolores? Fugit, saepe. Nostrum aliquam sit magnam.</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comment/>
      </Content>
      <Recommendation>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video
