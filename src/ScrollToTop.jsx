/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop} className="back-top"
      >
        <MdArrowUpward  className="back-icon"/>
      </button>
    )
  );
};

export default ScrollToTop