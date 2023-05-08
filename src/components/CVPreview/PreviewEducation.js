const PreviewEducation = (props) => {
return (
    <section>
<p>University: {props.universityName} od {props.city}</p>
<p>Degree: {props.degree}</p>
<p>Subject: {props.subject}</p>
<p>Date: {props.from} - {props.to}</p>
    </section>
)
}
 
export default PreviewEducation;



