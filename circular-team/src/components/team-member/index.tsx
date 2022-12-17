import React, { FC } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";
import styles from "./styles.module.scss";

export type Props = {
  photo: string;
  name: string;
  position: string;
  socials?: SocialIconProps[];
  isPreview?: boolean;
}

const TeamMember: FC<Props> = ({
  photo,
  name,
  position,
  socials,
  isPreview = true,
}) => (
  <div className={styles.container}>
    <figure className={isPreview ? styles.preview : styles.picture}>
      <img src={photo} alt={`${name}`} />
    </figure>
    {!isPreview && (
      <>
        <h2>
          {name}
          <br />
          <span>
            {position}
          </span>
        </h2>
        <div className={styles.socialList}>
          {socials?.map((social) => (
            <div className={styles.socialItem} key={social.url}>
              <SocialIcon
                fgColor="#fff"
                bgColor="gray"
                className={styles.override}
                {...social}
              />
            </div>
          ))}
        </div>
      </>
    )}

  </div>
);

export default TeamMember;
