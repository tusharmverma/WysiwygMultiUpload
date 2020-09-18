import React from 'react';
import styled from 'styled-components';
import Wysiwyg from './wysiwyg.component';
import Multiupload from './multiupload.component';

const WysiwygMultiupload = () => {

	return (
		<WysiwygMultiuploadContainer>
		<Multiupload />
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