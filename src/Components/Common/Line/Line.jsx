const Line = ({width,height,color,borderRadius,flexAlignPosition,margin}) => {
  return (
    <hr style={{'width':width,'height':height,'border':color, 'backgroundColor':color, 'borderRadius':borderRadius,'alignSelf':flexAlignPosition, 'margin':margin}}/>
  )
}

export default Line