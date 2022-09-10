import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  saleId: number;
} 

function handleCLick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(reponse =>{
    console.log("SUCESSO");
  })
}

function NotificatinButton({saleId} : Props) {
  return(
    <div className="dsmeta-red-btn" onClick={() => handleCLick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificatinButton;