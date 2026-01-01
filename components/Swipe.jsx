export default function Search() {
  return (
    <>
      <section class="film-container">
        <div class="film-box border-styl">
          <h1>film flow</h1>
          <p>swipe. save. watch.</p>
          <div class="swipe-feature">
            <div class="">
              <i class="fa-solid fa-left-long"></i>
              <p>NO</p>
            </div>

            <div>
              <i class="fa-solid fa-right-long"></i>
              <p>YES</p>
            </div>
          </div>
        </div>
      </section>

      <section class="btn-selectors">
        <button class="icon">
          <i class="fa-solid fa-xmark fa-lg cross"></i>
        </button>
        <button class="icon">
          <i class="fa-solid fa-rotate-left fa-lg undo"></i>
        </button>
        <button class="icon">
          <i class="fa-solid fa-heart fa-lg heart"></i>
        </button>
      </section>
    </>
  );
}
