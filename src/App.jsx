import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Julio Alcantara",
      avatarUrl: "src/assets/profile-img.jpg",
      role: "Administrador",
    },
    publishedDate: new Date("2020-01-01 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei 2222to que fiz no NLW Retu🚀🚀🚀🚀🚀🚀to é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      name: "Ana Julia",
      avatarUrl: "https://avatars2.githubusercontent.com/u/527058?v=4",
      role: "Professor",
    },
    publishedDate: new Date("2022-02-02 20:00:00"),
    content: [
      { type: "paragraph", content: "🚀🚀Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projEEEEEEEEeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 3,
    author: {
      name: "Lucas Trizzini",
      avatarUrl: "src/assets/profile-img.jpg",
      role: "Aluno",
    },
    publishedDate: new Date("2022-06-06 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galerAAAAAa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir ma🚀🚀🚀is um projeto no mEEEEEEeu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedDate={post.publishedDate}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
export default App;
