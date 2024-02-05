
import Card from '../../Components/Common/Card/Card'
import './SobreMiStyles.css'
import { useMyGlobalContext } from '../../GlobalContext'
import aboutme from '../../Data/aboutme'

const SobreMi = () => {

  const [spanish] = useMyGlobalContext()


  return (
    <div id='sobremi' style={{ 'display': 'flex', 'justifyContent': 'center' }}>
      <Card width='28em' height='250px' cardMarginTop='50px'
        title={spanish ? 'Sobre mí' : 'About me'}
        isText={true}
        text={spanish ? aboutme[0].es : aboutme[0].en}
      >
      </Card>
    </div>
  )
}

export default SobreMi