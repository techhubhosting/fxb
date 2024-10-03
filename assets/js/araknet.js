 // Get the current date
 var currentDate = new Date();
        
 // Get the last day of the current month
 var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
 
 // Calculate the remaining days in the month
 var remainingDays = lastDayOfMonth.getDate() - currentDate.getDate();
 
 // Update the countdown timer
 document.getElementById("spotsLeft").innerText = remainingDays;

 // Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to delete a cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Check for 'affiliate' parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const affiliate = urlParams.get('aff');

if (affiliate) {
    // If an affiliate parameter is present in the URL, store it in a cookie
    setCookie('affiliate', affiliate, 30); // Store the affiliate code for 30 days
} else {
    // If no affiliate parameter in the URL, clear any existing affiliate cookie
    deleteCookie('affiliate');
}

// Event listener for all CTA buttons
const buttons = document.querySelectorAll('.payment-button');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        let paymentUrl = 'https://selar.co/13c5d7'; // Default CTA button link

        // Retrieve the stored affiliate code if available
        const affiliateCode = getCookie('affiliate');

        // Only add the affiliate parameter if an affiliate code is present
        if (affiliateCode) {
            paymentUrl = `https://selar.co/p/13c5d7?affiliate=${affiliateCode}`;
        }

        // Redirect to the appropriate Selar link
        window.location.href = paymentUrl;
    });
});