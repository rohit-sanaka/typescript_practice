import { Name } from './Person.types'

type PersonListProps = {
  names: Name[]
}

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name.first}>{`Hello ${name.first} ${name.last}`}</h2>
      })}
    </div>
  )
}

export default PersonList
