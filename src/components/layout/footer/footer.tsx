import styles from "./footer.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={ styles.container }>
      <div className={ styles.links }>
        <a className={ styles.link } href={ '/pp' }>Private Policy</a>
        <a className={ styles.link } href={ 'https://www.facebook.com' }>Facebook</a>
        <a className={ styles.link } href={ 'https://www.instagram.com' }>Instagram</a>
        <a className={ styles.link } href={ '/contact' }>Contact</a>
      </div>
      <div className={ styles.aRR }>
        <span>botmerce.com</span>
      </div>
    </footer>
  );
}
