import React from 'react';
import styles from './SvgAim.module.scss';

const SvgNone = (props) => {
  return (
    <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 400 400" >
      <path className={styles.path} strokeWidth="10"
      d="M187.2 28.869c-20.668 1.576-32.509 4.702-29.44 7.771.747.747.283.96-2.086.96-2.378 0-2.944-.263-2.585-1.2 1.869-4.87-31.949 9.737-48.647 21.011-34.616 23.375-54.728 51.934-69.662 98.922-3.437 10.817-3.67 12.023-2.486 12.888 1.777 1.299 1.648 2.25-.679 5.016-4.092 4.862-4.714 43.055-.772 47.41 1.213 1.341 1.27 1.846.395 3.482-1.887 3.527 5.021 29.773 11.687 44.402 3.31 7.261 3.109 7.048 5.006 5.331 2.241-2.028 3.628.783 2.942 5.958-.81 6.103 9.78 23.028 16.227 25.935 3.542 1.597 4.138 2.548 1.9 3.029-1.77.38 10.441 13.21 21 22.065 27.46 23.027 65.561 38.191 99.197 39.477l4.798.184-.133-2.955c-.175-3.869 1.137-3.769 4.02.304l2.282 3.225 7.718-.488c46.347-2.932 84.844-20.522 116.405-53.19 20.778-21.506 41.369-57.227 37.335-64.765-1.208-2.258-.365-3.215 1.086-1.232 1.282 1.754 2.561-1.903 5.231-14.959 9.385-45.889.678-93.514-23.959-131.05-10.643-16.214-15.18-20.37-15.18-13.902 0 3.659-1.421 1.863-1.964-2.483-.453-3.63-.957-4.677-2.925-6.078-1.78-1.268-2.164-1.95-1.528-2.717 2.526-3.043-26.442-25.196-45.436-34.746-19.336-9.722-60.095-21.263-58.267-16.499.593 1.547-.988 1.546-3.033 0-1.959-1.482-6.633-1.469-9.247.025-2.748 1.571-3.805 1.475-4.4-.4-.569-1.792-.771-1.802-14.8-.731m41.512 28.821c.912 1.127 4.428 2.57 10.551 4.33 27.168 7.809 60.607 29.965 72.409 47.977 1.799 2.746 9.496-2.534-59.834 41.044L193.676 187.6l-.939 3.89c-.765 3.166-.739 4.014.138 4.557 1.383.854.931 1.236-2.274 1.923-2.032.435-2.507.316-2.176-.547.668-1.741-4.508-3.926-6.261-2.644-.75.549-1.364 1.408-1.364 1.909 0 .502-.713.912-1.584.912-2.24 0-10.416 5.4-10.416 6.878 0 .829-.479 1.078-1.47.763-.935-.297-2.258.265-3.641 1.546-1.194 1.107-2.507 2.013-2.916 2.013-.41 0-20.567 12.465-44.793 27.699-24.226 15.235-44.238 27.509-44.472 27.276-1.086-1.086-6.966-15.832-8.788-22.039-10.727-36.545-6.277-79.797 11.462-111.401.144-.255-.829-.304-2.16-.109-3.604.529-2.932-.911 1.378-2.954 3.159-1.498 4.659-3.068 8.892-9.303C110.766 76.022 166.169 50.944 216 57.446c4.716.616 6.342.554 7.6-.289 2.281-1.53 3.549-1.397 5.112.533m102.357 84.11c1.367 3.19 3.196 7.6 4.065 9.8.868 2.2 1.598 3.55 1.622 3 .024-.55.324-1 .665-1 .342 0 .487 1.405.323 3.123-.22 2.314.109 3.53 1.271 4.692 1.028 1.028 1.343 1.975.912 2.743-.379.678 0 4.359.898 8.708.854 4.144 1.559 8.506 1.564 9.694.006 1.205.63 2.521 1.411 2.976.77.448.995.826.501.84-.622.016-1.024 5.026-1.304 16.224-1.012 40.581-15.671 74.066-44.466 101.577-3.553 3.395-6.206 6.314-5.896 6.487.311.173 1.555.551 2.765.841 4.465 1.067 2.955 2.103-5.4 3.705-3.426.657-7.205 2.366-13.2 5.969-4.62 2.776-10.74 6.215-13.6 7.641-2.86 1.426-6.059 3.265-7.108 4.087-1.049.821-2.613 1.493-3.475 1.493-.862 0-5.064 1.086-9.338 2.414-42.706 13.268-91.366 6.207-124.013-17.996-2.828-2.096-4.45-2.866-4.667-2.215-.53 1.59-1.332 1.169-2.408-1.262-.55-1.243-4.264-5.252-8.253-8.91-7.299-6.694-16.738-17.061-16.738-18.384 0-.392 8.73-6.202 19.4-12.911 10.67-6.709 26.6-16.75 35.4-22.313 8.8-5.564 26.53-16.734 39.4-24.823 12.87-8.089 23.4-15.217 23.4-15.839 0-.654.484-.946 1.147-.692 1.333.511 10.853-5.398 10.853-6.737 0-.497.511-.707 1.137-.467.625.24 2.155-.519 3.4-1.686 1.244-1.167 2.623-2.137 3.063-2.154 1.681-.068 4.324-2.093 3.961-3.037-.233-.608.331-.988 1.464-.988 3.956 0 32.345-18.88 33.33-22.166 1.997-6.664 8.488-10.591 11.886-7.193 1.488 1.488 41.971-22.889 47.961-28.88 3.676-3.675 5.234-2.972 8.067 3.639m15.277 246.6c-.044.44-.169 1.61-.279 2.6-.118 1.066.235 1.8.867 1.8.586 0 1.091.63 1.122 1.4.048 1.189.154 1.159.7-.2.729-1.812.303-3.055-.811-2.366-.41.253-.745.079-.745-.387s.709-.847 1.575-.847c1.108 0 1.431-.375 1.089-1.267-.392-1.022-.62-1.061-1.175-.2-.564.873-.832.849-1.477-.133-.433-.66-.823-.84-.866-.4m5.854.151c1.621.424 1.649.592.656 4.054-.459 1.6-.459 2.595 0 2.595.409 0 .744-.558.744-1.24 0-.682.549-2.302 1.221-3.6l1.22-2.36-2.62.093c-1.442.051-1.991.257-1.221.458m5.181.005c-.881 1.538-.408 5.961.681 6.379 1.489.571 3.694-1.236 2.959-2.425-.309-.499-.575-1.622-.591-2.495-.03-1.579-2.347-2.688-3.049-1.459m6.019-.005c1.621.424 1.649.592.656 4.054-.459 1.6-.459 2.595 0 2.595.409 0 .746-.63.749-1.4.003-.77.521-2.39 1.152-3.6 1.14-2.185 1.131-2.199-1.404-2.107-1.404.051-1.923.257-1.153.458m5.6 0c1.621.424 1.649.592.656 4.054-.459 1.6-.459 2.595 0 2.595.409 0 .746-.63.749-1.4.003-.77.521-2.39 1.152-3.6 1.14-2.185 1.131-2.199-1.404-2.107-1.404.051-1.923.257-1.153.458m5.006.24c-.273.441.023.594.672.345 1.924-.738 2.203.946.511 3.096-2.083 2.649-2.011 2.986.611 2.875 1.32-.055 1.647-.238.818-.455-1.277-.335-1.285-.511-.112-2.301.698-1.066 1.062-2.481.807-3.145-.522-1.36-2.565-1.616-3.307-.415m5.982 1.809c-1.481 2.426-1.494 2.62-.188 2.893.77.16 1.67.7 2 1.2 1.006 1.52 1.918-.759 1.553-3.882-.408-3.498-1.322-3.555-3.365-.211m5.127-1.468c-.901 2.348.032 5.668 1.593 5.668 1.866 0 2.91-2.593 2.014-5-.748-2.008-2.937-2.413-3.607-.668m6.073 1.468c-1.481 2.426-1.494 2.62-.188 2.893.77.16 1.67.7 2 1.2 1.006 1.52 1.918-.759 1.553-3.882-.408-3.498-1.322-3.555-3.365-.211m-31.388.267c-.762.762-2.291-.473-1.723-1.392.338-.546.785-.533 1.36.042.471.471.634 1.078.363 1.35m28.068 1.241c-.148 1.04-.628 1.821-1.068 1.734-1.026-.202-1.478-2.363-.841-4.023.722-1.883 2.241-.063 1.909 2.289m-28.018 1.442c.2.6-.1.9-.7.7-.578-.192-1.207-.822-1.4-1.4-.2-.6.1-.9.7-.7.578.193 1.208.823 1.4 1.4"
      />
    </svg>
  )
}

export default SvgNone;