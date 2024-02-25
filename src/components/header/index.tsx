import * as C from './styled'
import BackLogo from './../../assets/back-logo.png'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { IoEnterOutline } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Image from 'next/image';
export default function Header({openMenu, setOpenMenu} ) {

    const [openSearchBar, setOpenSearchBar] = useState(false)

    return (
        <C.Header>
            <div className='logo' >
                <Image src={BackLogo} alt='logo' width={100} />

            </div>
            <div className='nav'>
                <ul>
                    <li><span>O que quer comer?</span> </li>
                    <li> Menu</li>
                    <li>Contato</li>

                </ul>


            </div>
           
               
                    <input
                        type='search'
                        placeholder='Buscar...'
                        className={openSearchBar ? 'search-bar-open' : 'search-bar-closed'}
                    /> 
        

            <C.RightContainer>
                <CiSearch size={24} color='black'
                    onClick={() => setOpenSearchBar(!openSearchBar)}
                />

                <Badge badgeContent={4} color='error'>
                    <IoBagHandleOutline size={24} color='black' />
                </Badge>



                <Button variant='contained'
                    startIcon={<IoEnterOutline />}
                    style={{ backgroundColor: '#EB0029', width: 100, borderRadius: 20, fontSize: 12, height: 40 }}
                >
                    Login</Button>

            </C.RightContainer>


            {
                openMenu ?
                    <IoMdClose
                        onClick={() => setOpenMenu(false)}
                        className='closeIcon' size={30} color='#EB0029' />
                    : <CiMenuFries
                        onClick={() => setOpenMenu(true)}
                        className='menuIcon' size={30} />
            }

        </C.Header>
    )
}