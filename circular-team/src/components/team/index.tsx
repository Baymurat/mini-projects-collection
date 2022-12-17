import React, { FC, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import RotateCircle from "../rotate-circle";
import TeamMember, { Props as TeamMemberProps } from "../team-member";

type Props = {
  teamMembers: TeamMemberProps[];
}

const Team: FC<Props> = ({ teamMembers }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps>();
  const [isTransition, setIsTransition] = useState<boolean>(false);

  useEffect(() => {
    setSelectedMember(teamMembers[0]);
  }, []);

  return (
    <div className={styles.container}>
      <RotateCircle
        width={400}
        height={400}
        borderLeftColor="red"
        animationDuration="4s"
      />
      <RotateCircle
        width={550}
        height={550}
        animationDelay="300ms"
        animationDuration="7s"
        borderLeftColor="yellow"
      />

      {teamMembers.map((member) => (
        <div
          onClick={() => {
            if (member.name === selectedMember?.name) return;
            setIsTransition(true);
            setTimeout(() => {
              setIsTransition(false);
              setSelectedMember(member);
            }, 800);
          }}
          key={`${member.name}${member.position}`}
          className={styles.wrapper}
        >
          <div className={styles.teamMember}>
            <TeamMember {...member} />
          </div>
        </div>
      ))}

      {selectedMember && (
        <div className={isTransition ? styles.fadeOut : styles.fadeIn}>
          <TeamMember isPreview={false} {...selectedMember} />
        </div>
      )}
    </div>
  );
};

export default Team;
