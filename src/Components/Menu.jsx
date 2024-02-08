import React from 'react'
import styled from 'styled-components'
import SocialTube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
const Container = styled.div`
    flex:1.3;
    background-color:${({ theme }) => theme.bgLighter};
    color:${({ theme }) => theme.text};
    height:100vh;
    font-size: 14px;
    position: sticky;
    top: 0;
    overflow-y: scroll;
`
const Wrapper = styled.div`
    padding:18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 25px;
`
const Img = styled.img`
    height:25px;
    margin-right: 10px;
`
const Item = styled.div`
    display: flex;
    gap:20px;
    align-items: center;
    cursor: pointer;
    padding: 7.5px 0px;
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div`

`
const Button = styled.button`
    padding: 5px 15px;
    background: transparent;
    border: 1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap:5px;
`
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`
const Menu = ({ darkMode, setdarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={SocialTube} />
                        Social Tube
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscription
                </Item>
                <Hr />
                <Item>
                    <VideoLibraryIcon />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos ,comment and subscribe
                    <Link to="signin" style={{ textDecoration: "none" }}>
                        <Button>
                            <AccountCircleOutlinedIcon />SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>BEST OF SOCIALTUBE</Title>
                <Item>
                    <LibraryMusicIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationIcon />
                    Movies
                </Item>
                <Item>
                    <ArticleIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon />
                    Help
                </Item>
                <Item onClick={() => setdarkMode(!darkMode)}>
                    <SettingsBrightnessIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container >
    )
}

export default Menu
