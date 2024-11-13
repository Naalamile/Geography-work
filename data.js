document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const formFields = {
        objectName: document.querySelector('input[placeholder="Object Name"]'),
        objectDescription: document.querySelector('input[placeholder="Object Description"]'),
        siteOfOrigin: document.querySelector('input[placeholder="Site of Origin"]'),
        excavatorName: document.querySelector('input[placeholder="Excavator\'s Name"]'),
        year: document.querySelector('input[placeholder="Year"]')
    };

    // Check if form fields are correctly selected
    console.log(formFields);

    // Add Submit Button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("bg-blue-500", "text-white", "px-4", "py-2", "rounded", "mt-4");
    submitButton.addEventListener("click", handleSubmit);
    document.querySelector(".container").appendChild(submitButton);

    // Add Reset Button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.classList.add("bg-gray-500", "text-white", "px-4", "py-2", "rounded", "mt-4", "ml-2");
    resetButton.addEventListener("click", handleReset);
    document.querySelector(".container").appendChild(resetButton);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submit button clicked");

        // Collect data and validate fields
        const data = {
            objectName: formFields.objectName.value.trim(),
            objectDescription: formFields.objectDescription.value.trim(),
            siteOfOrigin: formFields.siteOfOrigin.value.trim(),
            excavatorName: formFields.excavatorName.value.trim(),
            year: formFields.year.value.trim()
        };

        console.log("Collected data:", data);

        // Simple validation
        if (!data.objectName || !data.objectDescription || !data.siteOfOrigin || !data.excavatorName || !data.year) {
            alert("Please fill in all fields.");
            return;
        }

        if (isNaN(data.year) || data.year.length !== 4) {
            alert("Please enter a valid 4-digit year.");
            return;
        }

        // Display data or save to database
        displayData(data);

        // Clear the form fields after submission
        handleReset();
    }

    function handleReset() {
        console.log("Reset button clicked");
        Object.values(formFields).forEach(field => field.value = "");
    }

    function displayData(data) {
        console.log("Displaying data:", data);

        const display = document.createElement("div");
        display.classList.add("mt-10", "bg-gray-100", "p-4", "rounded", "shadow");

        display.innerHTML = `
            <h2 class="text-xl font-bold">Artifact Details</h2>
            <p><strong>Object Name:</strong> ${data.objectName}</p>
            <p><strong>Description:</strong> ${data.objectDescription}</p>
            <p><strong>Site of Origin:</strong> ${data.siteOfOrigin}</p>
            <p><strong>Excavator's Name:</strong> ${data.excavatorName}</p>
            <p><strong>Year:</strong> ${data.year}</p>
        `;
        
        document.querySelector(".container").appendChild(display);
    }
});
