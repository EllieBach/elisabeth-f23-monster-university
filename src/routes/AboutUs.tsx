import React from "react";
import "../styles/AboutUs.scss"
import schoolpic from "../assets/images/school.png"

const AboutUs = () => {
  return (
    <>
      <article>
        <h2>about us</h2>
        <img src={schoolpic}/>
        <p>
          Welcome to Monster University, where the extraordinary is ordinary,
          and the bizarre is celebrated!
        </p>
        <p>
          Nestled in the heart of Monstropolis, Monster University is more than
          just an institution of higher learning; it's a rite of passage for
          monsters of all shapes, sizes, and species. Founded centuries ago by
          the most esteemed monsters of their time, our university has been the
          premier destination for those looking to hone their monstrous talents
          and unleash their full potential.
        </p>
        <p>
          At Monster University, we believe in embracing diversity and
          celebrating what makes each monster unique. Whether you're a
          fire-breathing dragon, a tentacled sea creature, or a fuzzy ball of
          terror, you'll find your place among our diverse student body. Our
          inclusive environment fosters creativity, innovation, and
          collaboration, ensuring that every monster can thrive and succeed.
        </p>
        <p>
          Our world-class faculty consists of some of the most renowned monsters
          in their fields, from the legendary Scream Studies professor to the
          expert in Scare Tactics. With their guidance and mentorship, our
          students are equipped with the knowledge and skills they need to excel
          in their chosen professions.
        </p>
        <p>
          But Monster University is more than just academics; it's a vibrant
          community where lifelong friendships are forged, and memories are
          made. From spirited pep rallies to thrilling monster rallies, there's
          never a dull moment on campus. And with our state-of-the-art
          facilities, including the Fear-Tech Lab and the Monster Incubator,
          students have access to the resources they need to push the boundaries
          of what's possible.
        </p>
        <p>
          Whether you dream of becoming the next scream champion, mastering the
          art of disguise, or revolutionizing the monster world with
          groundbreaking inventions, Monster University is the place where those
          dreams become reality. Join us, and let your inner monster roar!
        </p>
      </article>
    </>
  );
};

export default AboutUs;
