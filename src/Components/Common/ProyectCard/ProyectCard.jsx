import './ProyectCardStyles.css'
import { useMyGlobalContext } from '../../../GlobalContext';

const ProyectCard = ({ title, technologies, description, image, url }) => {

  const [spanish] = useMyGlobalContext();


  return (
    <div className='proyectContainer' style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'textAlign': 'center', 'alignItems': 'center' }}>
      <div style={{ 'width': '12em', 'height': '8em', 'backgroundColor': '#fff', 'borderRadius': '30px','overflow':'hidden'}}>
        <a href={url} target='_blank'>
        <img src={`images/projects/${image}`} alt="" style={{'cursor':'pointer','objectFit':'cover','width':'100%','height':'100%','display':'block'}} />
        </a>
      </div>
      <div style={{'display':'flex','flexDirection':'column','width':'15em'}}>
      <h3 className='baseFont' style={{'whiteSpace': 'pre-line', 'color': 'var(--color-card-title)', 'fontSize': '1.3em', 'textAlign': 'center', 'marginTop': '15px' }}>{spanish ? title.es : title.en}</h3>
      <p className='baseFont' style={{'whiteSpace': 'pre-line', 'fontSize': '1em', 'textAlign': 'center' }}><b>{technologies}</b></p>
      <p style={{ 'whiteSpace': 'pre-line', 'fontWeight': 'lighter', 'fontSize': '0.9em', 'textAlign': 'center' }} className='baseFont'>{spanish ? description.es : description.en}</p>
      </div>
    </div>
  )
}

export default ProyectCard