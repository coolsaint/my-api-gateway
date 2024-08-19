const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT | 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to send SMS messages
app.post('/send-sms', async (req, res) => {
    try {
        const apiToken = "lyfw65tt-j2u4pazc-uvkullle-uulp3vb5-pz0lgkup";
        const sid = "ARYANONBRAND";
        const sms = "hello world"; // Assuming the message is sent in the request body
        const msisdn = "+8801729134347"; // Assuming the phone number is sent in the request body
        const csmsId = "2934fe344"; // Assuming this is a unique identifier for the SMS message
        
        const apiUrl = "https://smsplus.sslwireless.com/api/v3/send-sms";

        // Send the SMS message using the SSL Wireless API
        const response = await axios.post(apiUrl, {
            api_token: apiToken,
            sid: sid,
            sms: sms,
            msisdn: msisdn,
            csms_id: csmsId
        });


        // If the SMS was sent successfully, return a success response
        const responseData = response.data;

        // Log the response data
        console.log("SSL Wireless API Response:", responseData);

        // Return the response data as part of the HTTP response
        res.json(responseData);
        
    } catch (error) {
        // If an error occurred, return an error response
        console.error("Error sending SMS:", error);
        res.status(500).json({ success: false, message: "Failed to send SMS" });
    }
});

// Start the server
app.listen(PORT, () => {
        // Return the response data as part of the HTTP response
        console.log(`Server is running on port ${PORT}`);
});

