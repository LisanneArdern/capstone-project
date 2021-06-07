export default function CropItem({ name, image }) {
  return (
    <section>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </section>
  )
}
