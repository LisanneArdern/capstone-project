import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root {
   --color-basis: #fff;
   --color-primary: #f0f8f2;
   --color-primary-alpha: rgba(240, 248, 242, 0.7);
   --color-secondary: #204028;
   --color-border: #d3d3d3;
   --color-border-info: #bbdfc4;
   --color-shadow: rgba(0, 0, 0, 0.1);
   --color-border: #d3d3d3;
   --color-disabled: #a9a9a9;
   --color-favorized: #418151;

 }

 * {
   box-sizing: border-box
 }

 body {
   color: var(--color-secondary);
   background-color: var(--color-primary);
   margin: 0;
   font-family: 'Roboto', sans-serif;
   font-size: 112.5%;
   line-height: 1.4;
  
 }

 h1 {
   font-size: 35px;
 }
 h2 {
   font-size: 20px;
 }
`
