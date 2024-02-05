import './App.css'
import Background from './Sections/Background/Background'
import LateralNav from './Components/LateralNav/LateralNav'
import { register } from 'swiper/element/bundle';
import { GlobalProvider } from './GlobalContext.jsx'

function App() {
  register()
  return (
    <>
      <GlobalProvider>
        <LateralNav>

        </LateralNav>
        <Background>

        </Background>
      </GlobalProvider>

    </>
  )
}

export default App
