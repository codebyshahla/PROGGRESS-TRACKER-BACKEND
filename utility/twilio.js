/* eslint-disable require-jsdoc */
/* eslint-disable indent */
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

// Function to send OTP
function sendOtp(phoneNumber) {
  console.log('from send otp');

  return client.verify.v2.services('VA2207514e6fb6472438ad17df7348844c')
    .verifications
    .create({to: `+91${phoneNumber}`, channel: 'sms'})
    .then((verification) => verification.status)
    .catch((error) => {
      console.error('Error sending OTP:', error);
      throw error;
    });
}
// Function to verify OTP
function verifyOtp(phoneNumber, otpCode) {
  console.log('from verify otp');
  return client.verify.v2.services('VA2207514e6fb6472438ad17df7348844c')
    .verificationChecks
    .create({to: `+91${phoneNumber}`, code: otpCode})
    .then((verificationCheck) => verificationCheck.status)
    .catch((error) => {
      console.error('Error verifying OTP:', error);
      throw error;
    });
}

module.exports = {sendOtp, verifyOtp};
