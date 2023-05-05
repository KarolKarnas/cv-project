import React from 'react';

const FormPersonal = (props) => {
    return (
        <section>

<h4>Personal Info</h4>
<input type="text" name="firstName" id="firstName" placeholder='First Name' onChange={props.handleChangeFirstName}/>

<input type="text" name="lastName" id="lastName" placeholder='Last Name' onChange={props.handleChangeLastName}/>

<input type="text" name="title" id="title" placeholder='Title'/>
<input type="text" name="address" id="address" placeholder='Address'/>
<input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>

<input type="text" name="email" id="email" placeholder='E-mail'/>



        </section>
    )
}

export default FormPersonal