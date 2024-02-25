import { styled } from "styled-components";
export const Header = styled.div`

display:flex;
align-items:center;
margin-top:1rem;
margin-left: 2rem;
margin-right: 2rem;
justify-content:space-around;

.search-bar-open{
    width:15rem;
    height:2rem;
    border-radius:0.5rem;
    border-width:1px;
    transition: 0.5s ease-in-out;
}
.search-bar-closed{
    transition: 0.5s ease-in-out;
   width:0;
   height:0;
   padding:0;
   border-width:0;
}
.logo{
    margin-left:2rem;
 
}
.nav{
  ul{
    display:flex;
    gap:3rem;
  }
    li{
        list-style:none;
        position:relative;
        transition:0.3s;
        color:black;
      
    }

    li::before{
        position:absolute;
        width:0;
        height:0.1rem;
        background-color:#EB0029;
        content:'';
        cursor:pointer;
       bottom:-0.5rem;
 transition:0.5s ease-in-out;
  
    }
    li:hover:before{
     width:100%;


    }
    li:hover{
        cursor:pointer;
        color:#EB0029;
    }
    span{
        color:#EB0029;
    }
}
.menuIcon{
    display:none;
}
.closeIcon{
    display:none;
}
@media(max-width: 700px){
  .nav{
   display:none;
  }
}
@media(max-width: 700px){
   justify-content:space-between;
   margin-left:0;
   margin-right:0;
  li{
    display:none;
  }
  .menuIcon{
    display:flex;
    z-index:2000;
  }
  .menuIcon:hover{
    cursor:pointer;
  }
  .closeIcon{
    display:flex;
    z-index:2000;
  }
  .closeIcon:hover{
    cursor:pointer;
  }
  }
`

export const RightContainer = styled.div`
align-items:center;
justify-content:center;
display:flex;
gap:2rem;

svg{
    cursor:pointer;
}
@media(max-width: 700px){
  display:none;

   }
   
`
export const HomeContainer = styled.div`
margin-left:4rem;
margin-right:4rem;
margin-top:4rem;
display:flex;
justify-content:space-around;
align-items:center;


.content-right{
    h1{
        font-family:'Rubik',sans-serif;
        font-weight:bold;
        font-size: 3.5rem;
    
    }
    span{
        font-family:'Lobster',sans-serif;
        color:#EB0029;
        font-size: 3.2rem;
    }
    p{
        font-size:1rem;
        width:60%;
        font-weight:400;
        color:#333333;
    }
    .container-button{
        gap:1rem;
        display:flex;
    }
    .button{
        background-color:#EB0029;
        width:10rem;
        border-radius:1.5rem;
        height:3rem;
        transition:0.3s;
    }
    .button:hover{
        font-size:1rem;
    }
    .buttonMob{
  color:black;
  transition:0.3s;
    }
    .buttonMob:hover{
        font-size:1rem;
          }
}

.content-left{
    position:relative;

.notification{
position:absolute;
bottom:2rem;
transition: 0.3s;
width:320px;
}
.notification:hover{
width:350px;
    }
    .avaliation{
        position:absolute;
bottom:-2rem;
right:0;
transition: 0.3s;
width:270px;
    }
    .avaliation:hover{
        width:300px;
    }
}

`