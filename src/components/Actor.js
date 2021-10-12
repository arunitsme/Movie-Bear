import React from 'react';

export default (props) => (
	<div className="col-6 col-lg-4">	
		<img 
			key={props.id} 
			src={props.profile_path ? 'https://image.tmdb.org/t/p/w92' + "_" + props.profile_path : '/images/avatar.jpg'} 
			className="img-fluid rounded-circle actor_image mx-auto d-block"
			alt={props.name} 
		/>
		<p className="text-center">{props.name}</p>
	</div>
);
