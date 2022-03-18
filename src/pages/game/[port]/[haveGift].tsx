import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Port from "../../../components/Port";
import {createPorts, updatePort} from "../../../functions/portsFuncions";
import styles from "./styles.module.css";

export default function Game() {
	const router = useRouter();
	const [isValid, setIsValid] = useState<boolean>(false);
	const [ports, setPorts] = useState([]);

	useEffect(() => {
		const pts = +router.query.port;
		const haveGift = +router.query.haveGift;
		const qtValidPorts = pts >= 3 && pts <= 100;
		const haveValidGift = haveGift >= 1 && haveGift <= pts;
		setIsValid(qtValidPorts && haveValidGift);
	}, [router?.query]);

	useEffect(() => {
		const {port, haveGift} = router.query;
		setPorts(createPorts(Number(port), Number(haveGift)));
	}, [router?.query]);

	const renderPorts = () => {
		return ports.map((p) => {
			return (
				<Port
					key={p.number}
					value={p}
					onChange={(newPort) => setPorts(updatePort(ports, newPort))}
				/>
			);
		});
	};
	return (
		<div className={styles.game}>
			<div className={styles.ports}>
				{isValid ? renderPorts() : <h2>Valores inválidos</h2>}
			</div>
			<div className={styles.buttons}>
				<Link href="/" passHref>
					<button className={styles.buttons}>Reiniciar</button>
				</Link>
			</div>
		</div>
	);
}
