type GreetProps = {
  name: string
  isLoggedin: boolean
}

const Greet = ({ name, isLoggedin }: GreetProps) => {
  return <h1>{isLoggedin ? `Hello ${name}! Nice day!` : `Hello Guest`}</h1>
}

export default Greet
