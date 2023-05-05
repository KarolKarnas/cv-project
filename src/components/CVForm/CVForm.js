import React from 'react';
import FormPersonal from './FormPersonal';
import FormExperience from './FormExperience';

const CVForm = (props) => {
	// console.log(props)

    const {experience} = props
    // console.log(experience);

	return (
		<div className='cv-form'>
			<h3>CV Form</h3>
			<FormPersonal
				handleChangeFirstName={props.handleChangeFirstName}
				handleChangeLastName={props.handleChangeLastName}
                handleChangeTitle={props.handleChangeTitle}
                firstName={props.firstName}
			/>

            {experience.map((exp) => {
                return <FormExperience key={exp.id} id={exp.id} handleExperienceDelete={props.handleExperienceDelete}/>
            })}
            {/* <FormExperience handleExperienceDelete={props.handleExperienceDelete}/> */}
            <button onClick={props.handleExperienceAdd}>Add Experience</button>
		</div>
	);
};

export default CVForm;
