import './CircleIconStyles.css'

const CircleIcon = ({ width, height, image, source, radius, icon, display, centerIcon }) => {
  return (
    <div
      className='CircleIconContainer
    '
      style={{ 'overflow': 'hidden', 'width': width, 'height': height, backgroundColor: 'white', 'borderRadius': radius, 'display': display, 'justifyContent': centerIcon ? 'center' : null, 'alignItems': centerIcon ? 'center' : null }}
    >
      {icon ? icon : null}
      {image ?
        <img src={source} alt="" style={{ 'cursor': 'pointer', 'objectFit': 'cover', 'width': '100%', 'display': 'block', 'margin':'-20px 0 0 0' }} />
        :
        null
      }
    </div>
  )
}

export default CircleIcon