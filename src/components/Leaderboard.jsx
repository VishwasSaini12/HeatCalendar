import React from "react";
import "./Leaderboard.css";
import User from "./User";
import esther from "./../images/esther.png";
import jane from "./../images/jane.png";
import kathryn from "./../images/kathryn.png";

const users = [
	{
		id: 2,
		name: "Esther Howard",
		percentage: "96%",
		position: "2",
		height: "150px",
		imgSrc: esther,
	},
	{
		id: 1,
		name: "Jane Cooper",
		percentage: "97%",
		position: "1",
		height: "350px",

		imgSrc: jane,
	},
	{
		id: 3,
		name: "Kathryn Murphy",
		percentage: "92%",
		position: "3",
		height: "80px",
		imgSrc: kathryn,
	},
];

function Leaderboard({ height, width }) {
	return (
		<div className="leaderboard" style={{ width: width, height: height }}>
			{users.map((user) => (
				<User
					key={user.id}
					name={user.name}
					imgSrc={user.imgSrc}
					percentage={user.percentage}
					position={user.position}
					height={user.height}
				/>
			))}
		</div>
	);
}

export default Leaderboard;
