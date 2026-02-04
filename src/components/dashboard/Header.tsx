import styles from "../../scss/dashboard/header.module.scss";
import logo from "../../assets/images/lendsqr-logo.png";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import Avatar from  "../../assets/images/avatar.png";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* LEFT */}
      <div className={styles.left}>
        <img src={logo} alt="Lendsqr logo" className={styles.logo} />
      </div>

      {/* CENTER */}
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for anything"
        />
        <button>
          <FiSearch />
        </button>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <a href="#" className={styles.docs}>Docs</a>

        <FiBell className={styles.bell} />

        <div className={styles.user}>
          <img
            src={Avatar}
            alt="Adedeji Avatar"
            className={styles.avatar}
          />
          <span className={styles.username}>Adedeji</span>
          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}
