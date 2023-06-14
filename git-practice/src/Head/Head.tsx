import React from 'react';
type HeadPropsType = {
    name: string
    age: number
    adult: boolean
}

function Head(props: HeadPropsType) {
    return (
        <div>
            <p>
                {props.name}
                kolem
                rast
                freedom
            </p>
        </div>
    );
}

export default Head;
