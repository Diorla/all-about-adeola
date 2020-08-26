export default () => (
  <div className="shimmer__block">
    <style jsx>{`
      body {
        background-color: white;
      }

      .shimmer__block {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        animation-delay: 0.5s;
        background-color: #ededed;
        background-image: linear-gradient(
          90deg,
          /* change colour to improve contrast*/ #ededed 14.36%,
          #d7d6d6 56.29%,
          #ededed 100%
        );
        background-repeat: no-repeat;
        background-size: 244px 104px;
        position: relative;
        height: 16px;
        width: 100%;
        margin: 3px 6px 3px 0px;
      }

      @keyframes placeHolderShimmer {
        0% {
          background-position: calc(0% - 300px) 0;
        }

        20% {
          background-position: calc(0% - 300px) 0;
        }

        80% {
          background-position: calc(100% + 300px) 0;
        }

        100% {
          background-position: calc(100% + 300px) 0;
        }
      }
    `}</style>
  </div>
);

// export default () => <div class="shimmer__block" style="max-width: 194px"></div>

// <div class="shimmer__block" style="width: 100px; height: 100px; border-radius: 50%"></div>
// ===================================================
