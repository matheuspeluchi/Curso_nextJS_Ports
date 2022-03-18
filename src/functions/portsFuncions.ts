import PortModel from "../models/Port";

export function createPorts(qt: number, portWithGift: number): PortModel[] {
	return Array.from({ length: qt }, (_, i) => {
		const number = i + 1
		const haveGift = number === portWithGift
		return new PortModel(number, haveGift)
	})
}

export function updatePort(ports: PortModel[], modifiedPort: PortModel): PortModel[] {
	return ports.map(port => {
		const isEqual = port.number === modifiedPort.number;
		if (isEqual) {
			return modifiedPort
		} else {
			return modifiedPort.opened ? port : port.uncheck()
		}
	})
}