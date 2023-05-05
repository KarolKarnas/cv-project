import React from 'react';
import FormPersonal from './FormPersonal';

const CVForm = (props) => {
	// console.log(props)
	return (
		<div className='cv-form'>
			<h3>CV Form</h3>
			<FormPersonal handleChangeFirstName={props.handleChangeFirstName} handleChangeLastName={props.handleChangeLastName}/>
		</div>
	);
};

export default CVForm;
