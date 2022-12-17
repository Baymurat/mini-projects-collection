import React from "react";
import Team from "./components/team";
import cat1 from "../folder/cat_1.jpg";
import cat2 from "../folder/cat_2.jpg";
import cat3 from "../folder/cat_3.jpg";
import cat4 from "../folder/cat_4.jpg";
import cat5 from "../folder/cat_5.jpg";
import cat6 from "../folder/cat_6.jpg";
import cat7 from "../folder/cat_7.jpg";
import cat8 from "../folder/cat_8.jpg";


import "../style/style.scss";

const App = () => (
  <div>
    <Team
      teamMembers={[
        {
          name: "Alfred",
          position: "Designer",
          photo: cat1,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Mark",
          position: "Frontend developer",
          photo: cat2,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Sam",
          position: "Backend developer",
          photo: cat3,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Fred",
          position: "Manager",
          photo: cat4,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Mario",
          position: "CEO",
          photo: cat5,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Burn",
          position: "Team lead",
          photo: cat6,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Cola",
          position: "Manager assistant",
          photo: cat7,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
        {
          name: "Pepsi",
          position: "Just a cat",
          photo: cat8,
          socials: [
            { url: "facebook.com/unknown" },
            { url: "instagram.com/unknown" },
            { url: "linkedin.com/unknown" },
            { url: "twitter.com/unknown" },
          ],
        },
      ]}
    />
  </div>
);

export default App;
