import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Random from './pages/Random'
import Liked from './pages/Liked'
import TheHeader from './components/TheHeader'
import styled from 'styled-components'
import ScrollToTop from './components/common/ScrollToTop'
import TheFooter from './components/TheFooter'
import BreedGroup from './pages/BreedGroup'
import Breed from './pages/Breed'

const App: React.FC = () => {

  return (
    <Router>
      <TheHeader />
      <ScrollToTop />

      <Container>
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/breed" element={<BreedGroup />} />
          <Route path="/breed/:type" element={<Breed />} />
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
