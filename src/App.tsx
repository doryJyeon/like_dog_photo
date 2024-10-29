import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Liked from './pages/Liked'
import TheHeader from './components/TheHeader'
import styled from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import TheFooter from './components/TheFooter'

const App: React.FC = () => {

  return (
    <Router>
      <TheHeader />
      <ScrollToTop />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </Container>

      <TheFooter />
    </Router>
  )
}

const Container = styled.div`
  position: relative;
  margin-top: 130px;
`


export default App
