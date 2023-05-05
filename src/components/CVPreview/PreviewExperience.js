import React from 'react';

const PreviewExperience = (props) => {
    console.log(props);
    return (
        <section>
<p>{props.position} - {props.company}</p>
<p>In the city of {props.city}</p>
<p>{props.from} - {props.to}</p>
        </section>
    )
}

export default PreviewExperience