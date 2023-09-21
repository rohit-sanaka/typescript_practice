import { PersonProps } from './Person.types'

const Person = ({ name }: PersonProps) => {
  return <h1>{`Hi ${name.first} ${name.last}`}</h1>
}

export default Person
