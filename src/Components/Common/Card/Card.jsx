import './CardStyles.css'
import Line from '../Line/Line'
import { useMyGlobalContext } from '../../../GlobalContext'

const Card = ({ width, height, cardMarginTop, title, isText, isList, text, list, padding }) => {
  
  const [spanish] = useMyGlobalContext()

  return (
    <div className='cardContainer' style={{ 'width': width, 'minHeight': height, 'marginTop': cardMarginTop, 'padding':padding}}>
      <div className='textContainer' style={{ 'width': isList ? '100%' : null }}>
        <h3 className='baseFont' style={{'fontSize':'1.7em' }}>
          {title}
        </h3>
        <Line margin='5px 0 0 0' width='60%' height='4px' color='#fff' borderRadius='3px'></Line>
        {isText ?
          <div style={{ 'width': '90%' }}>
            <p style={{ 'whiteSpace':'pre-line', 'marginTop': '15px', 'marginBottom': '10px','fontWeight':'lighter', 'fontSize': '1em' }} className='baseFont'>{text}</p>
          </div>
          :
          isList ?
            <div style={{ 'width': '90%' }} >
              {
                list.map((element,index) => (
                  <div key={index} style={{'marginTop':'15px'}}>
                     <h3 className='baseFont' style={{ 'color': 'var(--color-card-title)', 'fontSize': '1.3em', 'textAlign': 'start' }}>{spanish ? element.title.es : element.title.en}</h3>
                      <p className='baseFont' style={{ 'fontSize': '1em', 'textAlign':'start' }}>{spanish ? element.subtitle.es : element.subtitle.en}</p>
                      <p className='baseFont' style={{ 'fontSize': '1em', 'textAlign':'start' }}> <b>{spanish ? `${element.dateStarted.es} - ${element.dateEnded.es}` : `${element.dateStarted.en} - ${element.dateEnded.en}`}</b></p>
                      <p style={{'whiteSpace':'pre-line','fontWeight':'lighter', 'fontSize': '1em', 'textAlign': 'start'}} className='baseFont'>{spanish ? element.description.es : element.description.en}</p>
                  </div>
                ))
              }
              <div style={{'marginTop':'1em'}}></div>
            </div>
            :
            null}
      </div>
    </div>
  )
}

export default Card