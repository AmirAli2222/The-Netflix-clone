// import React from 'react'
// import styles from "./header.module.css";
// import NetflixLogo from "../../assets/images/logo.png"
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// const Header = () => {
//   return (
//     <div className={styles.header_outer_container}>
//       <div className={styles.header_container}>
//         <div className={styles.header_left}>
//           <ul>
//             <li><img src={NetflixLogo} alt="Netflix logo" width="100"/></li>
//             <li>Home</li>
//             <li>TVShows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by language</li>
//           </ul>
//         </div>
//         <div className={styles.header_right}>
//           <ul>
//             <li>SearchIcon</li>
//             <li>Home</li>
//             <li>NotificationsNoneIcon</li>
//             <li>AccountBoxIcon</li>
//             <li>ArrowDropDownIcon</li>
//             <li>MyList</li>
//             <li>Browse by language</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import NetflixLogo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.header_outer_container} ${
        isScrolled ? styles.nav_black : ""
      }`}
    >
      <div className={styles.header_container}>
        {/* Left Navigation */}
        <div className={styles.header_left}>
          <img src={NetflixLogo} alt="Netflix logo" className={styles.logo} />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right Navigation (Icons) */}
        <div className={styles.header_right}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
