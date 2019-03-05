import React from 'react';
// import * as quoteActions from '../actions/quote';
// import Quote from './Quote';

const Editor = function(props) {

    return (
        <div>
            <textarea id="editor" value={props.input} onChange={props.handleChange} />
        </div>
    );
};

export default Editor;