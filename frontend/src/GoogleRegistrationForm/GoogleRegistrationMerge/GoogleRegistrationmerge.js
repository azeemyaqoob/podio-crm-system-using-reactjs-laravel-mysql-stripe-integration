import React, { useEffect, useState } from "react";
import GoogleregistrationNavbar from "../GoogleregistrationNavbar/GoogleregistrationNavbar";
import Footer from "../../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../../Homepage/End_Footer/EndFooter";
import GoogleForm from "../GoogleForm/GoogleForm";

function GoogleRegistrationmerge() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <GoogleregistrationNavbar />
      <GoogleForm />
      <Footer />
      <EndFooter />

      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </div>
  );
}

export default GoogleRegistrationmerge;
