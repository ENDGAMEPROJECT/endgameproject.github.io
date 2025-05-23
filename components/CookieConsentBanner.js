import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#0092A2", color: "#fff", fontSize: "14px", fontWeight: '500' }}
      declineButtonStyle={{ backgroundColor: "#f50", color: "#FFF", fontSize: "14px", fontWeight: '500' }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        // Add functionality when user accepts cookies
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
        console.log("Cookies declined");
      }}
    >
      This website uses cookies to enhance your experience. By using our website, you consent to the use of cookies. 
    </CookieConsent>
  );
};

export default CookieConsentBanner;