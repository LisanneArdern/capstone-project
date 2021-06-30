import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation({ isActive }) {
  const activeStyle = {
    color: 'var(--color-dark-green)',
    scale: '1.05',
  }
  return (
    <Nav>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Search
      </NavLink>
      <NavLink to="/mygarden" activeStyle={activeStyle}>
        My Garden
      </NavLink>
    </Nav>
  )
}
const Nav = styled.nav`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--color-dark-green);
  background-color: var(--color-basis);
  width: 100%;

  a {
    color: var(--color-border);
    text-decoration: none;
  }
`
