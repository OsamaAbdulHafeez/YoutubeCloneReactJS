import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 5px 20px;
  position: relative;
`
const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`
const Input = styled.input`
  border: none;
  font-size: 16px;
  background: transparent;
  color: ${({ theme }) => theme.text};
`
const Button = styled.button`
    padding: 5px 15px;
    background: transparent;
    border: 1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap:5px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
