import styles from './SpendingBreakdown.module.scss'

import { Panel } from '@/shared/ui/Panel'

export function SpendingBreakdown() {
  return (
    <Panel title="Spending Breakdown">
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.row}>
            <span className={styles.name}>
              <span className={styles.dot} /> Housing
            </span>
            <span>51%</span>
          </div>
          <div className={styles.bar}>
            <div className={`${styles.fill} ${styles.width51}`} />
          </div>
          <div className={styles.amount}>$2,100</div>
        </div>

        <div className={styles.item}>
          <div className={styles.row}>
            <span className={styles.name}>
              <span className={`${styles.dot} ${styles.dotOrange}`} /> Food
            </span>
            <span>11%</span>
          </div>
          <div className={styles.bar}>
            <div className={`${styles.fill} ${styles.fillOrange} ${styles.width11}`} />
          </div>
          <div className={styles.amount}>$450</div>
        </div>

        <div className={styles.item}>
          <div className={styles.row}>
            <span className={styles.name}>
              <span className={`${styles.dot} ${styles.dotBlue}`} /> Transport
            </span>
            <span>5%</span>
          </div>
          <div className={styles.bar}>
            <div className={`${styles.fill} ${styles.fillBlue} ${styles.width5}`} />
          </div>
          <div className={styles.amount}>$200</div>
        </div>

        <div className={styles.item}>
          <div className={styles.row}>
            <span className={styles.name}>
              <span className={`${styles.dot} ${styles.dotPurple}`} /> Shopping
            </span>
            <span>33%</span>
          </div>
          <div className={styles.bar}>
            <div className={`${styles.fill} ${styles.fillPurple} ${styles.width33}`} />
          </div>
          <div className={styles.amount}>$1,370</div>
        </div>
      </div>
    </Panel>
  )
}
