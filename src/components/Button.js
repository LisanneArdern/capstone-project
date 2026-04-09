import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 8px 14px;
  text-align: center;
  margin: 0;
  font-weight: 500;
  color: var(--color-secondary);
  box-shadow: 0 8px 18px var(--color-shadow);
  background-color: var(--color-surface);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    filter 120ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.01);
  }

  &:active {
    transform: translateY(0);
  }
`

export default Button
