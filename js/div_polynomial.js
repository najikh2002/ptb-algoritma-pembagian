function dividePolynomials() {
    let dividendCoeffs = document
      .getElementById("dividend-poly")
      .value.split(",")
      .map(Number);
    let divisorCoeffs = document
      .getElementById("divisor-poly")
      .value.split(",")
      .map(Number);

    let quotientCoeffs = [];
    let remainderCoeffs = [...dividendCoeffs]; // Copy dividend into remainder
    let processSteps = `<h3>Steps for dividing ${dividendCoeffs.join(
      ", "
    )} by ${divisorCoeffs.join(", ")}:</h3>`;

    const divisorDegree = divisorCoeffs.length - 1;

    while (remainderCoeffs.length >= divisorCoeffs.length) {
      let degreeDiff = remainderCoeffs.length - divisorCoeffs.length;
      let leadingCoeff = remainderCoeffs[0] / divisorCoeffs[0];

      let quotientTerm = new Array(degreeDiff).fill(0);
      quotientTerm.push(leadingCoeff);
      quotientCoeffs = addPolynomials(quotientCoeffs, quotientTerm);

      let subtractPoly = multiplyPolynomialByConstant(
        divisorCoeffs,
        leadingCoeff
      );
      subtractPoly = new Array(degreeDiff).fill(0).concat(subtractPoly);

      remainderCoeffs = subtractPolynomials(remainderCoeffs, subtractPoly);

      processSteps += `<p>Quotient: ${quotientCoeffs.join(
        ", "
      )}, Remainder: ${remainderCoeffs.join(", ")}</p>`;

      remainderCoeffs.shift(); // Remove leading zero term from remainder
    }

    processSteps += `<h4>Final Result: Quotient = ${quotientCoeffs.join(
      ", "
    )}, Remainder = ${remainderCoeffs.join(", ")}</h4>`;
    document.getElementById("polynomial-output").innerHTML = processSteps;
  }

  // Helper functions for polynomial division
  function addPolynomials(poly1, poly2) {
    const maxLength = Math.max(poly1.length, poly2.length);
    let result = new Array(maxLength).fill(0);

    for (let i = 0; i < maxLength; i++) {
      let val1 = poly1[poly1.length - 1 - i] || 0;
      let val2 = poly2[poly2.length - 1 - i] || 0;
      result[maxLength - 1 - i] = val1 + val2;
    }

    return result;
  }

  function subtractPolynomials(poly1, poly2) {
    const maxLength = Math.max(poly1.length, poly2.length);
    let result = new Array(maxLength).fill(0);

    for (let i = 0; i < maxLength; i++) {
      let val1 = poly1[poly1.length - 1 - i] || 0;
      let val2 = poly2[poly2.length - 1 - i] || 0;
      result[maxLength - 1 - i] = val1 - val2;
    }

    return result;
  }

  function multiplyPolynomialByConstant(poly, constant) {
    return poly.map((coef) => coef * constant);
  }