import styles from "./style.module.css";
export default function Avatar({ src, alt, text, withText }) {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} title={alt} className={styles.avatar} />
      {withText && <strong>{text || alt}</strong>}
    </div>
  );
}
