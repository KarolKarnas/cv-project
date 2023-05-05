import React from 'react';

const FormPersonal = (props) => {
	return (
		<section>
			<h4>Personal Info</h4>
			<input
				type='text'
				name='firstName'
				id='firstName'
				placeholder='First Name'
				onChange={props.handleChangeFirstName}
				defaultValue={props.firstName}
			/>

			<input
				type='text'
				name='lastName'
				id='lastName'
				placeholder='Last Name'
				onChange={props.handleChangeLastName}
			/>

			<input
				type='text'
				name='title'
				id='title'
				placeholder='Title'
				onChange={props.handleChangeTitle}
			/>
			<input type='text' name='address' id='address' placeholder='Address' />
			<input
				type='text'
				name='phoneNumber'
				id='phoneNumber'
				placeholder='Phone Number'
			/>

			<input type='text' name='email' id='email' placeholder='E-mail' />
		</section>
	);
};

export default FormPersonal;
