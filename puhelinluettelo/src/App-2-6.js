import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [
				{ name: 'Arto Hellas', id:0 }
			],
			newName: '',
		}
	}

	// Tapahtumankäsittelijä
	inptChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newName: event.target.value })
	}

	addPerson = (event) => {
		event.preventDefault()
		// Toteutetaan inputista saadun nimen (newName) lisääminen kontaktilistaan (persons)
		let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1])
		addPerson.name = this.state.newName
		addPerson.id++
		console.log("adding Person:",addPerson.name)
		const modifiedPersons = this.state.persons.concat(addPerson)

		this.setState({
			persons: modifiedPersons,
			newName: ''
		})
	}

	// Renderöinti
	render() {
		return (
			<div>
				<h2>Phonebook</h2>
				<form onSubmit={this.addPerson}>
					<div>
						name: <input
							value={this.state.newName}
							onChange={this.inptChangeCtrl}
						/>
					</div>
					<div>
						<button type="submit">add</button>
					</div>
				</form>
				<h2>Numbers</h2>
				{this.state.persons.map(person => <p key={person.id}>{person.name}</p>)}
			</div>
		)
	}
}

export default App
