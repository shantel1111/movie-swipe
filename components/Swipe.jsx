export default function Search() {
  return (
    <>
      <section className="film-container">
        <div className="film-box border-styl">
          <h1>film flow</h1>
          <p>swipe. save. watch.</p>
          <div className="swipe-feature">
            <div className="">
              <i className="fa-solid fa-left-long"></i>
              <p>NO</p>
            </div>

            <div>
              <i className="fa-solid fa-right-long"></i>
              <p>YES</p>
            </div>
          </div>
        </div>
      </section>

      <section className="btn-selectors">
        <button className="icon">
          <i className="fa-solid fa-xmark fa-lg cross"></i>
        </button>
        <button className="icon">
          <i className="fa-solid fa-rotate-left fa-lg undo"></i>
        </button>
        <button className="icon">
          <i className="fa-solid fa-heart fa-lg heart"></i>
        </button>
      </section>
    </>
  );
}
