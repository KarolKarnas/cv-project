import React, { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/Footer';

class App extends Component {
	state = { personal: { firstName: '', lastName: '' } };

	handleChangeFirstName = (e) => {
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				firstName: e.target.value,
			},
		}));
	};

	handleChangeLastName = (e) => {
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				lastName: e.target.value,
			},
		}));
	};

	render() {
		const { firstName, lastName } = this.state.personal;
		return (
			<div className='main-container'>
				<Header />

				<div className='cvs'>
					<CVForm
						handleChangeFirstName={this.handleChangeFirstName}
						handleChangeLastName={this.handleChangeLastName}
					/>

					<CVPreview firstName={firstName} lastName={lastName} />
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
