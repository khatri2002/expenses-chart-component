import Chart from "../../components/chart/Chart";
import { data } from "../../data";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Chart data={data} />
    </main>
  );
};

export default Home;
