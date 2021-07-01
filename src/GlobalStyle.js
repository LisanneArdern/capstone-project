import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root {
   --color-basis: #fff;
   --color-primary: #FEF5E7;
   --color-secondary: #447F3D;
   --color-border: #d3d3d3;
   --color-shadow: #FFE5AA;
   --color-light-shadow: rgba(0, 0, 0, 0.1);
   --color-dark-green: #204028;
   --color-text: #e4e4e4;
 }

 * {
   box-sizing: border-box
 }

 body {
   color: var(--color-dark-green);
   margin: 0;
   font-family: 'Roboto', sans-serif;
   font-size: 112.5%;
   line-height: 1.4;
   background: #e3f1e7;
 }

 h1 {
   font-size: 35px;
 }
 h2 {
   font-size:20px;
 }
`
