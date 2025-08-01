import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "words, chars",
    });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      stagger: 0.05,
      ease: "expo.out",
      duration: 1.8,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
      ease: "expo.out",
      duration: 1.8,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <p className="subtitle">
              Sip the Spirit of <br /> Summer
            </p>

            <div className="view-cocktails">
              <p className="subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, consectetur officiis. Sint accusamus nobis labore
                dolorem repudiandae voluptatum enim totam aliquid quos? Dolorum
                sequi explicabo officia iure voluptate similique sapiente?
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
