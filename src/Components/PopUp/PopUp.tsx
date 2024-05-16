import './PopUp.scss'

interface PopupProps {
  visible: boolean;
}

const PopUp = ({visible}: PopupProps) => {


  return (
    
     <div className={`popup ${visible ? 'show' : ''}`}>
    Product added to cart
     </div>
  )
}

export default PopUp;