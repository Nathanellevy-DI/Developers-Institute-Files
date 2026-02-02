document.addEventListener('DOMContentLoaded', () => {
    // --- API KEY FOR ExchangeRate-API ---
    const API_KEY = '8fa2e3acb2db0ea088d7d060'; 
    const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

    // Get references to DOM elements
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    
    // Function to fetch all available currencies and populate the dropdowns
    // NOTE: ExchangeRate-API requires a 'latest/BASE_CURRENCY' call to get ALL rates.
    // We'll use 'USD' as the initial base to get the full list of supported codes.
    async function fetchCurrencies() {
        try {
            // Fetch rates using USD as a temporary base to get all codes
            const response = await fetch(BASE_URL + 'USD');
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.result === 'error') {
                throw new Error(data['error-type'] || 'API returned an error.');
            }
            
            // The currency list is the keys of the conversion_rates object
            const currencyCodes = Object.keys(data.conversion_rates).sort(); 
            
            // Clear existing options
            fromCurrencySelect.innerHTML = '';
            toCurrencySelect.innerHTML = '';

            // Populate the dropdowns
            currencyCodes.forEach(code => {
                // Create option for 'From' dropdown
                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = code;
                fromCurrencySelect.appendChild(option1);

                // Create option for 'To' dropdown
                const option2 = document.createElement('option');
                option2.value = code;
                option2.textContent = code;
                toCurrencySelect.appendChild(option2);
            });
            
            // Set initial default selections
            fromCurrencySelect.value = 'USD';
            toCurrencySelect.value = 'EUR';

            // IMPORTANT: Enable the button and run the initial conversion only after success
            convertButton.disabled = false;
            convertButton.textContent = 'Convert';
            convertCurrency();

        } catch (error) {
            console.error('Failed to load currencies:', error);
            resultDiv.textContent = `Failed to load currency list. Error: ${error.message}`;
            convertButton.textContent = 'Error Loading';
        }
    }

    // Function to fetch rates and perform conversion
    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = "Please enter a valid amount.";
            return;
        }
        
        // Display loading message
        resultDiv.textContent = 'Fetching rates...';
        
        // ExchangeRate-API uses the 'from' currency as the base in the URL:
        // https://v6.exchangerate-api.com/v6/KEY/latest/FROM_CURRENCY
        const endpoint = BASE_URL + fromCurrency;
        
        try {
            const response = await fetch(endpoint);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.result === 'error') {
                throw new Error(data['error-type'] || 'API returned an error.');
            }

            // The conversion rate is found directly in the rates object: data.conversion_rates[toCurrency]
            const rate = data.conversion_rates[toCurrency];

            if (rate === undefined) {
                 resultDiv.textContent = `Conversion failed. Target currency (${toCurrency}) not found in rates.`;
                 return;
            }
            
            const convertedAmount = amount * rate;

            // 4. Display the result
            // Use Intl.NumberFormat for better currency formatting
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: toCurrency,
                minimumFractionDigits: 2,
            });
            resultDiv.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${formatter.format(convertedAmount)}`;

        } catch (error) {
            console.error('Conversion failed:', error);
            resultDiv.textContent = `Conversion failed: ${error.message}`;
        }
    }

    // --- Event Listeners ---
    convertButton.addEventListener('click', convertCurrency);
    amountInput.addEventListener('change', convertCurrency);
    fromCurrencySelect.addEventListener('change', convertCurrency);
    toCurrencySelect.addEventListener('change', convertCurrency);

    // Initial setup: Load currencies first
    fetchCurrencies();
});