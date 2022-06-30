import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "じゃけえ",
  email: "123@aaa.com",
  adress: "ADDRESS"
};

export default function App() {
  const onClickFetchUser = () => {
    axsios.get("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div className="App">
      <button onclick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
