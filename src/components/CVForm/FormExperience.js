import React from 'react';

const FormExperience = (props) => {
	return (
		<section>
			<h4>Experience</h4>
			<input type='text' name='position' id='position' placeholder='Position' onChange={(e) => props.handleChangeExperience(e, props.id)}/>

			<input type='text' name='company' id='company' placeholder='Company' onChange={(e) => props.handleChangeExperience(e, props.id)}/>

			<input type='text' name='city' id='city' placeholder='City' onChange={(e) => props.handleChangeExperience(e, props.id)}/>
			<input type='text' name='from' id='from' placeholder='From' onChange={(e) => props.handleChangeExperience(e, props.id)}/>
			<input type='text' name='to' id='to' placeholder='To' onChange={(e) => props.handleChangeExperience(e, props.id)}/>
            <button onClick={() => props.handleExperienceDelete(props.id)}>Delete</button>
		</section>
	);
};

export default FormExperience;
