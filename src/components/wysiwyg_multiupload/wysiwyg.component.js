import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './wysiwyg.css'
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
          toolbar={{
            inline: { options : ['bold', 'italic', 'underline'] },
            list: { options  : [] },
            textAlign: { options  : [] },
            link: { options  : [] },
            history: { options  : [] },
            blockType: { options  : [], className: "hidden" },
            fontSize: { options  : [], className: "hidden" },
            fontFamily: { options  : [], className: "hidden" },
            colorPicker: { colors  : [], className: "hidden" },
            emoji: { emojis  : [], className: "hidden" },
            embedded: { className: "hidden" },
            image: { className: "hidden" },
            remove: { className: "hidden" },
          }}
  		    placeholder="Patient Review"
  		/> 
    	)
}

export default Wysiwyg;