import styles from "./styles.module.css";

type InputNumberProps = {
	text: string;
	value: number;
	onChange: (newValue: number) => void;
};

const InputNumber: React.FC<InputNumberProps> = (props) => {
	const inc = () => props.onChange(props.value + 1);
	const dec = () => props.onChange(props.value - 1);

	return (
		<div className={styles.inputNumber}>
			<span className={styles.text}>{props.text}</span>
			<span className={styles.value}>{props.value}</span>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={dec}>
					-
				</button>
				<button className={styles.button} onClick={inc}>
					+
				</button>
			</div>
		</div>
	);
};

export default InputNumber;
