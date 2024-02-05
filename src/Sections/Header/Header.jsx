import CircleIcon from '../../Components/Common/CircleIcon/CircleIcon'
import './HeaderStyles.css'
import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import Line from '../../Components/Common/Line/Line';
import ActionButton from '../../Components/Common/ActionButton/ActionButton';
import { useMyGlobalContext } from '../../GlobalContext';

const Header = () => {

  const [spanish, setSpanish] = useMyGlobalContext()


  return (
    <div id='header' className='headerContainer'>
      <div className='languageHeader' style={{'gap': '20px', 'placeSelf': 'flex-start', 'marginLeft': '15px' }}>
        <div onClick={() => setSpanish(true)} className='languageButtonContainer' style={{ 'width': '2em', 'height': '2em', 'backgroundColor': '#fff', 'borderRadius': '30px', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'center' }}>
          <span style={{'color':'#000'}}>ES</span>
        </div>
        <div onClick={() => setSpanish(false)} className='languageButtonContainer' style={{ 'width': '2em', 'height': '2em', 'backgroundColor': '#fff', 'borderRadius': '30px', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'center' }}>
          <span style={{'color':'#000'}}>EN</span>
        </div>
      </div>
      <CircleIcon width='200px' height='200px' radius='100px' image={true} source='/images/personal/profilepic.jpeg'>
      </CircleIcon>
      <h1>
        Alan Orejon
      </h1>
      <h2>
        {spanish ? 'Desarrollador FullStack' : 'FullStack Developer'}
      </h2>
      <div style={{ 'display': 'flex', 'gap': '1.5em', 'margin': ' 10px 0 10px 0' }}>
        <div className='socialButtonContainer' onClick={() => { window.open('https://github.com/alanrjn01', '_blank') }}>
          <LiaGithub size='3em' color='#000'></LiaGithub>
        </div>
        <div className='socialButtonContainer' onClick={() => { window.open('https://www.linkedin.com/in/alan-orejon/', '_blank') }}>
          <LiaLinkedin size='3em' color='#000'></LiaLinkedin>
        </div>
      </div>
      <ActionButton margin='10px 0 15px 0' width='150px' height='40px' borderRadius='20px' icon='cv' color='#fff' texto={spanish ? 'Descargar CV' : 'Download CV'} />
      <Line width='90%' height='4px' color='#2C63A5' borderRadius='3px'></Line>
    </div>
  )
}

export default Header