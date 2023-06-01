import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root {
    // Primary
    
    --light-red: hsl(0, 100%, 67%);
    --orangey-yellow: hsl(39, 100%, 56%);
    --green-teal: hsl(166, 100%, 37%);
    --cobalt-blue: hsl(234, 85%, 45%);
    
    // Gradients 
    
    --light-slate-blue: hsl(252, 100%, 67%);  /* (background) */
    --light-royal-blue: hsl(241, 81%, 54%); /* (background) */
    
    --violet-blue: hsla(256, 72%, 46%, 1); /* (circle) */
    --persian-blue: hsla(241, 72%, 46%, 0); /* (circle) */
    
    // Neutral
    
    --white: hsl(0, 0%, 100%);
    --pale-blue: hsl(221, 100%, 96%);
    --light-lavender: hsl(241, 100%, 89%);
    --dark-gray-blue: hsl(224, 30%, 27%);
    
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Hanken Grotesk;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }
`;

export default  GlobalStyle;