import React from 'react'
import './TechnologyCardStyles.css'
import Line from '../Line/Line'
import CircleIcon from '../CircleIcon/CircleIcon'
import skills from '../../../Data/skills'
import { useMyGlobalContext } from '../../../GlobalContext'


const TechnologyCard = ({ width, height, cardMarginTop }) => {
  const [spanish] = useMyGlobalContext();
  
  
  return (
    <div className=' techCard' style={{ 'width': width, 'height': height, 'marginTop': cardMarginTop }}>
      <div className='textContainer' style={{ 'width': '100%' }}>
        <h3 className='baseFont techText' style={{ 'fontSize': '2em', 'alignSelf': 'center', 'marginBottom': '10px' }}>
          {spanish ? 'Habilidades' : 'Skills'}
        </h3>
        <Line width='60%' height='4px' color='#fff' borderRadius='3px' flexAlignPosition='center'></Line>
        <div style={{ 'display': 'flex', 'width': '100%', 'marginTop': '20px', 'marginLeft': '40px', 'marginRight': '40px','flexFlow':'wrap','justifyContent':'center' }}>
        {skills.map((element, index) => (
            <div key={index} style={{ 'display': 'flex','marginTop':'20px','marginBottom':'40px' }}>
            <CircleIcon width='50px' height='50px' radius='30px' icon={element.component} display='flex' centerIcon={true}/>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'width': '300px' }}>
              <h3 className='baseFont' style={{'color':'var(--color-card-title)','fontSize':'1.4em', 'textAlign': 'start', 'marginLeft': '15px' }}>{spanish ? element.title.es : element.title.en}</h3>
              <p className='baseFont' style={{ 'fontSize':'1.2em', 'textAlign': 'start', 'marginLeft': '15px' }}>{element.subtitle}</p>
              <p  style={{'whiteSpace':'pre-line','fontWeight':'lighter', 'fontSize': '0.9em', 'textAlign': 'start', 'marginLeft': '15px' }} className='baseFont'>{spanish ? element.description.es : element.description.en}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologyCard