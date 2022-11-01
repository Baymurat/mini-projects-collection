import React, { FC, PropsWithChildren, useState, Children, isValidElement, cloneElement, useMemo } from "react";
import styles from "./styles.module.scss";
import GroupButtons from "./GroupButtons";
import { CardGroupProps, Direction } from "./CardGroup";

type ActiveProps = {
  nextIndex: number;
  prevIndex: number;
  direction: Direction;
}

const CardSwiper: FC<PropsWithChildren<CardGroupProps>> = ({ children }) => {
  const groupsCount = useMemo(() => (Children.count(children)), [Children.count(children)]);
  const [active, setActive] = useState<ActiveProps>({
    nextIndex: 0,
    prevIndex: groupsCount - 1,
    direction: "right",
  });

  return (
    <div className={styles.cardSwiper}>
      <div className={styles.cardGroups}>
        {Children.map(
          children,
          (child, index) => {
            if (isValidElement<CardGroupProps>(child)) {
              const {
                nextIndex, prevIndex, direction,
              } = active;

              if (index === nextIndex) {
                return cloneElement(child, { isNext: true, direction });
              }

              if (index === prevIndex) {
                return cloneElement(child, { isPrev: true, direction });
              }
            }
            return child;
          },
        )}
      </div>
      <GroupButtons
        onPrev={() => {
          setActive((prev) => {
            const isFirst = prev.nextIndex - 1 === -1;
            return {
              direction: "left",
              prevIndex: isFirst ? 0 : prev.nextIndex,
              nextIndex: isFirst ? groupsCount - 1 : prev.nextIndex - 1,
            };
          });
        }}
        onNext={() => {
          setActive((prev) => {
            const isLast = prev.nextIndex + 1 === groupsCount;
            return {
              direction: "right",
              prevIndex: isLast ? groupsCount - 1 : prev.nextIndex,
              nextIndex: isLast ? 0 : prev.nextIndex + 1,
            };
          });
        }}
      />
    </div>
  );
};

export default CardSwiper;
