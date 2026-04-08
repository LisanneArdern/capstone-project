import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation() {
  const getActiveStyle = ({ isActive }) =>
    isActive ? { color: 'var(--color-secondary)', scale: '1.05' } : undefined
  return (
    <Nav>
      <NavLink to="/" end style={getActiveStyle}>
        Search
      </NavLink>
      <NavLink to="/mygarden" style={getActiveStyle}>
        My Garden
      </NavLink>
      <NavLink to="/tasks" style={getActiveStyle}>
        Tasks
      </NavLink>
    </Nav>
  )
}
const Nav = styled.nav`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid var(--color-secondary);
  background-color: var(--color-basis);
  width: 100%;
  background-color: var(--color-primary);

  a {
    color: var(--color-disabled);
    text-decoration: none;
  }
`
