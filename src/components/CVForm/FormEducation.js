import React from 'react';

const FormEducation = (props) => {
	return <section className='education'>


<h4>Education</h4>
			<input type='text' name='universityName' id='universityName' placeholder='University Name' onChange={(e) => props.handleChangeEducation(e, props.id)}/>

			<input type='text' name='city' id='city' placeholder='City' onChange={(e) => props.handleChangeEducation(e, props.id)}/>

			<input type='text' name='degree' id='degree' placeholder='Degree' onChange={(e) => props.handleChangeEducation(e, props.id)}/>
            <input type='text' name='subject' id='subject' placeholder='Subject' onChange={(e) => props.handleChangeEducation(e, props.id)}/>

			<input type='text' name='from' id='from' placeholder='From' onChange={(e) => props.handleChangeEducation(e, props.id)}/>
			<input type='text' name='to' id='to' placeholder='To' onChange={(e) => props.handleChangeEducation(e, props.id)}/>
            <button onClick={() => props.handleEducationDelete(props.id)}>Delete Education</button>
    </section>;
};

export default FormEducation;
