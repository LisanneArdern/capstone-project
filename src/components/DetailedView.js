import styled from 'styled-components/macro'
export default function DetailedView({
  name,
  botanicalName,
  sun,
  spread,
  rowSpace,
  details,
}) {
  return (
    <section>
      <h2>{name}</h2>
      <dl>
        <dt>Botanical Name:</dt>
        <dd>{botanicalName}</dd>
      </dl>
      <h3>Quick Guide</h3>
      <ul>
        <li>{sun}</li>
        <li>{spread}</li>
        <li>{rowSpace}</li>
      </ul>
      <h3>Details</h3>
      <p>{details}</p>
    </section>
  )
}
