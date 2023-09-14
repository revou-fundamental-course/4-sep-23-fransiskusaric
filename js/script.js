document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const form = document.getElementById("form");

        const shape = document.getElementById("shape");
        const square = document.getElementById("square");
        const rectangle = document.getElementById("rectangle");
        const triangle = document.getElementById("triangle");
        const circle = document.getElementById("circle");

        const squareSide = document.getElementById("squareSide");
        const rectLength = document.getElementById("rectLength");
        const rectWidth = document.getElementById("rectWidth");
        const triangleBase = document.getElementById("triangleBase");
        const triangleHeight = document.getElementById("triangleHeight");
        const circleRad = document.getElementById("circleRad");

        const result = document.getElementById("result");
        const area = document.getElementById("area");
        const perimeter = document.getElementById("perimeter");

        shape.addEventListener("change", function() {
            square.style.display = "none";
            rectangle.style.display = "none";
            triangle.style.display = "none";
            circle.style.display = "none";
            result.style.display = "none";

            squareSide.required = false;
            squareSide.value = null;
            rectLength.required = false;
            rectLength.value = null;
            rectWidth.required = false;
            rectWidth.value = null;
            triangleBase.required = false;
            triangleBase.value = null;
            triangleHeight.required = false;
            triangleHeight.value = null;
            circleRad.required = false;
            circleRad.value = null;
    
            const selectedShape = shape.value;
            if (selectedShape === "square") {
                square.style.display = "block";
                squareSide.required = true;
            } else if (selectedShape === "rectangle") {
                rectangle.style.display = "block";
                rectLength.required = true;
                rectWidth.required = true;
            } else if (selectedShape === "triangle") {
                triangle.style.display = "block";
                triangleBase.required = true;
                triangleHeight.required = true;
            } else if (selectedShape === "circle") {
                circle.style.display = "block";
                circleRad.required = true;
            }
        });


        function roundToTwoDecimalPlaces(inputElement) {
            let inputValue = parseFloat(inputElement.value);

            if (!isNaN(inputValue)) {
                inputValue = inputValue.toFixed(2);
                inputElement.value = inputValue;
            }
        }

        squareSide.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(squareSide);
        });
        rectLength.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(rectLength);
        });
        rectWidth.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(rectWidth);
        });
        triangleBase.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(triangleBase);
        });
        triangleHeight.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(triangleHeight);
        });
        circleRad.addEventListener("blur", function() {
            roundToTwoDecimalPlaces(circleRad);
        });
        
        // const squareErr = document.getElementById("squareErr");

        form.addEventListener("submit", function(event) {
            if (shape.value != "none") {
                result.style.display = "block";

                var areaResult;
                var perimeterResult;
                if (shape.value === "square") {
                    areaResult = squareSide.value * squareSide.value;
                    perimeterResult = 4 * squareSide.value;
                } else if (shape.value === "rectangle") {
                    areaResult = rectLength.value * rectWidth.value;
                    perimeterResult = 2 * (rectLength.value + rectWidth.value);
                } else if (shape.value === "triangle") {
                    areaResult = 0.5 * triangleBase.value * triangleHeight.value;
                    perimeterResult = 3 * triangleBase.value;
                } else if (shape.value === "circle") {
                    areaResult = 22.0 / 7.0 * Math.pow(circleRad.value, 2);
                    perimeterResult = 22.0 / 7.0 * (2 * circleRad.value);
                }
                area.innerHTML = areaResult.toFixed(3);
                perimeter.innerHTML = perimeterResult.toFixed(3);
            }
            
            event.preventDefault();
            // if (squareSide.value === "") {
            //     squareErr.style.display = "block";
            //     event.preventDefault();
            // } else {
            //     squareErr.style.display = "none";
            // }
        });
    }
};