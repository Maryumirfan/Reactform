import React from 'react';

function Left({names}) {
    return (
        <div>
            <h1>University Name List</h1>
            <ol>
                {names.map((e, i)=>(
                    <li key={i}>{e}</li>
                ))}
            </ol>
        </div>
    );
}

export default Left;