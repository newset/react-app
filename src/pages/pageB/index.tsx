import React from 'react';

const PageB = (props: any) => {
    return (
        <div>
            PageB
            <button
                onClick={() => {
                    props.history.push('/a');
                }}
            >
                go to pageA
            </button>
        </div>
    );
};

export default PageB;
