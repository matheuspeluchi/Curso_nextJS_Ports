import Link from "next/link";

import Card from "../components/Card";
import styles from "../../styles/forms.module.css";
import InputNumber from "../components/InputNumber";
import {useState} from "react";

export default function Form() {
	const [qtPorts, setQtPorts] = useState(3);
	const [portWithGift, setPortWithGift] = useState(1);

	return (
		<div className={styles.form}>
			<div>
				<Card bgColor="#c0392c">
					<h1>Monty Hall</h1>
				</Card>
				<Card>
					<InputNumber
						text="Ports"
						value={qtPorts}
						onChange={(newQt) => setQtPorts(newQt)}
					/>
				</Card>
			</div>
			<div>
				<Card>
					<InputNumber
						text="Gift"
						value={portWithGift}
						onChange={(newPortNumber) => setPortWithGift(newPortNumber)}
					/>
				</Card>
				<Card bgColor="#28a085">
					<Link href={`/game/${qtPorts}/${portWithGift}`} passHref>
						<h2 className={styles.link}>Start</h2>
					</Link>
				</Card>
			</div>
		</div>
	);
}
