import React from 'react';


const TestComp = (props) => {
	console.log(props);
	return (
		<div>
			<p>TEST{props.testData}</p>
		</div>
		);
}

export default TestComp;