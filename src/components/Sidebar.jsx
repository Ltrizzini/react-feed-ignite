import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="src\assets\cover-img.png" alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ltrizzini.png" />
        <strong className={styles.name}>Lucas Trizzini</strong>
        <span className={styles.bio}>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
