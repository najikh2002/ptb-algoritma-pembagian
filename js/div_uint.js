function divideUnsignedIntegers() {
    const numerator = parseInt(document.getElementById("numerator").value);
    const denominator = parseInt(
      document.getElementById("denominator").value
    );

    let quotient = 0;
    let remainder = numerator;
    let processSteps = `<h3>Steps for dividing ${numerator} by ${denominator}:</h3>`;

    while (remainder >= denominator) {
      quotient++;
      remainder -= denominator;
      processSteps += `<p>Step: Quotient = ${quotient}, Remainder = ${remainder}</p>`;
    }

    processSteps += `<h4>Result: Quotient = ${quotient}, Remainder = ${remainder}</h4>`;
    document.getElementById("unsigned-output").innerHTML = processSteps;
  }