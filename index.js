const Button = props => {
  //  Write your code here.
  const {name, className} = props
  return <button className={className}>{name}</button>
}

const element = (
  //  Write your code here.
  <div className='bgContainer'>
    <div className='flex'>
      <h1 className='headingPara'> Social Buttons </h1>
      <div className='padding'>
        <Button name='Like' className='like-button' />
        <Button name='Comment' className='comment-button' />
        <Button name='Share' className='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
