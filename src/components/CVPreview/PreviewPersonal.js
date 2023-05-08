const PreviewPersonal = (props) => {
    return (
        <section>
<p>Full Name: {props.firstName} {props.lastName}</p>
<p>Title: {props.title}</p>
<p>Address: {props.address}</p>
<p>Phone Number: {props.phoneNumber}</p>
<p>E-mail: {props.email}</p>
<p>About Me: {props.aboutMe}</p>


        </section>
    )
}

export default PreviewPersonal