import './BackgroundStyles.css'
import Header from '../Header/Header'
import SobreMi from '../SobreMi/SobreMi';
import Trayectoria from '../Trayectoria/Trayectoria';
import Habilidades from '../Habilidades/Habilidades';
import Proyectos from '../Proyectos/Proyectos';
import ActionButton from '../../Components/Common/ActionButton/ActionButton';
import { useMyGlobalContext } from '../../GlobalContext';

const Background = () => {

  const [spanish] = useMyGlobalContext()

  return (
    <div className='background'>
      <Header></Header>
      <SobreMi></SobreMi>
      <Trayectoria></Trayectoria>
      <Habilidades></Habilidades>
      <Proyectos></Proyectos>
      <div className='buttonContactContainer'>
      
      <ActionButton width='150px' height='40px' borderRadius='20px' icon='contact' color='#fff' texto={spanish ? 'Contáctame' : 'Contact me'}/>

      </div>
    </div>
  )
}

export default Background