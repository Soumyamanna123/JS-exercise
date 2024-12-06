const fs = require('fs');
const path = require('path');

// Function to remove objects with any empty, null or undefined fields
function removeObjectsWithEmptyFields(array) {
    return array.filter(obj => {
        return Object.values(obj).every(value => value !== "" && value !== null && value !== undefined);
    });
}

// Function to process data in batches
function processInBatches(filteredData, batchSize) {
    const batches = [];
    for (let i = 0; i < filteredData.length; i += batchSize) {
        batches.push(filteredData.slice(i, i + batchSize));
    }
    return batches;
}

// Function to read input file, process it and write to output files in batches
function processJson(inputFilePath, outputDir, batchSize = 10) {
    // Read the input JSON file
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);
            console.log(jsonData)

            // Check if the data is an array (you can modify this check based on your expected input)
            if (Array.isArray(jsonData)) {
                // Filter the data to remove objects with empty fields
                const filteredData = removeObjectsWithEmptyFields(jsonData);

                // Split the filtered data into batches
                const batches = processInBatches(filteredData, batchSize);

                // Write each batch to a separate file
                batches.forEach((batch, index) => {
                    const outputFilePath = path.join(outputDir, `output_batch_${index + 1}.json`);
                    
                    // Convert the batch to a JSON string
                    const outputJson = JSON.stringify(batch, null, 2);

                    // Write the batch to the output file
                    fs.writeFile(outputFilePath, outputJson, 'utf8', (err) => {
                        if (err) {
                            console.error(`Error writing batch ${index + 1} to the file:`, err);
                        } else {
                            console.log(`Batch ${index + 1} has been written to ${outputFilePath}`);
                        }
                    });
                });
            } else {
                console.error('The uploaded JSON does not contain an array.');
            }
        } catch (e) {
            console.error('Error parsing the JSON file:', e);
        }
    });
}

// Example usage:
// Replace these file paths with your actual file paths
const inputFilePath = path.join(__dirname, 'studentdata.json');  // Input file path
const outputDir = path.join(__dirname, 'output_batches');  // Output directory

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Process the JSON file in batches of 10 and create individual files
processJson(inputFilePath, outputDir, 30);
