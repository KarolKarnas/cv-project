import React from 'react';

const PreviewPersonal = (props) => {
    return (
        <section>
<p>{props.firstName} {props.lastName}</p>
<p>{props.title}</p>

        </section>
    )
}

export default PreviewPersonal