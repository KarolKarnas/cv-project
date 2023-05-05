import React from 'react';
import PreviewPersonal from './PreviewPersonal.js'

const CVPreview = (props) => {
    return (
        <div className="cv-preview">
            <h3>CV Preview</h3>
            <PreviewPersonal firstName={props.firstName} lastName={props.lastName} />
            
        </div>
    )
}


export default CVPreview