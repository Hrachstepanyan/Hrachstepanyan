const displayValueElement = document.querySelector('.display-container');
const additionElement = document.querySelector('.addition')
const subtractionElement = document.querySelector('.subtraction')
const divisionElement = document.querySelector('.division')
const multiplicationElement = document.querySelector('.multiplication')
const equalityElement = document.querySelector('.equal')

const digitZeroElement = document.querySelector('.zero')
const digitOneElement = document.querySelector('.one')
const digitTwoElement = document.querySelector('.two')
const digitThreeElement = document.querySelector('.three')
const digitFourElement = document.querySelector('.four')
const digitFiveElement = document.querySelector('.five')
const digitSixElement = document.querySelector('.six')
const digitSevenElement = document.querySelector('.seven')
const digitEightElement = document.querySelector('.eight')
const digitNineElement = document.querySelector('.nine')

const decimalElement = document.querySelector('.decimal')
const percentElement = document.querySelector('.percent')
const acElement = document.querySelector('.clear-all')
const pmElement = document.querySelector('.plus-minus')

let savedValueAsString = null;
let savedOperation = null;

digitElementsArray = [digitZeroElement, digitOneElement, digitTwoElement, digitThreeElement, digitFourElement,
    digitFiveElement, digitSixElement, digitSevenElement, digitEightElement, digitNineElement
];

const getValueAsString = () => displayValueElement.textContent.split(',').join('');

const getValueAsNumber = () => {

    return parseFloat(getValueAsString());
}

const setStringAsValue = (valueAsString) => {


    if (valueAsString[valueAsString.length - 1] === '.') {

        displayValueElement.textContent += '.';
        return;
    }

    const [wholePartOfDigit, decimalPartOfDigit] = valueAsString.split('.');

    if (decimalPartOfDigit) {

        displayValueElement.textContent =
            parseFloat(wholePartOfDigit).toString() + '.' + decimalPartOfDigit;
    } else {

        displayValueElement.textContent = parseFloat(wholePartOfDigit).toLocaleString()
    }
}

const digitClick = (clickedDigit) => {
    const currentValueAsString = getValueAsString();

    if (currentValueAsString === "0") {
        setStringAsValue(clickedDigit);
    } else {

        setStringAsValue(currentValueAsString + clickedDigit);
    }
};

const getResultOfOperation = () => {

    let newValue;
    const currentValue = getValueAsNumber();
    const savedValue = parseFloat(savedValueAsString);


    if (savedOperation === 'addition') {

        newValue = savedValue + currentValue;

    } else if (savedOperation == 'subtraction') {

        newValue = savedValue - currentValue;

    } else if (savedOperation == 'division') {

        newValue = savedValue / currentValue;

    } else if (savedOperation == 'multiplication') {

        newValue = savedValue * currentValue;
    }

    return newValue.toString();
}

const operatorClick = (operation) => {

    const currentValueAsString = getValueAsString();

    if (!savedValueAsString) {

        savedValueAsString = currentValueAsString;
        savedOperation = operation;
        setStringAsValue('0');
        return;
    }

    savedValueAsString = getResultOfOperation();
    savedOperation = operation;
    setStringAsValue('0');
}

for (let i = 0; i < digitElementsArray.length; ++i) {

    digitElementsArray[i].addEventListener('click', () => {

        digitClick(i.toString());
    })
}

decimalElement.addEventListener('click', () => {

    const currentValueAsString = getValueAsString();
    if (!currentValueAsString.includes('.')) {

        setStringAsValue(currentValueAsString + '.');
    }
})

acElement.addEventListener('click', () => {

    setStringAsValue('0');
    savedValueAsString = null;
    savedOperation = null;
})

percentElement.addEventListener('click', () => {

    const currentValue = getValueAsNumber();
    const newValue = currentValue / 100;
    setStringAsValue(newValue.toString());

    savedValueAsString = null;
    savedOperation = null;

})

pmElement.addEventListener('click', () => {

    const currentValue = getValueAsNumber();
    const currentValueAsString = getValueAsString();

    if (currentValueAsString === '-0' || currentValueAsString === '0') {

        setStringAsValue('0');
        return;
    }

    if (currentValue > 0) {

        setStringAsValue('-' + currentValueAsString);
    } else {

        setStringAsValue(currentValueAsString.substring(1))
    }
})

additionElement.addEventListener('click', () => {
    operatorClick('addition');
});

subtractionElement.addEventListener('click', () => {
    operatorClick('subtraction');
});

divisionElement.addEventListener('click', () => {
    operatorClick('division');
});

multiplicationElement.addEventListener('click', () => {
    operatorClick('multiplication');
});

equalityElement.addEventListener('click', () => {

    if (savedValueAsString) {
        setStringAsValue(getResultOfOperation());
        savedValueAsString = null;
        savedOperation = null;
    }
})