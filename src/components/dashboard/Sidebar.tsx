import { NavLink } from "react-router-dom";
import { sidebarSections, Tab } from "../../data/sidebarData";
import styles from "../../scss/dashboard/sidebar.module.scss";
import ArrowDown from "../../assets/images/arrow-down.svg?react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Switch Organization */}
      <div className={styles.topTabs}>
        {Tab.map((item, index) => (
          <button key={index} className={styles.topbarButton}>
            <item.icon />
            <span>{item.name}</span>
            <ArrowDown className={styles.arrow_icon} />
          </button>
        ))}
      </div>

      <nav>
        {sidebarSections.map((section, idx) => (
          <div key={idx} className={styles.section}>
            {section.title && (
              <p className={styles.sectionTitle}>{section.title}</p>
            )}

            <ul className={styles.list}>
              {section.items.map(({ label, icon: Icon, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.active : ""}`
                    }
                  >
                    <Icon size={16} />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
