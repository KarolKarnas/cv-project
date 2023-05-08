import React from 'react';
import FormPersonal from './FormPersonal';
import FormExperience from './FormExperience';

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
                return <FormExperience key={exp.id} id={exp.id} handleExperienceDelete={props.handleExperienceDelete} handleChangePosition={props.handleChangePosition}/>
            })}
            {/* <FormExperience handleExperienceDelete={props.handleExperienceDelete}/> */}
            <button onClick={props.handleExperienceAdd}>Add Experience</button>
		</div>
	);
};

export default CVForm;
