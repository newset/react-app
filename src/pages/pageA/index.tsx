import React from 'react';

const PageA = (props: any) => {
    return (
        <div>
            PageA
            <button
                onClick={() => {
                    props.history.push('/b');
                }}
            >
                go to pageB
            </button>
        </div>
    );
};

export default PageA;
