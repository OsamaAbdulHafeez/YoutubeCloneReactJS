import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { DarkTheme, LightTheme } from './utils/Theme';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Video from './Pages/Video';
import Signin from './Pages/Signin';
const Container = styled.div`
  display:flex;
`
const Main = styled.div`
  flex:6.7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`
function App() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setdarkMode={setdarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='signin' element={<Signin/>} />
                  <Route path='Video'>
                    <Route path=":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
