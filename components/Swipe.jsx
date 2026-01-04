// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Search() {
  const containerRef = useRef(null);
  const [threshold, setThreshold] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth; // width of the container
      setThreshold(0.35 * width); // how far i move from the center
      console.log(`This is the width ${width}`);
    }
  }, []);

  function onDrag(event, info) {
    // console.log(info.point.x);
    // console.log(threshold);

    if (info.offset.x > threshold) {
      console.log("YES");
    } else if (info.offset.x < -threshold) {
      console.log("NO");
    } else {
      console.log("SNAP BACK");
    }
  }

  function heart() {
    console.log("isLiked");
  }

  function cross() {
    console.log("isNotLiked");
  }

  function redo() {
    console.log("Undo");
  }

  return (
    <>
      <motion.div ref={containerRef}>
        <motion.div drag="x" onDragEnd={onDrag} className="film-container">
          <div className="film-box border-style">
            <h1>film flow</h1>
            <p>swipe. save. watch.</p>
            <div className="swipe-feature">
              <div>
                <i className="fa-solid fa-left-long"></i>
                <p>NO</p>
              </div>

              <div>
                <i className="fa-solid fa-right-long"></i>
                <p>YES</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <section className="btn-selectors">
        <button className="icon" onClick={cross}>
          <i className="fa-solid fa-xmark fa-lg cross"></i>
        </button>
        <button className="icon" onClick={redo}>
          <i className="fa-solid fa-rotate-left fa-lg undo"></i>
        </button>
        <button className="icon" onClick={heart}>
          <i className="fa-solid fa-heart fa-lg heart"></i>
        </button>
      </section>
    </>
  );
}

// movie that is currently on top
//  render 2-3 movies max at once the top card reacts to the gesture and when it leave it promotes the next card
// gesture based-swiping so drag distance dragged and direction
//  if dragged far enough accept swipe if not snap back to center

// activeIndex – which movie is on top
// likedMovies – stores right-swiped movies
// dislikedMovies – stores left-swiped movies
// isDragging / dragOffset – for smooth animation if you implement drag

// Past +35% → RIGHT swipe (YES)
// Past −35% → LEFT swipe (NO)
// Between −35% and +35% → cancel

// ✔️ The parent container owns the three-zone rule

// ✔️ The decision (YES / NO / snap back) lives in the parent

// ✔️ The card is responsible for movement and interaction

// ✔️ The decision is made on release, not during drag
