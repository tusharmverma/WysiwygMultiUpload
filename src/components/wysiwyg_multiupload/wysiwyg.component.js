import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Wysiwyg = () => {

    const editorStyle = {
	    border: '1px solid lightgray',
	    padding: '3px',
	    borderRadius: '2px',
	    height: '200px',
	    width: '100%',
	};

    return (
    	<Editor
  		    editorStyle={editorStyle}
  		    placeholder="Patient Review"
  		/>
    	)
}

export default Wysiwyg;