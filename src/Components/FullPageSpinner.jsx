function FullPageSpinner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-zinc-300 opacity-80 transition-all">
      <svg
        className="left-[50%] top-[50%] m-auto block h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="10" fill="#fbbf24">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.625s"
            calcMode="spline"
            keyTimes="0;1"
            values="5;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#fbbf24;#fbbf24;#fbbf24;#fbbf24;#fbbf24"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#fbbf24">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;5;5;5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#fbbf24">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;5;5;5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.625s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.625s"
          ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#fbbf24">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;5;5;5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.25s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.25s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#fbbf24">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;5;5;5"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.875s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.5s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.875s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}

export default FullPageSpinner;
