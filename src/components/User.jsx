import React from "react";

function User({ name, percentage , position , height, imgSrc}) {
	return (
		<div className="user-bar">
			<img src={imgSrc} alt={name} className="user-image" />
			<div className="user-name">{name}</div>
			<div className="user-percentage">{percentage}</div>
			<div className="user" style={{height: height}}>
				<div className="user-profile">
          <div className="user-details">#{ position}</div>
				</div>
			</div>
		</div>
	);
}

export default User;
