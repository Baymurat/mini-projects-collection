import React, { useEffect, useRef } from "react";
import Stars from "@static/images/stars.png";
import Moon from "@static/images/moon.png";
import MountainsBehind from "@static/images/mountains_behind.png";
import MountainsFront from "@static/images/mountains_front.png";
import styles from "./styles.module.scss";

const Home = () => {
  const starsRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const mountainsBehindRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const mountainsFrontRef = useRef<HTMLImageElement>(null);

  const listener = () => {
    const value = window.scrollY;
    if (starsRef.current) {
      starsRef.current.style.left = `${value * 0.25}px`;
    }
    if (moonRef.current) {
      moonRef.current.style.top = `${value * 1.05}px`;
    }
    if (mountainsBehindRef.current) {
      mountainsBehindRef.current.style.top = `${value * 0.5}px`;
    }
    if (mountainsFrontRef.current) {
      mountainsFrontRef.current.style.top = "0px";
    }
    if (textRef.current) {
      textRef.current.style.marginRight = `${value * 4}px`;
    }
    if (textRef.current) {
      textRef.current.style.marginTop = `${value * 1.5}px`;
    }
    if (btnRef.current) {
      btnRef.current.style.marginTop = `${value * 1.5}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <>
      <section className={styles["parallax-pictures"]}>
        <img ref={starsRef} src={Stars} alt="stars" id={styles.stars} />
        <img ref={moonRef} src={Moon} alt="moon" id={styles.moon} />
        <img ref={mountainsBehindRef} src={MountainsBehind} alt="mountains_behind" id={styles.mountains_behind} />
        <h2 ref={textRef} id={styles.text}>Moon Light</h2>
        <a ref={btnRef} href="#sec" id={styles.btn}>Explore</a>
        <img ref={mountainsFrontRef} src={MountainsFront} alt="mountains_front" id={styles.mountains_front} />
      </section>
      <section className={styles["parallax-text"]}>
        <h2>Parallax Scrolling Effects</h2>
        <p>
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque, commodi, sequi in, odit doloribus dolor quos autem modi tempore sit tenetur. Praesentium beatae neque dolores sapiente nostrum molestias! Voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic deleniti aliquam atque, temporibus odio ratione similique quis dignissimos corporis, quibusdam aspernatur eaque, repellat quasi? Reprehenderit, nobis? Labore, fugiat dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima quisquam vero natus? Illum fugit, atque veniam dignissimos suscipit recusandae nobis repellat tempore ab minus, voluptatem in ex non molestiae.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque, commodi, sequi in, odit doloribus dolor quos autem modi tempore sit tenetur. Praesentium beatae neque dolores sapiente nostrum molestias! Voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic deleniti aliquam atque, temporibus odio ratione similique quis dignissimos corporis, quibusdam aspernatur eaque, repellat quasi? Reprehenderit, nobis? Labore, fugiat dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima quisquam vero natus? Illum fugit, atque veniam dignissimos suscipit recusandae nobis repellat tempore ab minus, voluptatem in ex non molestiae.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque, commodi, sequi in, odit doloribus dolor quos autem modi tempore sit tenetur. Praesentium beatae neque dolores sapiente nostrum molestias! Voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic deleniti aliquam atque, temporibus odio ratione similique quis dignissimos corporis, quibusdam aspernatur eaque, repellat quasi? Reprehenderit, nobis? Labore, fugiat dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima quisquam vero natus? Illum fugit, atque veniam dignissimos suscipit recusandae nobis repellat tempore ab minus, voluptatem in ex non molestiae.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cumque, commodi, sequi in, odit doloribus dolor quos autem modi tempore sit tenetur. Praesentium beatae neque dolores sapiente nostrum molestias! Voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic deleniti aliquam atque, temporibus odio ratione similique quis dignissimos corporis, quibusdam aspernatur eaque, repellat quasi? Reprehenderit, nobis? Labore, fugiat dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima quisquam vero natus? Illum fugit, atque veniam dignissimos suscipit recusandae nobis repellat tempore ab minus, voluptatem in ex non molestiae.
        </p>
      </section>
    </>
  );
};

export default Home;
