/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Echo-Quest",
    description:
      "Waste management app: An innovative solution that can make reducing waste and promoting sustainability more accessible, engaging, and achievable for everyone. It tracks and records users’ daily actions related to reducing waste and is rewarded with coupons and money for the same. The app incorporates a shopping experience of recycled waste promotes sustainability and keeps the user engaged.",
    url: "https://github.com/aditisharma132/eco_quest",
  },
  {
    title: "Jeevan Pravah App",
    description:
      "This is a demo Blood donating application in which both donors and patients benefit. Itia made mainly with Js, kotlin in Android Studio. Solves the problem of blood emergencies by connecting blood donors directly with people in blood need. We connect blood donors with recipients, without any intermediaries such as blood banks, for an efficient and seamless process.",
    url: "https://github.com/aditisharma132/Jeevan_Pravah_App",
  },
  {
    title: "The movies",
    description:
      "This a react-based movies app : You can watch your all-time favorite movies at ease just by filtering out the year the movie was released. Moviedb API is used to list out all the movies with their release date and poster",
    url: "https://github.com/aditisharma132/The-Movies",
  },
  {
    title: "Chatered Accountancy",
    description:
      "This is an HTML CSS-based e-Commerce Website : Google Maps API, Bootstrap, font-awesome, box icons, etc. are the different styling tools used to make the website look more attractive.",   
    url: "https://github.com/aditisharma132/Internship-project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
