import { useEffect, useState } from "react";

import cn from "classnames";

import { ChartProps } from "../../type";
import styles from "./Chart.module.scss";
import { loadingIcon, logo } from "../../assets/images";

const Chart = ({ data }: ChartProps) => {
  const [barHeights, setBarHeights] = useState<Array<number>>([]);
  const [maxAmount, setMaxAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const maxAmount = Math.max(...data.map((item) => item.amount));
    setMaxAmount(maxAmount);

    const heights = data.map((item) => (item.amount / maxAmount) * 100);
    setTimeout(() => {
      setBarHeights(heights);
      setLoading(false);
    }, 2500);
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.content}>
          <span className={styles.label}>My balance</span>
          <span className={styles.value}>$921.48</span>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.main}>
        <span className={styles.heroText}>Spending - Last 7 days</span>
        <div className={styles.wrapper}>
          <div
            className={cn({ [styles.loading]: true, [styles.hide]: !loading })}
          >
            <span>Brewing your coffee expenses! Almost there!</span>
            <img src={loadingIcon} alt="loading" />
          </div>
          <div
            className={cn({
              [styles.barContainer]: true,
              [styles.show]: !loading,
            })}
          >
            {data.map((item, index) => (
              <div key={index} className={styles.barWrapper}>
                <div
                  className={cn({
                    [styles.bar]: true,
                    [styles.active]: item.amount === maxAmount,
                  })}
                  style={{ height: `${barHeights[index] || 0}%` }}
                >
                  <span className={styles.tooltip}>{`$${item.amount}`}</span>
                </div>
                <span className={styles.text}>{item.day}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footer}>
          <div className={styles.footerHero}>
            <span className={styles.heroLabel}>Total this month</span>
            <span className={styles.heroValue}>$478.33</span>
          </div>
          <div className={styles.footerSub}>
            <span className={styles.subValue}>+2.4%</span>
            <span className={styles.subLabel}>from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
