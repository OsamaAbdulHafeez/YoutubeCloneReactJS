import React from 'react'
import styled from 'styled-components'
import Comments from '../Components/Comments';

const Container = styled.div`
    margin-top: 10px;
`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 0.5px solid ${({theme})=>theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    font-size: 16px;
    color:${({theme})=>theme.text};
`
const Comment = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://yt3.ggpht.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s48-c-k-c0x00ffffff-no-rj' />
                <Input placeholder='Add a Comment' />
            </NewComment>
            <Comments/>
            <Comments/>
            <Comments/>
            <Comments/>
            <Comments/>
            <Comments/>
            <Comments/>
        </Container>
    )
}

export default Comment
