import React from "react";

import styles from "./styles.module.css";

type Props = {
	bgColor?: string;
};

const Card: React.FC<Props> = (props) => {
	return (
		<div
			className={styles.card}
			style={{backgroundColor: props.bgColor ?? "#fff"}}
		>
			{props.children}
		</div>
	);
};
export default Card;
