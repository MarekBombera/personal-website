export const Field = ({ img, text, className }: any) => {
	return (
		<div className={`skills-field skills-field-${className}`}>
			<img style={{}} src={img} alt=""></img>
			<p className="body">{text}</p>
		</div>
	);
};
