const calculateBMI = (weight, height) => weight / Math.pow(height, 2);


const getBMI = (weight, height) => {
    const bodyMassIndex = calculateBMI(weight, height);
    let weight;
    switch (bodyMassIndex) {
        case bodyMassIndex > 25.0:
            weight = `overweight`
            break;
        case bodyMassIndex >= 18.0 && bodyMassIndex < 24.9:
            weight = `normal`
            break;

        default:
            weight = `underweight`
            break;
    }

    return weight;
};

module.exports = { getBMI }