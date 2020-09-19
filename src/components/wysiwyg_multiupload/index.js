import React from 'react';
import styled from 'styled-components';
import Wysiwyg from './wysiwyg.component';
import MultiUploadTextArea from './multiupload_textarea.components'

const WysiwygMultiupload = () => {

	return (
		<WysiwygMultiuploadContainer>
		<MultiUploadTextArea />
		<Wysiwyg />
		</WysiwygMultiuploadContainer>
		)
}

export const WysiwygMultiuploadContainer = styled.div`
	width: 600px;
	margin: 3rem auto;
	border-right: 5px solid gray;
	border-bottom: 5px solid gray;
	padding: 3px;
`
export default WysiwygMultiupload;