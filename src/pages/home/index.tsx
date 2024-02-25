import * as C from './../../components/header/styled'
import ImageCenter from '../../assets/image.svg'
import Image from 'next/image'
import {Button} from '@mui/material'
import Play from '../../assets/play.svg'
import { CiMobile1 } from "react-icons/ci";
import Notification from '../../assets/notification.svg'
import Avaliation from '../../assets/avaliation.svg'
export default function HomeScreen(){
    return(
       
      
        
                <C.HomeContainer>
        
                    <div className='content-right'>
                        <h1>As melhores opções </h1>
                        <h1>em Fast <span>Food</span> & </h1>
                        <h1><span>Restaurantes</span></h1>
                        <p>Nosso trabalho é te proporcionar experiências deliciosas e com entrega rápida e gratuita</p>
                   
                   
                   <div className='container-button'>
                     <Button
                    className='button'
                    variant='contained'
                    >Começar</Button>

                  <Button
                  className='buttonMob'
                  startIcon={<CiMobile1 size={24} color='#EB0029'/>}
                  variant='text'>
                    Baixe nosso App
                  </Button>
                   
                   </div>
                   
                    </div>
                    <div className='content-left'>
                        <Image className='notification' src={Notification} />
                        <Image className='avaliation' src={Avaliation} />
                        <Image src={ImageCenter} alt="Prato com salada e frango" width={600} />
                    </div>
                </C.HomeContainer>
            )
        
    
}