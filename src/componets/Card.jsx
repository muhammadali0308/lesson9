import  './card.css'

function Card() {
  return (
    <div className='card'>
      <img src="./Picture.png" alt="" />
      <p>NIKE AIR FORCE 1 ‘07 (white/black) <br />$89.99</p>
      <h3>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</h3>
      <button className='btn'>Add to cart</button>
    </div>
  )
}

export default Card
