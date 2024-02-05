import Card from '../../Components/Common/Card/Card'
import academic from '../../Data/academic';
import profesional from '../../Data/professional';
import './TrayectoriaStyles.css'
import { useMyGlobalContext } from '../../GlobalContext';

const Trayectoria = () => {

  const [spanish] = useMyGlobalContext()

  return (
    <div id='trayectoria' style={{ 'display': 'flex', 'justifyContent': 'center', 'gap': '4%', 'width': '85%', 'margin': '0 auto 0 auto'}}>
      <Card width='35em' height='27em'  cardMarginTop='50px'
        title={spanish ? 'Académica' : 'Academic'}
        isList={true}
        list={academic}
      >
      </Card>
      <div style={{'display':'flex','justifyContent':'center','alignItems':'center','flexDirection':'column'}}>
        <h2 className='Trayectoria' style={{ 'alignSelf': 'center', 'textAlign': 'center' }}>
          {spanish ? 'Trayectoria' : 'Trajectory'}
          <br />
        </h2>
        <div className="ColorLine"></div>
      </div>
      <Card width='35em' height='27em' cardMarginTop='50px'
        title={spanish ? 'Profesional' : 'Professional'}
        isList={true}
        list={profesional}
      >
      </Card>
    </div>
  )
}

export default Trayectoria