const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const names = []
  const exs = []
  const parts = props.parts
  for (const element of parts) {
    names.push(element.name);
    exs.push(element.exercises);
  }
  return (
    <div>
      <Part pt={names[0]} ex={exs[0]} />
      <Part pt={names[1]} ex={exs[1]} />
      <Part pt={names[2]} ex={exs[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.pt} {props.ex}
    </p>
  </div>
  )
}

const Total = (props) => {
  const exs = []
  const parts = props.parts
  for (const element of parts) {
    exs.push(element.exercises);
  }
  return (
  <div>
    <p>Number of exercises {exs[0] + exs[1] + exs[2]}</p>
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)
}

export default App