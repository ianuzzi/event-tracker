const locationInfoBox = ({ info, onClickClose }) => {
	return (
		<div className="location-info">
			<button className="close" onClick={onClickClose}>
				X
			</button>
			<h2>Event Location Info</h2>
			<ul>
				<li>
					ID: <strong>{info.id}</strong>
				</li>
				<li>
					Iitle: <strong>{info.title}</strong>
				</li>
			</ul>
		</div>
	);
};

export default locationInfoBox;
