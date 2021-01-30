import styled from 'styled-components'


export const Lp=styled.div`
position: relative;
width: 1440px;
 height: 1024px; 

background: linear-gradient(180deg, #EC6F66 0%, #F3A183 100%) no-repeat;
background-size: cover;
z-index:1;

.intersect{
    margin-left:635px;

}

.lp{
    
    position:absolute;
    /* margin-left:675px; */
    /* margin-right:300px; */
    margin-bottom:240px;
    margin-top:38px;
    z-index:2;
    right:0px;
}
`

export const LpHero=styled.div`
color:white;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
width:500px;
height:470px;
z-index:2;
padding-left: 120px;
top:270px;
/* margin-bottom:400px; */

h1{
    
    font-size:72px;

}

p{
    padding-top:30px;
    font-size:24px;
/* text-align:justify; */
}

div{
    padding-top:60px;
    display:flex;
    justify-content:center;
    align-items:center;
   

    button{
        width: 300px;
        height: 71px;
        background: linear-gradient(91.96deg, #3913B8 0%, #BA75FF 100%);
        border-radius: 35px;
        border:none;
        outline:none;
        font-size:24px;
        color:white;
        padding-bottom:10px;
        display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        background: linear-gradient(91.96deg, #3913B8 0%, #f08f79 100%);
    }
    
        
    }
    .icon{
        width:50px;
        height:50px;
        /* padding-top:10px; */
    }


}

span{
    font-size: 13px;
line-height: 16px;
position: absolute;
width: 152px;
height: 18px;
left: 725px;
top: 720px;
color:#FFFFFF;
}

`