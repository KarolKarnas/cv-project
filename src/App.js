import React, { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	state = {
		personal: { firstName: 'Karol', lastName: 'Karnas', title: 'Magister' },
		experience: [
			{ id: uuidv4(), position: '', company: '', city: '', from: '', to: '' },
		],
	};

	// personal

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
	handleChangeTitle = (e) => {
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				title: e.target.value,
			},
		}));
	};

	// buttons

	handleExperienceDelete = (id) => {
		this.setState((prevState) => ({
			experience: prevState.experience.filter((exp) => exp.id !== id),
		}));
	};

	handleExperienceAdd = () => {
		this.setState((prevState) => ({
			experience: [
				...prevState.experience,
				{ id: uuidv4(), position: '', company: '', city: '', from: '', to: '' },
			],
		}));
	};

	// Experience

	handleChangePosition = (e, id) => {
		console.log(e.target);
		this.setState(prevState => ({
		  experience: prevState.experience.map(exp => exp.id === id ? { ...exp, position: e.target.value } : exp)
		}));
	  };

	// handleChangePosition = (e, id) => {
	// 	this.setState((prevState) => ({
	// 		experience: prevState.experience.map((exp) => {
	// 			if (exp.id === id) {
	// 				return {
	// 					...exp,
	// 					position: e.target.value,
	// 				};
	// 			} else {
	// 				return exp;
	// 			}
	// 		}),
	// 	}));
	// };

	// handleChangePosition = (e, id) => {
	// 	const index = this.state.experience.findIndex(exp => exp.id === id);
	// 	const updatedExperience = [...this.state.experience];
	// 	updatedExperience[index] = { ...updatedExperience[index], position: e.target.value };
	// 	this.setState({ experience: updatedExperience });
	//   };


	
	render() {
		const { firstName, lastName, title } = this.state.personal;

		return (
			<div className='main-container'>
				<Header />

				<div className='cvs'>
					<CVForm
						handleChangeFirstName={this.handleChangeFirstName}
						handleChangeLastName={this.handleChangeLastName}
						handleChangeTitle={this.handleChangeTitle}
						firstName={firstName}
						handleExperienceDelete={this.handleExperienceDelete}
						experience={this.state.experience}
						handleExperienceAdd={this.handleExperienceAdd}
						handleChangePosition={this.handleChangePosition}
					/>

					<CVPreview
						firstName={firstName}
						lastName={lastName}
						title={title}
						experience={this.state.experience}
					/>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
