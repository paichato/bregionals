import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    outline:0;

}

body{
    -webkit-font-smoothing: antialiased;
    //background
}

#root{
    margin:0 auto;
    /* padding:40px 20px; */

}

body, input, button{
    font:16px 'Lexend Deca', sans-serif;
}
button{
    cursor: pointer;
}


`