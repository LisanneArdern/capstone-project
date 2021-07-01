export default function TaskEntry({ nameOfCrop, tasks }) {
  return (
    <div>
      <h2>{nameOfCrop}</h2>
      <span>{tasks}</span>
    </div>
  )
}
