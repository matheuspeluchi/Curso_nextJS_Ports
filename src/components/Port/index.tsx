import styles from "./styles.module.css";
import PortModel from "../../models/Port";
import Gift from "../Gift";
interface PortaProps {
	value: PortModel;
	onChange: (newPort: PortModel) => void;
}

export default function Port(props: PortaProps) {
	const port = props.value;
	const selected = port.selected && !port.opened ? styles.selected : "";
	const alterSelection = () => props.onChange(port.alterSelection());
	const open = (e) => {
		e.stopPropagation();
		props.onChange(port.open());
	};

	const renderPort = () => {
		return (
			<div className={styles.port}>
				<div className={styles.number}>{port.number}</div>
				<div className={styles.handle} onClick={open} />
			</div>
		);
	};
	const renderGift = () => (port.haveGift ? <Gift /> : false);
	return (
		<div className={styles.area} onClick={alterSelection}>
			<div className={`${styles.structure} ${selected}`}>
				{port.closed ? renderPort() : renderGift()}
			</div>

			<div className={styles.floor}></div>
		</div>
	);
}
