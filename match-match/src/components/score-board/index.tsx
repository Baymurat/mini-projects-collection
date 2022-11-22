import React, { FC, useState, useEffect } from "react";
import AddRecord from "./AddRecordModal";
import ShowScores from "./ShowScores";
import styles from "./styles.module.scss";

export type Score = {
  player: string;
  time: string;
}

type Props = {
  onClose: () => void;
  show: boolean;
  time: string;
}

const ScoreBoard: FC<Props> = ({
  show, onClose, time,
}) => {
  const [scores, setScores] = useState<Score[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const t = localStorage.getItem("scores");
    setScores(JSON.parse(t || "[]"));
  }, []);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return (
    <div>
      {show && (
        <div className={styles.container}>
          <div className={styles.header}>
            <span>Score board</span>
            <div className={styles.closeButton} onClick={onClose}>
              <ion-icon style={{ width: "1.3rem", height: "1.3rem" }} name="close-circle-outline" />
            </div>
          </div>
          <AddRecord
            show={showModal}
            addRecord={(name: string) => {
              const newScores = [...scores, { player: name, time }];
              localStorage.setItem("scores", JSON.stringify(newScores));
              setScores(newScores);
              setShowModal(false);
            }}
            closeModal={() => setShowModal(false)}
          />

          <ShowScores scores={scores} />
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
