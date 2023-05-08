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
				onChange={props.handleChangePersonal}
				defaultValue={props.firstName}
			/>

			<input
				type='text'
				name='lastName'
				id='lastName'
				placeholder='Last Name'
				onChange={props.handleChangePersonal}
			/>

			<input
				type='text'
				name='title'
				id='title'
				placeholder='Title'
				onChange={props.handleChangePersonal}
			/>
			<input
				type='text'
				name='address'
				id='address'
				placeholder='Address'
				onChange={props.handleChangePersonal}
			/>
			<input
				type='text'
				name='phoneNumber'
				id='phoneNumber'
				placeholder='Phone Number'
				onChange={props.handleChangePersonal}
			/>

			<input
				type='text'
				name='email'
				id='email'
				placeholder='E-mail'
				onChange={props.handleChangePersonal}
			/>

			<textarea name="aboutMe" id="aboutMe" cols="30" rows="10" onChange={props.handleChangePersonal}></textarea>
		</section>
	);
};

export default FormPersonal;
