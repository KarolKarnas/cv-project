import React, { Component } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
	state = {
		personal: { firstName: '', lastName: '', title: '' },
		experience: [
			{ id: uuidv4(), position: '', company: '', city: '', from: '', to: '' },
		],
		education: [
			{
				id: uuidv4(),
				universityName: 'Universitas Resovias',
				city: 'Rzeszów',
				degree: '',
				subject: '',
				from: '',
				to: '',
			},
		],
	};

	// personal

	handleChangePersonal = (e) => {
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				[e.target.name]: e.target.value,
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

	handleChangeExperience = (e, id) => {
		console.log(e.target);
		this.setState((prevState) => ({
			experience: prevState.experience.map((exp) =>
				exp.id === id ? { ...exp, [e.target.name]: e.target.value } : exp
			),
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

	// Education

	handleEducationAdd = () => {
		this.setState((prevState) => ({
			education: [
				...prevState.education,
				{
					id: uuidv4(),
					universityName: '',
					city: '',
					degree: '',
					subject: '',
					from: '',
					to: '',
				},
			],
		}));
	};

	handleEducationDelete = (id) => {
		this.setState((prevState) => ({
			education: prevState.education.filter((edu) => edu.id !== id),
		}));
	};

	handleChangeEducation = (e, id) => {
		this.setState((prevState) => ({
			education: prevState.education.map((edu) =>
				edu.id === id ? { ...edu, [e.target.name]: e.target.value } : edu
			),
		}));
	};

	render() {
		const { firstName, lastName, title, address, phoneNumber, email, aboutMe } =
			this.state.personal;

		return (
			<div className='main-container'>
				<Header />

				<div className='cvs'>
					<CVForm
						handleChangePersonal={this.handleChangePersonal}
						handleExperienceDelete={this.handleExperienceDelete}
						experience={this.state.experience}
						handleExperienceAdd={this.handleExperienceAdd}
						handleChangeExperience={this.handleChangeExperience}
						education={this.state.education}
						handleEducationAdd={this.handleEducationAdd}
						handleEducationDelete={this.handleEducationDelete}
						handleChangeEducation={this.handleChangeEducation}
					/>

					<CVPreview
						firstName={firstName}
						lastName={lastName}
						title={title}
						address={address}
						phoneNumber={phoneNumber}
						email={email}
						aboutMe={aboutMe}
						experience={this.state.experience}
						education={this.state.education}
					/>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
