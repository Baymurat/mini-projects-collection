import React, { FC, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  show: boolean;
  closeModal: () => void;
  addRecord: (name: string) => void;
}

const AddRecord: FC<Props> = ({
  show, closeModal, addRecord,
}) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      {show && (
        <div className={styles.addRecordModal}>
          <div className={styles.header}>
            <span>Specify name</span>
            <div
              onClick={closeModal}
              className={styles.closeButton}
            >
              <ion-icon
                style={{ width: "1.3rem", height: "1.3rem" }}
                name="close-circle-outline"
              />
            </div>
          </div>
          <div className={styles.body}>
            <input
              onChange={({ target }) => setName(target.value)}
              type="text"
            />
          </div>
          <div className={styles.footer}>
            <button onClick={() => addRecord(name)} type="button">Add</button>
            <button onClick={closeModal} type="button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;
