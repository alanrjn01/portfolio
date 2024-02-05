import Line from '../../Components/Common/Line/Line';
import ProyectCard from '../../Components/Common/ProyectCard/ProyectCard';
import projects from '../../Data/projects';
import { useMyGlobalContext } from '../../GlobalContext';


const Proyectos = () => {

  const [spanish] = useMyGlobalContext()

  return (
    <div id='proyectos' style={{ 'display': 'flex', 'width': '100%', 'justifyContent': 'center', 'flexDirection': 'column', 'marginTop': '60px' }}>
      <Line width='80%' height='4px' color='#fff' borderRadius='3px' flexAlignPosition='center'></Line>
      <h3 className='baseFont' style={{ 'textAlign': 'center', 'fontSize': '2em', 'marginTop': '15px' }}>{spanish ? 'Proyectos' : 'Projects'}</h3>
      <div style={{ 'width': '90%', 'alignSelf': 'center', 'marginTop': '15px' }}>
        <swiper-container speed="500" loop="true" navigation="true" breakpoints="{&quot;100&quot;:{&quot;slidesPerView&quot;:1},&quot;1100&quot;:{&quot;slidesPerView&quot;:2},&quot;1600&quot;:{&quot;slidesPerView&quot;:3}}">
          {projects.map((element, index) => (
            <swiper-slide key={index}>
              <ProyectCard title={element.title} description={element.description} technologies={element.technologies} image={element.image} url={element.url}>

              </ProyectCard>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <Line margin='30px 0 0 0 ' width='80%' height='4px' color='#fff' borderRadius='3px' flexAlignPosition='center'></Line>
    </div>
  )
}

export default Proyectos