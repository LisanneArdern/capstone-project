import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root {
   --color-basis: #f9fdf8;
   --color-surface: #ffffff;
   --color-primary: #edf6ef;
   --color-primary-alpha: rgba(237, 246, 239, 0.88);
   --color-secondary: #234b33;
   --color-secondary-soft: #3f7a58;
   --color-border: #cfe1d3;
   --color-border-info: #b8d6c0;
   --color-shadow: rgba(20, 48, 31, 0.16);
   --color-disabled: #7f9887;
   --color-favorized: #2f8f56;
 }

 * {
   box-sizing: border-box
 }

 body {
   color: var(--color-secondary);
  background: linear-gradient(180deg, #f7fcf7 0%, #edf6ef 100%);
   margin: 0;
   font-family: 'Roboto', sans-serif;
  font-size: 106.25%;
   line-height: 1.4;
  -webkit-font-smoothing: antialiased;
 }

 h1 {
  font-size: 2rem;
 }
 h2 {
  font-size: 1.1rem;
 }
`
