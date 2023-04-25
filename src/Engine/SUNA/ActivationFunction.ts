
class ActivationFunctions {

    static identity: ActivationFunction = (input: number) => input;

    static threshold: ActivationFunction = (input: number) => {
        return input < 0 ? 0 : 1
    }

    static sigmoid: ActivationFunction = (input: number) => {
        return (1 / (1 + Math.E ** -input))
    }

    static ReLU: ActivationFunction = (input: number) => {
        return input < 0 ? 0 : input
    }

}

type ActivationFunction = (input: number) => number;

export type { ActivationFunction }
export default ActivationFunctions