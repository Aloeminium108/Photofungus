import { ActivationFunction } from "./ActivationFunction";

class Neuron {

    private ingoingConnections: Set<Neuron> = new Set();
    private outgoingConnections: Map<Neuron, number> = new Map();

    private internalState: number = 0;

    private receivedInputs: number = 0;

    constructor(private activationFunction: ActivationFunction) {
        
    }

    private sendInput = (input: number) => {
        this.internalState += input;
        this.receivedInputs++;
        if (this.receivedInputs == this.ingoingConnections.size) {
            this.sendOutput();
        }
    }

    private sendOutput = () => {
        const output = this.activationFunction(this.internalState);
        this.outgoingConnections.forEach((weight, neuron) => {
            neuron.sendInput(output * weight);
        })
    }

}


export default Neuron