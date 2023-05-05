import React, { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/Footer';

class App extends Component {
	state = { personal: { firstName: '', lastName: '' } };

	handleChangeFirstName = (e) => {
		this.setState({
			personal: {
				firstName: e.target.value,
				lastName: this.state.personal.lastName,
			},
		});
	};

	handleChangeLastName = (e) => {
		this.setState({
			personal: {
				firstName: this.state.personal.firstName,
				lastName: e.target.value,
			},
		});
	};

	render() {
		return (
			<div className='main-container'>
				<Header />

				<div className='cvs'>
					<CVForm
						handleChangeFirstName={this.handleChangeFirstName}
						handleChangeLastName={this.handleChangeLastName}
					/>

					<CVPreview
						firstName={this.state.personal.firstName}
						lastName={this.state.personal.lastName}
					/>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
