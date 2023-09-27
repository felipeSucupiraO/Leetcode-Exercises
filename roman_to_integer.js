function romanToInteger(romanNum) {
    let sum = 0;
    let lastValue;

    for (let n of romanNum) {
        switch (n) {
            case "I":
                sum += 1;
                break;
            case "V":
                if (lastValue == "I")
                    sum += 3;
                else
                    sum += 5;
                break;
            case "X":
                if (lastValue == "I")
                    sum += 8;
                else
                    sum += 10;
                break;
            case "L":
                if (lastValue == "X")
                    sum += 30;
                else
                    sum += 50;
                break;
            case "C":
                if (lastValue == "X")
                    sum += 80;
                else
                    sum += 100;
                break;
            case "D":
                if (lastValue == "C")
                    sum += 300;
                else
                    sum += 500;
                break;
            case "M":
                if (lastValue == "C")
                    sum += 800;
                else
                    sum += 1000;
                break;
            }

        lastValue = n;
    }

    return sum;
}