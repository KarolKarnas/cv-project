import FormPersonal from './FormPersonal';
import FormExperience from './FormExperience';
import FormEducation from './FormEducation';

const CVForm = (props) => {
	// console.log(props)

	// const {experience} = props
	// console.log(experience);

	return (
		<div className='cv-form'>
			<h3>CV Form</h3>
			<FormPersonal
				handleChangePersonal={props.handleChangePersonal}
				firstName={props.firstName}
			/>

			{props.experience.map((exp) => {
				return (
					<FormExperience
						key={exp.id}
						id={exp.id}
						handleExperienceDelete={props.handleExperienceDelete}
						handleChangeExperience={props.handleChangeExperience}
					/>
				);
			})}
			<button onClick={props.handleExperienceAdd}>Add Experience</button>

			{props.education.map((edu) => {
				return (
					<FormEducation
						key={edu.id}
						id={edu.id}
						handleEducationDelete={props.handleEducationDelete}
						handleChangeEducation={props.handleChangeEducation}
					/>
				);
			})}
			<button onClick={props.handleEducationAdd}>Add Education</button>

			{/* <FormExperience handleExperienceDelete={props.handleExperienceDelete}/> */}
		</div>
	);
};

export default CVForm;
