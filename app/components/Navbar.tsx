import Link from "next/link"
import styles from "./Navbar.module.css"

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">E-COMMERCE</Link>
        </div>

        <nav className={styles.navigation}>
          <Link href="/men">MEN</Link>
          <Link href="/men">MEN</Link>
          <Link href="/men">MEN</Link>
          <Link href="/men">MEN</Link>
          <Link href="/women">WOMEN</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input type="search" placeholder="Search" className={styles.searchInput} />
            <button className={styles.searchButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <button className={styles.iconButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <div className={styles.cartContainer}>
            <button className={styles.iconButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
            <span className={styles.cartCount}>0</span>
          </div>
        </div>
      </div>
    </header>
  )
}

