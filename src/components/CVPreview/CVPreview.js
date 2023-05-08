import React from 'react';
import PreviewPersonal from './PreviewPersonal.js'
import PreviewExperience from './PreviewExperience';

const CVPreview = (props) => {
    return (
        <div className="cv-preview">
            <h3>CV Preview</h3>
            <PreviewPersonal firstName={props.firstName} lastName={props.lastName} title={props.title} address={props.address} phoneNumber={props.phoneNumber} email={props.email} aboutMe={props.aboutMe}/>

            <h3>Work Experience</h3>
            {props.experience.map((exp) => {
                return <PreviewExperience key={exp.id} id={exp.id} position={exp.position} company={exp.company} city={exp.city} from={exp.from} to={exp.to}/>
            })}
            {/* <PreviewExperience experience={props.experience}/> */}
        </div>
    )
}


export default CVPreview