// Component that gathers everything together
const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  // Component that displays the header of the course
  const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  // Component that displays the content of the course
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  // Component that displays one part of the course
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  // Component that displays the total number of the excercises of course
  const Total = ({ parts }) => {
    const total =  parts.reduce( (cB,cV) => cB + cV.exercises, 0)
    return (
      <h4>
        total of {total} excercises
      </h4>
    )
  }

  export default Course