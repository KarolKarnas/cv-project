import React from 'react';

const FormExperience = (props) => {
	return (
		<section>
			<h4>Experience</h4>
			<input type='text' name='position' id='position' placeholder='Position' onChange={(e) => props.handleChangePosition(e, props.id)}/>

			<input type='text' name='company' id='company' placeholder='Company' />

			<input type='text' name='city' id='city' placeholder='City' />
			<input type='text' name='from' id='from' placeholder='From' />
			<input type='text' name='to' id='to' placeholder='To' />
            <button onClick={() => props.handleExperienceDelete(props.id)}>Delete</button>
		</section>
	);
};

export default FormExperience;
