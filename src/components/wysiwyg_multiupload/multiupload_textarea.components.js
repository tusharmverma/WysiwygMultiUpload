import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const UploadedItem = ({id, filename, onClick}) => {
	return (
		<UploadedItemWrapper>
			<ItemTitle>{filename}</ItemTitle>
			<DeleteIconWrapper><DeleteForeverIcon id={id} onClick={onClick} color="secondary"/></DeleteIconWrapper>
			
		</UploadedItemWrapper>
		)
}
const MultiUploadTextArea = () => {
	const [files, setFiles] = React.useState();
	const [bgcolor, setBgcolor] = React.useState("white");
	const [dropStatus, setDropStatus] = React.useState(false);
	const handleDragOver = e => {
		e.preventDefault();
    	e.stopPropagation();

    	setBgcolor("lightgray");
	}
	const handleDragEnter = e => {
		e.preventDefault();
    	e.stopPropagation();

    	setBgcolor("lightgray");
	}
	const handleDragLeave = e => {
		e.preventDefault();
    	e.stopPropagation();

    	setBgcolor("white");
	}
	const validateImage = image => {
		// check the type
		var validTypes = ['image/jpeg', 'image/png', 'image/gif'];
		    if (validTypes.indexOf( image.type ) === -1) {
		        alert("Invalid File Type");
		        return false;
		    }
		    return true;
	}
	// let filesSet = new Set();
	let filesArr = []
	const handleFiles = files => {
		for (var i = 0, len = files.length; i < len; i++) {
		        if (validateImage(files[i])) {
		        	filesArr.push(files[i]);
		        	setFiles(filesArr)
		        }
		    }
	}

	const handleDrop = e => {
		e.preventDefault();
    	e.stopPropagation();
    	setDropStatus(true);
    	setBgcolor("white");
    	const dt = e.dataTransfer,
		      files = dt.files;
		if (files.length) {
		    handleFiles(files);
		}     
	}

	const deleteItem = e => {
		const del_num = e.target.id;
		filesArr = files
		filesArr.splice(del_num, 1);
		setFiles(filesArr);
	}
	return (
		<>

		<DNDTextArea>
			<InputText placeholder="Template Documentation" />
			{
				!dropStatus && (
					<DropArea
						onDrop={handleDrop}
					    onDragOver={handleDragOver}
					    onDragEnter={handleDragEnter}
					    onDragLeave={handleDragLeave}
					    bgcolor={bgcolor}
					>
						
						<DropAreaText>Drop Files Here</DropAreaText>
					</DropArea>
					)
			}
			{
				dropStatus && (
								<TextArea>
								{
									files && files.length > 0 && files.map((file, index)=>{
										return (
											<UploadedItem key={index} id={index} filename={file.name} onClick={deleteItem}></UploadedItem>
										)
									}) 
								}
								</TextArea>
								)
			}
			

		</DNDTextArea>
		</>
		)
}
const DNDTextArea = styled.div`

`
const DropArea = styled.div`
	border: 1px solid lightblue;
	border-radius: 1px;
	height: 200px;
	text-align: center;
	font-size: 24px;
	margin-bottom: 1rem;
	background-color: ${props => props.bgcolor};
	transition: all .3s;
	display: flex;
    justify-content: center;
    align-items: center;
`
const DropAreaText = styled.span`
`
const TextArea = styled.div`
	width: 100%;
	margin: 0 auto;
	border: 1px solid lightblue;
	border-radius: 1px;
	height: 200px;
	overflow-y: scroll;
	margin-bottom: 1rem;
`
const UploadedItemWrapper = styled.div`
	font: 16px Arial, Helvetica, sans-serif;
	color: gray;
	height: 36px;
	width: 95%;
	margin: 10px auto 20px auto;
	border: 1px solid gray;
	border-radius: 5px;
	display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
// const PreviewImage = styled.img`
// 	width: 2em;
//     height: 2em;
// `
const ItemTitle = styled.label`
	
`

const DeleteIconWrapper = styled.span`
	position: absolute;
	right: 0;
`
const InputText = styled.input.attrs({
    type: 'text',
})`
  font: 16px Arial, Helvetica, sans-serif;
  outline: none;
  border: none;
  height: 36px;
  width: 100%;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
`
export default MultiUploadTextArea;