import React from 'react';
import { Link } from 'react-router-dom';
import sudokuImage from '../../../assets/images/su_doku.jpg';
import outlineImage from '../../../assets/images/ng4Outline.png';

const ClickBoxComponent = props => (
	<Link to={props.target}>
		<div className="clickBox">
			{props.imageName === "sudoku" ?
				<div style={{backgroundImage: `url(${sudokuImage})`}} className="pictureBox" /> : null}
			{props.imageName === "outlines" ?
				<div style={{backgroundImage: `url(${outlineImage})`}} className="pictureBox" /> : null}
			<div className="text">
				{props.title}
			</div>
		</div>
	</Link>
);

export default ClickBoxComponent;
