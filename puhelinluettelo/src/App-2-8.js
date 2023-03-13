import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			persons: [
				{ name: 'Arto Hellas', id:0, number:"040-123456"}
			],
			newName: '',
			newNumber: ''
		}
	}

	// Tapahtumankäsittelijät nimelle...
	nameChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newName: event.target.value })
	}
	// ... ja numerolle.
	numChangeCtrl = (event) => {
		console.log(event.target.value)
		this.setState({ newNumber: event.target.value })
	}

	addPerson = (event) => {
		event.preventDefault()
		// Esttetään duplikaattien lisääminen
		if (this.state.persons.map(person => person.name).includes(this.state.newName)){
			alert(`${this.state.newName} is already added to phonebook!`)
		} else if (this.state.newName === '' || this.state.newNumber === '') {
			alert(`Give name AND number!`)
		} else {
			// Toteutetaan inputista saadun nimen (newName) lisääminen kontaktilistaan (persons)
			let addPerson = Object.assign({}, this.state.persons[this.state.persons.length - 1])
			addPerson.name = this.state.newName
			addPerson.id++
			addPerson.number = this.state.newNumber
			console.log("adding Person:",addPerson.name,"with number:",addPerson.number)
			const modifiedPersons = this.state.persons.concat(addPerson)

			this.setState({
				persons: modifiedPersons,
				newName: '',
				newNumber: ''
			})
		}
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
							onChange={this.nameChangeCtrl}
						/>
					</div>
					<div>
						number: <input
							value={this.state.newNumber}
							onChange={this.numChangeCtrl}
						/>
					</div>
					<div>
						<button type="submit">add</button>
					</div>
				</form>
				<h2>Numbers</h2>
				<table>
					<tbody>
						{this.state.persons.map(person => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td></tr>)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default App
