import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 h-25 ">
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200&set=set3`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>	
			</div>
		</div>
	);
}

export default Card;