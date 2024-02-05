import './LateralNavStyles.css'
import ActionButton from '../Common/ActionButton/ActionButton'
import Line from '../Common/Line/Line'
import { useMyGlobalContext } from '../../GlobalContext';



const LateralNav = () => {

  const [spanish, setSpanish] = useMyGlobalContext()

  return (
  <div className='nav'>
    <div style={{'display':'flex','flexDirection':'column','height':'100%'}}>
      <div style={{'display':'flex','marginLeft':'10px','marginTop':'40px'}}>
      <Line width='4px' height='100%' color='#fff' borderRadius='4px'></Line>
      <ul style={{'marginBottom':'auto','marginTop':'0','listStyle':'none','padding':'0 0 0 25px'}}>
        <li className='baseFont'><a href="#sobremi">{spanish ? 'Sobre mí' : 'About me'}</a></li>
        <li className='baseFont'><a href="#trayectoria">{spanish ? 'Trayectoria' : 'Trayectory'}</a></li>
        <li className='baseFont'><a href="#habilidades">{spanish ? 'Habilidades' : 'Skills'}</a></li>
        <li className='baseFont'><a href="#proyectos">{spanish ? 'Proyectos' : 'Projects'}</a></li>
      </ul>
      </div>
      <div style={{'marginTop':'auto','marginLeft':'auto','marginRight':'auto','display':'flex','flexDirection':'column','alignItems':'center'}}>
      <ActionButton width='150px' height='40px' borderRadius='20px' icon='cv' color='#fff' texto={spanish ? 'Descargar CV' : 'Download CV'}/>
      <br />
      <ActionButton width='150px' height='40px' borderRadius='20px' icon='contact' color='#fff' texto={spanish ? 'Contáctame' : 'Contact me'}/>
      <br />
      <div style={{'display':'flex','gap':'20px','placeSelf':'flex-start'}}>
      <Line width='4px' height='80px' color='#fff' borderRadius='4px'></Line>
      <div onClick={() => setSpanish(true)} className='languageButtonContainer' style={{'width':'2em', 'height':'2em', 'backgroundColor':'#fff', 'borderRadius':'30px','display':'flex','justifyContent':'center','alignItems':'center','alignSelf':'center'}}>
        <span>ES</span>
      </div>
      <div onClick={() => setSpanish(false)} className='languageButtonContainer' style={{'width':'2em', 'height':'2em', 'backgroundColor':'#fff', 'borderRadius':'30px','display':'flex','justifyContent':'center','alignItems':'center','alignSelf':'center'}}>
        <span>EN</span>
      </div>
      </div>

      <br />
      <p className='baseFont' style={{'fontSize':'14px','color':'#AB9292','textAlign':'center','marginBottom':'15px'}}></p>
      </div>
    </div>
  </div>
  )
}

export default LateralNav