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
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
        </div>
    );
}

export default Head;
