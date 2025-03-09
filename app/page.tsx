import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Women</h1>
          <p>
            Discover our carefully curated collection of women's apparel that blends style with comfort. Our selection
            features premium quality materials designed for the modern woman who values both elegance and functionality.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Add To Cart</button>
            <button className={styles.secondaryButton}>Wish List</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}></div>
        </div>
      </div>

      <div className={styles.productGrid}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.productItem}>
            <div className={styles.infoIcon}>i</div>
          </div>
        ))}
      </div>
    </main>
  )
}

