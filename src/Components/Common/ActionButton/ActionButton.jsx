import { LiaFileDownloadSolid } from "react-icons/lia";
import { LiaEnvelope } from "react-icons/lia";
import './ActionButtonStyles.css'


const ActionButton = ({width,height,texto,icon,borderRadius, margin}) => {
  return (
    <div className='buttonContainer' style={{'width':width,'height':height,'borderRadius':borderRadius, 'margin':margin}}>
      <a href={ icon === 'cv' ? "public/documents/cv/alanorejon-cv.pdf" : icon === 'contact' ? 'mailto:alanorejon2001@gmail.com' : null} target={ icon === 'cv' ? '_blank' : null} >
      <div style={{'display':'flex','height':'100%','justifyContent':'center','alignItems':'center'}}>
        {
          icon === 'cv' ? <LiaFileDownloadSolid color='#000' size='1em'></LiaFileDownloadSolid>
          :
          icon ==='contact' ? <LiaEnvelope color='#000' size='1em'></LiaEnvelope> 
          :
          null
        }
            <span style={{'fontSize':'0.9em', 'color':'#000'}}>{texto}</span>
      </div>
      </a>
    </div>
  )
}

export default ActionButton