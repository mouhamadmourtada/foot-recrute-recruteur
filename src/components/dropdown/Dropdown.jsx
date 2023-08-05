import React, { useState, useEffect, useRef } from 'react';
import styles from "./dropdown.module.css";

const Dropdown = ({ children, El }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles["nav-profile-img"]}>
      <El toggleVisible={toggleVisible} />

      <div className={`card ${styles.mycard} ${isVisible ? styles["content-profil-active"] : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;




