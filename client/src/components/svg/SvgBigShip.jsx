import React from 'react';
import styles from './SvgBigShip.module.scss';

const SvgBigShip = () => {
  return (
    <svg className={styles.svg} x="0px" y="0px" viewBox="-10 0 430 225" >
      <path className={styles.path} strokeWidth="2"
        d="M349.692 1.875c-.276 1.031-.508 3.281-.514 5-.011 2.899-.188 3.125-2.457 3.125-4.281 0-6.721 1.384-6.721 3.813 0 2.082.182 2.174 3.75 1.89 2.926-.233 3.744-.022 3.724.958-.037 1.747-3.787 5.839-5.351 5.839-1.51 0-1.732 2.128-.314 3.005.647.399.366.829-.833 1.272-3.488 1.29-2.225 3.422 1.732 2.923 1.948-.245 2.886-.251 2.084-.012-1.951.581-1.848 1.683.208 2.22 1.821.476 2.241 2.639.698 3.593-.564.348-1.953-.502-3.322-2.035-1.294-1.448-2.649-2.633-3.012-2.633-.84 0-3.531 3.115-3.531 4.087 0 .823-2.019 1.747-3.818 1.747-.757 0-1.182-.898-1.182-2.5 0-3.239-1.56-3.239-2.208 0-.493 2.464-.576 2.5-5.812 2.5-4.134 0-5.313.273-5.313 1.232 0 1.043 1.642 1.178 10.625.877 11.913-.399 11.49.028-.833.843-11.07.731-10.411 2.145.927 1.99 5.589-.076 9.754.252 10.886.858 2.558 1.369 4.534-.302 3.803-3.216-.528-2.101-.515-2.106 1.196-.558 2.255 2.041 2.457 7.319.271 7.097-4.021-.409-4.952 1.215-1.458 2.543 3.939 1.498 2.562 3.334-2.5 3.334-3.519 0-4.584.29-4.584 1.25 0 1.28 1.12 1.548 5.303 1.265 1.587-.107 2.191.154 1.805.779-.32.517-1.268.722-2.108.456-1.833-.582-2.79.688-2.117 2.809.439 1.385 1.495 1.614 4.826 1.047.343-.058.625-.669.625-1.356 0-.688.375-1.25.833-1.25.458 0 .833.937.833 2.083 0 1.858-.344 2.083-3.174 2.083-1.745 0-3.902.551-4.791 1.224-1.485 1.122-1.227 1.226 3.124 1.25 2.657.015 5.004.449 5.337.988.439.71-.858.813-4.969.391-7.976-.817-11.326 3.015-8.472 9.689.556 1.299.06 1.458-4.535 1.458-3.765 0-5.06.282-4.795 1.042.247.709 2.114 1.002 5.844.917 4.39-.1 5.392.107 5.034 1.041-.955 2.488-10.839 1.54-11.732-1.125l-.769-2.291-1.436 2.768c-1.309 2.521-1.748 2.753-4.926 2.6-1.919-.092-4.146.069-4.948.357-3.453 1.242-4.109 1.278-5.651.315-1.393-.87-1.952-.691-3.881 1.238-2.939 2.939-2.418 3.272 3.542 2.269 10.408-1.751 67.865-1.83 67.865-.093 0 1.915-17.221 2.722-51.459 2.411-12.031-.109-21.869-.011-21.862.218.05 1.593 1.983 2.627 5.884 3.147l4.52.603-5.416.417-5.417.416-.256 3.542c-.279 3.857 1.228 4.993 1.659 1.25l.264-2.292 10-.637c8.422-.537 32.816-1.145 55.625-1.386 5.253-.056 7.483-1.119 4.166-1.986-.966-.252-.738-.413.674-.477 1.173-.053 2.861-.633 3.75-1.288 1.052-.775 2.738-1.036 4.82-.748 2.741.378 3.162.23 2.917-1.032-.337-1.74-4.784-3.508-5.59-2.223-.334.532-.925.416-1.604-.315-.663-.714-.731-1.158-.179-1.158.631 0 .638-.482.024-1.628-.824-1.541-.646-1.602 3.304-1.134 6.535.774 5.08-1.091-1.812-2.323-4.612-.824-6.064-.842-6.319-.076-.183.547-.664.995-1.07.995-.405 0-.566-.469-.356-1.042.21-.573.04-1.58-.379-2.238-.884-1.39-3.388.13-3.388 2.057 0 1.142-12.429 2.605-15.489 1.823-.877-.224.227-.45 2.453-.504 3.294-.078 3.955-.337 3.551-1.39-.302-.788-.152-1.08.387-.747 1.227.758 8.265-.386 8.265-1.344 0-.43-2.6-.782-5.778-.782-5.68 0-5.783-.039-6.042-2.285-.343-2.969-3.18-3.749-3.18-.874 0 2.384-3.76 2.649-5.418.382-.748-1.023-2.301-1.39-5.883-1.39-3.535 0-4.616-.25-3.951-.915 1.066-1.066 8.803-1.722 9.418-.8 1.77 2.655 4.852 1.593 5.926-2.041.607-2.059 1.585-3.744 2.173-3.744 1.46 0 1.346-2.478-.193-4.179-1.168-1.291-.969-1.345 2.708-.74 6.083 1.001 7.72.896 7.72-.497 0-.688-.532-1.25-1.181-1.25s-1.338-.469-1.531-1.042c-.277-.822-.611-.827-1.585-.024-1.469 1.212-7.122-1.42-6.713-3.125.133-.552.282-3.428.333-6.392l.092-5.39 2.792.524c1.768.332 2.793.194 2.793-.376 0-.639.5-.633 1.72.02 1.179.631 2.043.652 2.749.066.566-.469 5.042-1.113 9.946-1.43 4.905-.317 8.918-.897 8.918-1.287 0-.906-15.29-.895-19.194.014-2.123.493-3.235.372-3.991-.437-.869-.93-.284-1.121 3.439-1.121 9.938 0 22.246-1.108 22.248-2.002.001-.611-2.214-.825-6.667-.643l-6.668.272V31.73c0-1.41-.375-2.563-.834-2.563-.458 0-.833 1.076-.833 2.391 0 2.115-.36 2.45-3.125 2.907-5.431.898-5.827.743-6.615-2.59-.882-3.729-3.63-4.416-4.412-1.103-.459 1.943-2.515 3.518-2.515 1.925 0-2.412 2.64-5.838 4.187-5.433 1.7.444 2.422-1.687.892-2.632-.416-.257-.568-1.186-.338-2.064.416-1.59-2.069-1.744-8.282-.513-.802.159-1.459-.051-1.459-.466 0-.416 1.54-.756 3.423-.756 2.565 0 3.312-.287 2.982-1.148-.243-.632-.005-1.585.528-2.118.738-.737.685-1.146-.218-1.704-.855-.528-.385-.811 1.673-1.007 4.443-.423 4.824-4.856.418-4.856h-2.972V5c0-5.009-1.032-6.643-1.975-3.125m6.975 19.307c0 3.927.735 5.485 2.589 5.485 2.015 0 2.081-2.641.148-5.913-1.885-3.191-2.737-3.058-2.737.428M0 48.778c0 .702.937 3.127 2.083 5.389 1.146 2.261 2.084 4.828 2.084 5.704 0 .877 1.301 3.755 2.892 6.397 1.591 2.642 2.694 5.125 2.451 5.518-.243.393-.022.714.49.714s.7.375.417.833c-.284.459-.078.834.456.834.536 0 .749.58.476 1.293-.273.711-.167 1.089.236.84s1.402.576 2.219 1.832c1.328 2.041 1.336 2.161.071 1.124-3.103-2.543-2.236 1.509 1.14 5.327 4.758 5.381 26.497 65.048 30.818 84.584.558 2.521 1.903 8.354 2.99 12.963 2.384 10.108 5.344 29.725 5.344 35.416 0 5.004 1.012 5.205 10.836 2.153 6.503-2.021 16.251-2.664 18.085-1.194.553.443 1.355.589 1.781.326.427-.264 1.239.079 1.805.762 1.278 1.539 9.88 1.69 13.881.244 2.231-.807 4.478-.722 11.794.444 11.237 1.792 89.327.35 151.818-2.803 8.937-.451 25.625-1.191 37.083-1.645 23.343-.924 62.803-3.742 69.167-4.938 29.24-5.499 29.583-5.618 29.583-10.191 0-3.272-1.501-2.994-1.822.338-.439 4.552-17.467 8.013-41.82 8.501-16.978.339-78.446 2.089-99.067 2.82l-15.625.554v-2.709c.001-2.049-.354-2.692-1.458-2.642-.871.039-1.039.235-.416.486 1.597.644 1.238 3.091-.625 4.255-1.548.966-1.667.832-1.667-1.883 0-2.254-.334-2.909-1.458-2.858-.872.039-1.039.235-.417.486 1.533.619 1.27 2.317-.625 4.031-1.622 1.469-1.668 1.456-1.71-.496l-.044-2.004-1.308 1.875c-1.673 2.399-5.257 2.526-5.863.209-.537-2.052-1.766-2.212-1.607-.209.181 2.288-4.451 2.536-5.044.27-.457-1.748-1.924-2.43-1.924-.895 0 .459-.675.834-1.5.834s-1.907.406-2.404.904c-1.176 1.176-4.611.662-5.08-.76-.3-.909-.06-.915 1.355-.031.946.59 2.007.786 2.359.435.706-.706-1.213-2.182-2.863-2.202-.578-.007-1.692.737-2.477 1.654-.785.916-2.094 1.666-2.909 1.666-.814 0-1.481.563-1.481 1.25 0 .688-.375 1.25-.833 1.25-.459 0-.834-1.312-.834-2.916 0-3.24-1.347-3.974-1.912-1.042-.198 1.031-.406.188-.461-1.875-.074-2.727.123-3.409.719-2.5.566.861 1.015.965 1.446.333.344-.504 1.188-1.164 1.875-1.467.705-.311.433-.4-.625-.203-1.031.191-1.875.033-1.875-.352s1.031-.86 2.292-1.055c1.272-.196.603-.349-1.505-.343l-3.797.012.258 3.261c.165 2.084-.194 3.713-.995 4.513-1.115 1.115-1.253.742-1.253-3.389 0-3.872-.242-4.641-1.458-4.631-1.136.01-1.209.172-.328.73.853.54.886.867.136 1.331-.548.338-1.413.197-1.923-.313-1.149-1.149-3.655-1.209-4.338-.103-.288.467.034.615.744.343.69-.265 1.741-.175 2.335.2.749.471.313.848-1.418 1.225-2.118.461-1.894.559 1.458.643 4.314.107 4.609.466 2.661 3.246-1.665 2.378-5.787 2.519-7.006.24-1.17-2.185-1.087-5.303.179-6.722.879-.986.825-1.005-.347-.123-1.161.874-1.453.799-1.779-.457-.215-.826-.384.667-.376 3.318.008 2.651-.223 5.057-.513 5.347-.29.29-.527-1.808-.527-4.661 0-2.853-.33-4.984-.734-4.734-1.002.619-1.711 4.644-.817 4.644.395 0 .718.96.718 2.133s-.349 1.917-.776 1.653c-.427-.264-1.011-.098-1.299.367-.822 1.33-4.359.991-4.92-.471-.906-2.361-.535-4.415.953-5.282.802-.467 1.083-.848.625-.848-1.8.003-3.329 2.155-3.25 4.572.074 2.251-.204 2.563-2.436 2.733-3.79.289-5.635-4.595-2.439-6.457.802-.467 1.012-.86.466-.874-.546-.014-1.228.355-1.516.821-.33.535-1.43.311-2.986-.608-2.952-1.744-5.254-.761-5.493 2.346-.121 1.569-.058 1.64.289.332.675-2.539 1.801-3.398 2.948-2.25.55.55 1.687 1 2.526 1 3.428 0 1.601 5.5-1.895 5.706-4.455.263-6.1-2.348-4.647-7.373.588-2.033.57-2.043-.75-.416-.848 1.044-1.207 2.6-.962 4.166l.39 2.5-49.428-.416c-27.186-.229-49.678-.666-49.983-.971-1.468-1.47-4.816-35.287-3.85-38.898 2.29-8.563 13.141-14.255 27.313-14.327 8.422-.043 18.282-2.026 21.867-4.399 1.693-1.12 7.186-3.552 12.207-5.404 5.021-1.852 10.202-3.779 11.514-4.283l2.385-.915-2.171-1.708c-2.105-1.655-2.369-1.668-8.635-.423-3.555.706-11.044 2.051-16.642 2.987-5.598.937-10.848 1.944-11.667 2.238-4.027 1.447.365-.97 6.525-3.591 22.968-9.772 34.313-11.934 30.274-5.77-2.381 3.633 1.536 6.137 7.211 4.608 3.957-1.065 4.208-2.28.543-2.633-2.306-.223-2.675-.558-2.487-2.263.122-1.101-.343-2.863-1.032-3.915-.775-1.182-.939-2.108-.43-2.422.454-.281.824.029.824.687 0 .659.563 1.664 1.25 2.235.688.571 1.25 1.699 1.25 2.507 0 1.702 4.432 2.728 5.814 1.346 1.689-1.689 1.01-6.117-1.022-6.661-3.459-.927-4.794.499-1.458 1.558.916.291 1.666 1.066 1.666 1.723 0 .878-.44.754-1.666-.473-.917-.917-2.055-1.667-2.53-1.667-2.169 0 1.133-3.308 3.802-3.809 1.605-.301 3.251-1.142 3.658-1.869.986-1.762 22.02 2.045 31.53 5.707 6.978 2.687 7.706 2.849 7.706 1.72 0-.414-1.031-1.144-2.291-1.624a791.493 791.493 0 01-7.709-3.022l-5.416-2.151 14.583.385c15.328.405 22.719 1.801 32.917 6.218l4.166 1.805v5.472c0 5.687 4.439 12.433 6.251 9.501.445-.72.943-.544 1.768.621 2.126 3.008 12.398 4.721 12.398 2.068 0-.724-.495-1.01-1.25-.72-.833.319-1.25-.034-1.25-1.057 0-1.008-.788-1.695-2.292-1.999-1.26-.254-3.008-.739-3.884-1.078-1.349-.522-1.516-.325-1.094 1.287l.497 1.903-2.238-1.971c-1.232-1.083-2.426-2.11-2.656-2.282-.229-.171.383-.066 1.36.233 1.24.381 1.937.126 2.309-.843.471-1.229.698-1.248 1.974-.166.792.672 3.222 1.879 5.399 2.682 3.8 1.402 3.958 1.591 3.958 4.725 0 3.913 2.834 4.859 3.538 1.181.859-4.497-.075-5.905-4.933-7.436-2.522-.795-4.392-1.638-4.156-1.873.235-.236 2.612.246 5.281 1.07 2.67.824 5.838 1.404 7.041 1.288 1.354-.131 2.376.28 2.682 1.078 1.02 2.657 3.292 1.499 2.784-1.419-.416-2.39-.275-2.267 1.202 1.042 1.483 3.323 1.774 3.572 2.548 2.192.676-1.205.445-2.323-1.019-4.928-1.267-2.253-1.849-4.568-1.758-6.984.151-3.985-1.51-4.977-3.364-2.009-.975 1.561-4.012-2.974-4.012-5.99 0-1.79-5.064-11.507-5.77-11.071-.404.25-.189 2.236.478 4.414.667 2.178 1.522 5.459 1.9 7.293.378 1.833.925 3.896 1.216 4.583.436 1.032-.177 1.201-3.517.97-2.579-.178-4.47.124-5.218.833-.645.613-1.923 1.114-2.839 1.114-1.734 0-1.941-.387-6.79-12.706-1.307-3.321-2.871-6.04-3.475-6.042-1.171-.003-.917 1.392 1.198 6.558.632 1.545 1.158 3.795 1.168 5 .01 1.204.76 3.824 1.667 5.822 2.301 5.071 2.146 5.577-1.759 5.733l-3.408.136.283-5.168.282-5.167-5.465-2.678c-22.122-10.84-75.819-33.198-76.62-31.902-.403.652-.736.469-1.015-.558C134.539 89.784 0 42.302 0 48.778m21.545 27.658c-.755 1.985-1.794 3.21-2.828 3.336-.898.109-1.157-.016-.574-.279 1.796-.809 3.688-5.369 3.197-7.708-.441-2.101-.42-2.117.468-.344.712 1.421.65 2.596-.263 4.995m-2.676-4.353c-1.359 1.36-3.036 1.666-3.036.556 0-1.132 1.007-1.806 2.699-1.806 1.411 0 1.448.139.337 1.25m325.501 5.839c-.219 1.143-.751 2.078-1.183 2.078-.432 0-.528-.417-.213-.927.315-.509.137-1.195-.395-1.524-.533-.33-.725-1.235-.427-2.012.826-2.153 2.7-.138 2.218 2.385M63.333 89.567c9.396 2.969 21.49 6.782 26.875 8.472 5.385 1.69 9.637 3.228 9.447 3.417-.189.189-5.72-1.349-12.291-3.419-6.571-2.07-19.247-5.868-28.169-8.441-8.922-2.574-16.391-4.848-16.598-5.054-1.428-1.428 6.062.387 20.736 5.025m309.167 2.1c0 .458.395.833.878.833.593 0 .718 3.05.385 9.375-.793 15.079-1.244 18.344-2.405 17.381-.584-.485-8.378-.944-18.476-1.089-16.895-.242-17.46-.305-17.288-1.917 1.064-10.002.825-20.491-.462-20.244-1.628.313-2.511 4.878-2.626 13.577-.113 8.575-1.382 10.863-4.165 7.51-.566-.683-1.362-1.036-1.769-.785-.406.252-.744-.221-.751-1.05-.021-2.444-1.499-4.249-2.372-2.896-.579.897-.814.859-1.22-.199-.276-.72-.235-1.27.093-1.221 1.392.208 2.92-.145 2.49-.575-1.506-1.506-7.851-1.182-9.649.493l-1.89 1.761.57-8.81c.507-7.857.421-8.811-.804-8.811-.755 0-1.4.281-1.434.625-.034.344-.503 5.313-1.042 11.042l-.98 10.416-4.637.246c-5.195.274-5.879 1.189-7.053 9.429-.467 3.276-.321 3.916.988 4.35.845.281 2.174.977 2.954 1.547 2.23 1.629 2.693.199 1.202-3.706-1.673-4.381-1.72-5.277-.213-4.026.637.528 1.58 2.637 2.095 4.686 1.42 5.636 4.248 5.375 4.248-.393 0-2.265.412-4.373.917-4.684.638-.395.828.894.625 4.241l-.292 4.808 4.222.11c4.85.127 6.395-2.989 1.755-3.538-2.105-.249-3.25-1.82-1.328-1.82.574 0 .693-.941.329-2.598-.437-1.99-.306-2.51.559-2.219.621.21 1.151 1.473 1.177 2.808.035 1.806.407 2.363 1.458 2.181 2.005-.348 1.862 3.93-.289 8.652-1.739 3.817-3.769 4.28-3.085.704.381-1.994-.68-2.861-3.5-2.861-1.166 0-1.595.934-2.008 4.375-.832 6.923-.825 6.943 2.91 8.062 4.088 1.224 4.85.549 4.87-4.312.007-1.719.388-3.125.846-3.125.459 0 .834.375.834.833 0 .459 1.343.834 2.986.834 3.397 0 3.599-1.733.294-2.513-1.306-.308-1.664-.691-1.019-1.09 2.535-1.566 5.025.281 4.936 3.66-.065 2.491-.385 3.183-1.35 2.92-.695-.19-2.085-.58-3.088-.868-1.346-.386-2.078-.049-2.792 1.285-.663 1.239-.679 1.629-.05 1.24.504-.311.916-.162.916.331 0 .494 1.338 2.197 2.973 3.785 2.322 2.255 2.897 3.393 2.625 5.194l-.348 2.306-.125-2.187c-.117-2.04-1.058-2.537-14.083-7.431-7.677-2.884-15.271-5.761-16.875-6.393l-2.917-1.149 2.828.458c1.571.254 3.33.041 3.958-.481.889-.737 1.131-.577 1.131.752 0 1.396 5.476 4.347 8.065 4.347.615 0 .2-4.12-.679-6.75-1.345-4.022-2.1-4.601-3.891-2.98-1.91 1.729-2.996 1.802-2.366.16 1.042-2.715-6.627-4.092-8.723-1.567-.622.75-1.137 1.963-1.144 2.695-.007.732-.639 1.453-1.405 1.602-1.05.204-1.281-.161-.936-1.48.306-1.17.1-1.67-.622-1.507-.687.155-1.57-1.573-2.428-4.756-2.316-8.588-3.446-11.25-4.775-11.25-.89 0-1.091.441-.668 1.458.334.802.797 3.248 1.03 5.434.233 2.187.75 4.178 1.149 4.425.968.598.935 4.516-.038 4.516-.42 0-.911-.441-1.091-.981-.531-1.594-2.14-.028-2.73 2.658-.495 2.252-.862 2.49-3.841 2.49-2.638 0-3.445.374-4.048 1.875l-.754 1.875-.053-1.875c-.07-2.498-11.719-2.977-11.719-.482 0 .766-.553 2.003-1.229 2.75-3.048 3.369-.221 7.303 6.69 9.311 7.448 2.164 7.736 3.037.372 1.129-6.056-1.569-6.21-1.498-5.142 2.371.8 2.896.78 2.93-1.243 2.161-1.131-.43-2.857-.782-3.836-.782-3.136 0-.446 1.531 4.871 2.771l5.06 1.18-.089-2.688c-.102-3.076 3.758-3.127 4.209-.056.124.849.72 1.862 1.323 2.252.904.583.898.836-.029 1.434-.805.519-.385.835 1.472 1.108 2.319.34 2.674.107 3.313-2.185l.716-2.566.861 2.084c.685 1.657.579 2.306-.521 3.177-1.191.943-.923 1.058 1.952.833 3.23-.252 3.348-.368 3.8-3.753.256-1.921.197-3.327-.132-3.123-.329.203-1.476-.017-2.549-.49-1.859-.817-1.864-.841-.108-.504 2.213.425 3.968-1.406 3.22-3.358-1.411-3.676.374-8.521 2.825-7.667l2.304.803-1.547 3.035c-2.249 4.411-1.997 11.665.421 12.139 1.352.266 1.217.374-.575.461-3.306.16-2.148 1.363 2.528 2.626 2.189.591 4.576 1.584 5.306 2.207 2.604 2.224 7.805 1.833 8.089-.609.372-3.193-7.347-6.013-8.398-3.069-1.39 3.892-1.94-1.414-1.024-9.884.448-4.136.357-6.101-.301-6.507-.518-.32-.942-1.31-.942-2.2 0-1.784 2.121-2.149 4.166-.717.99.693.874.77-.555.37-2.733-.765-3.075.875-.59 2.83 2.847 2.24 5.312 2.27 5.312.066 0-.943.556-1.666 1.279-1.666 1.043 0 1.106.324.34 1.756-1.274 2.38-.822 2.661 9.214 5.716 12.094 3.682 12.562 3.898 11.941 5.515-.424 1.106-.138 1.278 1.475.89 1.626-.391 1.571-.301-.291.482-3.05 1.281-2.922 2.589.209 2.13 1.787-.263 2.5-.026 2.5.829 0 .878.779 1.106 2.916.857 2.379-.278 2.917-.064 2.917 1.159 0 .943.618 1.499 1.667 1.499 2.004 0 2.267 2.631.416 4.167-1.046.868-1.25.739-1.25-.791 0-4.22-6.302-5.199-7.83-1.216-.248.645-1.025 1.173-1.727 1.173-.718 0-1.276.725-1.276 1.658 0 1.153.57 1.667 1.875 1.689 4.398.075 7.194.444 7.778 1.028.344.344 1.481.625 2.529.625 1.047 0 4.033.555 6.635 1.233 2.603.678 5.059 1.031 5.458.784 1.37-.847.723-2.904-1.15-3.657-1.823-.733-1.813-.756.347-.807 1.222-.029 2.375-.512 2.563-1.073.187-.561.558-.186.824.833.267 1.02.145 1.854-.27 1.854-.416 0-.756.759-.756 1.687 0 1.662 3.433 3.765 5.582 3.42.549-.088 3.359.385 6.243 1.051 5.31 1.227 7.899.663 7.055-1.537-.199-.519-.078-3.178.27-5.908l.632-4.963.109 4.742c.06 2.609.515 4.994 1.01 5.3.496.306.676 1.453.401 2.549-.363 1.446-.153 1.992.766 1.992.696 0 1.266-.446 1.266-.992s.505-.301 1.123.544c1.486 2.032 3.043.958 3.043-2.101 0-1.348.402-2.451.893-2.451s.825.844.741 1.875c-.319 3.949-.022 5.18 1.004 4.154.739-.739 1.237-.629 2.083.459 1.045 1.342 1.187 1.333 2.336-.153 1.181-1.525 1.253-1.506 2.032.543 1.265 3.329 6.967 2.908 7.571-.559.4-2.293 2.507-4.161 2.507-2.221 0 .496-.375.902-.833.902-1.201 0-1.028 3.943.208 4.743.573.371 2.354 1.069 3.958 1.553 1.966.592 2.842 1.319 2.687 2.229-.127.742.154 1.588.625 1.878 1.394.862 1-5.078-.415-6.253-.699-.579-1.073-1.251-.832-1.492.242-.242-.149-1.089-.867-1.882-.866-.957-1.007-1.628-.419-1.992 1.124-.695 1.169-3.784.055-3.784-.459 0-.834-.492-.834-1.093 0-1.173-4.364-4.74-5.799-4.74-.477 0-.867.75-.867 1.667 0 .916-.364 1.666-.808 1.666-.445 0-.759 1.315-.698 2.921.06 1.606-.085 3.115-.323 3.353-.851.85-3.171-.645-3.171-2.044 0-.997-2.004-2.253-6.667-4.178-6.525-2.694-8.331-4.218-5-4.218.917 0 1.667.375 1.667.833 0 1.413 1.522.919 1.925-.625.296-1.13.403-1.049.478.361.086 1.614.796 2.161 3.844 2.962.467.123.762-1.237.675-3.115l-.155-3.333.759 3.658c.716 3.448 2.778 6.759 4.21 6.759.354 0 .894-2.004 1.2-4.453.517-4.141.696-4.426 2.56-4.069 2.565.49 2.749-2.072.354-4.928-1.557-1.856-4.087-.917-2.864 1.063.468.757-3.111.423-4.47-.417-.684-.422-.827-.174-.457.791.375.977.184 1.288-.625 1.018-.729-.242-1.169-1.599-1.175-3.617-.01-3.515-1.204-4.296-6.835-4.472-1.463-.046-2.916-.498-3.23-1.006-.369-.597-.019-.761.993-.464 7.325 2.149 12.07 1.179 7.188-1.47-1.261-.683-1.823-1.258-1.25-1.276 3.73-.12-.182-12.534-3.949-12.534-.659 0-.293 9.694.439 11.62.369.973.17.954-1.038-.099-.822-.717-2.056-1.51-2.744-1.763-.961-.353-.899-.475.266-.525 3.281-.143 1.274-3.752-2.558-4.601-3.478-.771-4.324-1.55-2.744-2.526.438-.271.61-.978.382-1.572-.228-.594-.017-2.124.468-3.4l.882-2.321 1.706 2.169c.939 1.193 1.493 2.514 1.233 2.935-.59.954.3 3.417 1.235 3.417.38 0 .809-1.219.952-2.709.245-2.542.479-2.724 3.803-2.964 4.49-.325 4.452-.584-.833-5.713-4.289-4.162-10.554-6.585-11.803-4.565-.244.396-6.642.531-14.217.302-13.474-.409-13.772-.381-13.772 1.294 0 1.84-1.257 1.629 18.958 3.195 5.703.442 6.042.581 6.042 2.481 0 1.744-.389 2.012-2.917 2.012-3.183 0-3.691 1.096-1.585 3.424 1.507 1.664 1.093 2.85-1.204 3.451-1.397.365-1.521.018-1.154-3.233.407-3.612.389-3.642-2.198-3.642h-2.609v6.667c0 4.403-.32 6.666-.942 6.666-.612 0-.776-1.023-.469-2.916.502-3.093-1.241-4.098-3.387-1.952-.73.73-1.274.708-2.239-.094-.701-.581-1.906-.815-2.677-.519-1.532.588-2.753-.76-2.773-3.06-.009-1.004.637-1.459 2.071-1.459 1.296 0 2.083.473 2.083 1.25 0 .738.769 1.255 1.875 1.262 1.031.006 2.719.237 3.75.514 1.72.46 1.875.221 1.875-2.891 0-3.545-2.614-5.051-7.208-4.155-.92.18-2.329-.63-3.491-2.006-2.259-2.673-3.194-2.886-3.727-.849-.35 1.342-.388 1.338-.477-.056-.074-1.152-.521-1.38-1.868-.952-1.192.378-1.585.26-1.201-.361.314-.507 1.439-.922 2.5-.922 2.149 0 3.288-3.195 2.378-6.673-.37-1.417-.225-1.75.552-1.27.776.48.906.185.492-1.12-.561-1.765-.512-1.771 16.161-1.771h16.722v3.334c0 2.407.348 3.333 1.25 3.333.847 0 1.25-.848 1.25-2.629 0-2.494.079-2.559 1.524-1.25.838.758 2.125 1.379 2.86 1.379.735 0 2.137 1.125 3.116 2.5 1.756 2.466 4.167 3.377 4.167 1.574 0-.509-1.547-2.774-3.438-5.033l-3.439-4.107.607-15.8.606-15.801h-2.168c-1.192 0-2.168.375-2.168.834m-233.698 10.126l2.448 2.626-2.708-1.95c-1.49-1.072-2.709-2.254-2.709-2.626 0-1.08.375-.833 2.969 1.95m159.239-.335c-.95 3.42-1.489 20.209-.649 20.209.476 0 1.051-1.219 1.277-2.709 1.57-10.347 1.091-23.692-.628-17.5m-177.624 6.936c2.291.816 3.77 1.512 3.286 1.545-1.203.083-11.203-3.328-11.203-3.822 0-.433 1.59.024 7.917 2.277m31.969-.849c1.541.941 2.581 1.932 2.311 2.202-.269.27-.968.114-1.552-.347-1.717-1.353-5.475-1.995-5.809-.991-.185.555-1.032.313-2.191-.627l-1.888-1.532 3.163-.208c2.029-.133 4.169.406 5.966 1.503m-24.469 4.122c1.774 1.96 3.301 2.203 2.615.416-.264-.687-.147-1.25.259-1.25.407 0 1.426-.218 2.266-.484 1.445-.459 1.448-.421.068.717-1.922 1.583-1.84 2.078.417 2.513 1.031.198.112.412-2.042.474-2.767.08-4.167.542-4.767 1.572-.467.802-.86 1.172-.874.822-.014-.35.443-1.404 1.016-2.342.886-1.452.8-1.885-.576-2.906-.89-.659-1.229-1.199-.754-1.199.475 0 1.542.75 2.372 1.667m21.25.833c0 1.375-.31 2.5-.689 2.5-.379 0-.524-1.125-.322-2.5.201-1.375.511-2.5.689-2.5.177 0 .322 1.125.322 2.5m-8.336 3.125c.001.573.377 1.042.836 1.042 1.205 0 1.027 1.84-.536 5.523-.764 1.801-1.541 2.736-1.759 2.117-.214-.611-1.567-1.828-3.006-2.706-1.439-.877-2.134-1.596-1.545-1.598.589-.002 2.052.64 3.251 1.426l2.18 1.428-.617-3.303c-.339-1.817-.677-3.342-.751-3.389a88.547 88.547 0 00-1.702-.928c-1.33-.715-1.172-.828 1.04-.748 1.479.054 2.608.545 2.609 1.136m183.336.31c0 1.425-.228 1.58-1.171.798-.666-.553-2.101-.738-3.333-.429-2.023.508-2.867-.322-1.607-1.582 1.472-1.472 6.111-.551 6.111 1.213m-178.691 3.708c-.72.72-1.309 1.908-1.309 2.639 0 .731-.206 1.123-.458.872-.874-.875.646-4.821 1.858-4.821 1.031 0 1.017.202-.091 1.31m181.251 4.439c-.95 1.334-1.727 2.836-1.727 3.338 0 1.721 1.576.914 2.669-1.368 2.118-4.418 5.036-2.887 4.124 2.163-.31 1.714-.708 1.909-3.109 1.519-2.591-.42-2.771-.29-3.045 2.201-.291 2.638-.295 2.635-.928-.685-.349-1.833-.952-3.923-1.338-4.644-.491-.915-.216-1.615.909-2.318.887-.554 2.033-2.026 2.546-3.272.739-1.791 1.007-1.961 1.28-.812.19.799-.431 2.544-1.381 3.878m-135.004 7.479c-.489.915-.89 2.314-.89 3.11 0 .796-.622 2.136-1.383 2.977-.762.841-1.129 1.784-.818 2.095.531.532 8.116.454 8.658-.088.609-.609-.895-2.934-2.153-3.328-1.536-.481 2.103-.078 3.926.434.63.177 1.31-.124 1.511-.67.214-.58-1.043-1.414-3.027-2.009-2.205-.66-3.317-1.449-3.178-2.254.333-1.925-1.652-2.125-2.646-.267m52.682 8.426c.241.924.143 1.68-.219 1.68s-.835-.926-1.052-2.058c-.461-2.411.626-2.087 1.271.378m39.978-.262c.801 1.758.797 2.298-.018 2.57-.567.189-1.037.969-1.044 1.733-.011 1.113-.157 1.161-.741.24-.406-.641-1.175-.871-1.743-.52-.731.451-.858.131-.453-1.144.365-1.152.203-1.771-.467-1.771-.565 0-.747-.28-.404-.623.343-.343 1.151.098 1.797.98 1.491 2.04 2.718.948 1.367-1.217-1.233-1.973-1.265-2.473-.159-2.473.468 0 1.307 1.001 1.865 2.225m47.926 6.043c-.194 5.682-.366 6.349-1.238 4.791-1.227-2.193-1.4-8.059-.238-8.059.459 0 .834-.75.834-1.667 0-.916.195-1.666.434-1.666s.333 2.97.208 6.601m-193.002 4.183c-8.301 5.287-9.41 17.153-1.748 18.686 4.586.917 5.386-2.207.822-3.21-4.71-1.034-6.091-5.292-3.142-9.686 4.398-6.551 13.388-7.65 15.046-1.839 1.049 3.675-5.928 16.904-10.977 20.811-5.257 4.069-9.436 2.908-11.97-3.324-1.052-2.588-1.423-2.986-1.458-1.564-.082 3.351 3.076 8.43 5.588 8.989 1.255.279 2.944.687 3.753.907 3.465.941 12.249-10.048 16.653-20.832 3.07-7.519-5.37-13.522-12.567-8.938m104.177-.217c.147.758 1.75 1.827 3.599 2.401l3.334 1.035-3.854-.434c-4.915-.553-5.95 3.11-1.334 4.719 4.119 1.436 5.349 1.111 5.882-1.553.401-2.002.806-2.347 2.299-1.957 1.315.344 1.705.153 1.421-.694-.215-.642-.921-1.178-1.569-1.19-.648-.012-1.627-.302-2.174-.645-3.216-2.015-7.869-3.044-7.604-1.682m67.766 1.099c1.65.709 1.65.717-.042.775-.939.032-2.158.509-2.708 1.059-.778.777-1 .592-1-.834 0-1.926.984-2.188 3.75-1m45.673 8.5c.004 3.804-.255 7.731-.576 8.725-.451 1.397-.182 1.935 1.181 2.368.97.308 1.599.725 1.397.927-.338.338-3.049-.193-11.842-2.321-5.764-1.396-10.402-3.38-9.879-4.228.312-.504.703-.516 1.025-.03.944 1.422 7.604 2.706 7.604 1.465 0-.648.627-.919 1.561-.675 1.265.331 1.669-.198 2.128-2.786 1.526-8.597 3.606-8.746 3.391-.242-.123 4.903.065 5.827 1.145 5.62 1.801-.347 2.634-5.283 1.713-10.145-1.08-5.705-1.022-7.762.187-6.553.567.567.961 3.784.965 7.875m9.324-7.672c.296.48-.384.754-1.618.652-1.171-.097-2.129-.47-2.129-.828 0-.948 3.143-.8 3.747.176m-93.747 2.922c0 1.235-.477 2.084-1.172 2.084-.95 0-.99-.392-.208-2.077 1.206-2.6 1.38-2.601 1.38-.007m46.97-.004c-.263.684-.814 1.037-1.224.784-1.177-.727-.87-2.03.478-2.03.743 0 1.036.489.746 1.246m11.854 1.569c-.458 2.443-.278 2.881 1.366 3.322 3.15.844 3.977.608 3.977-1.137 0-.916.415-1.666.922-1.666.508 0 .707-.563.443-1.25-.588-1.533.602-1.646 1.824-.174.665.801.454 1.349-.823 2.147-1.327.829-1.605 1.623-1.229 3.507.53 2.649-.328 3.165-1.971 1.186-.57-.687-1.342-1.25-1.714-1.25-3.394 0-4.729-1.584-3.81-4.522 1.177-3.759 1.706-3.844 1.015-.163m-191.788.074c-1.188 1.187-2.007 2.617-1.82 3.177.379 1.138 3.229 1.958 3.04.875-.311-1.787.193-2.774 1.418-2.774 1.013 0 1.213.508.817 2.083-.737 2.937.863 2.606 2.475-.512 1.423-2.752 1.084-3.541-1.91-4.446-1.372-.414-2.43.006-4.02 1.597M345 158.701c0 2.035-.375 3.932-.833 4.216-.485.299-.834-.531-.834-1.985 0-1.375-.358-2.722-.797-2.993-1.109-.685-.11-2.939 1.303-2.939.818 0 1.161 1.093 1.161 3.701m-92.083-2.034c.283.458 1.077.833 1.765.833.687 0 1.018-.375.735-.833-.284-.459-1.078-.834-1.765-.834-.688 0-1.019.375-.735.834m59.255 9.651c-1.612 4.201.337 7.015 4.857 7.015 2.633 0 2.843-1.45.263-1.817-1.624-.23-1.839-.686-1.602-3.391.292-3.339-2.399-4.722-3.518-1.807m-184.672.664c0 .273 1.313 1.044 2.917 1.714 1.604.671 2.916 1.569 2.916 1.998 0 .995 3.133 1.831 4.664 1.243.643-.247 1.17-.824 1.17-1.282 0-.458-.583-.61-1.296-.336-.712.273-2.306-.231-3.542-1.122-2.282-1.644-6.829-3.12-6.829-2.215m151.267.49c-.371.602 5.422 1.95 5.98 1.392.138-.138-1.06-.654-2.664-1.146-1.603-.492-3.095-.603-3.316-.246M263.75 170c-.283.458.047.833.735.833.687 0 1.482-.375 1.765-.833.283-.458-.047-.833-.735-.833-.687 0-1.482.375-1.765.833m-90.417.704c0 3.127 93.546 17.685 126.667 19.713 4.813.294 9.5.738 10.417.986 1.09.295 1.378.17.833-.36-.458-.447-9.833-1.817-20.833-3.045-24.962-2.787-76.081-10.377-95.417-14.167-19.641-3.849-21.667-4.141-21.667-3.127m94.487-.106c.656.656 13.504 3.512 15.513 3.449 1.179-.037-13.717-3.928-15.347-4.009-.42-.021-.495.231-.166.56m-22.403 1.069c-1.051.451-1.205.716-.417.716.688 0 2-.322 2.917-.716 1.05-.452 1.204-.717.416-.717-.687 0-2 .323-2.916.717m4.166.833c-.283.458.048.833.735.833.688 0 1.482-.375 1.765-.833.284-.458-.047-.833-.735-.833-.687 0-1.481.375-1.765.833m91.181.534c.836.721-2.972.189-4.097-.572-.913-.618-.576-.695 1.25-.287 1.375.308 2.656.694 2.847.859m-86.597.006c0 .722 18.193 4.044 18.804 3.434.178-.179-3.136-.982-7.365-1.784-4.229-.803-8.533-1.665-9.564-1.915-1.032-.251-1.875-.131-1.875.265m103.737 3.165c2.069.31 3.763.886 3.763 1.279 0 .393-1.31.353-2.912-.089-1.601-.442-3.382-.728-3.958-.635-.576.093-1.609-.047-2.297-.313a70.714 70.714 0 00-2.5-.899c-.776-.258-.539-.441.625-.482 1.031-.036 1.886-.535 1.9-1.108.016-.624.345-.495.821.32.448.767 2.44 1.609 4.558 1.927m11.837 3.587c-.21.802-.381.146-.381-1.459 0-1.604.171-2.26.381-1.458.21.802.21 2.115 0 2.917M246.667 177.5c-1.65.528-1.737.667-.417.667.917 0 2.604-.3 3.75-.667 1.65-.528 1.736-.667.417-.667-.917 0-2.604.3-3.75.667m5 .833c-1.035.669-.964.808.416.808.917 0 2.23-.363 2.917-.808 1.035-.669.963-.807-.417-.807-.916 0-2.229.363-2.916.807m5 .718c0 .394 1.968.953 4.375 1.242 6.898.829 8.167.473 2.708-.759-5.989-1.351-7.083-1.426-7.083-.483m121.778 2.327c-.784 1.349-.897 1.235-.92-.92-.018-1.792.224-2.209.895-1.538.659.659.666 1.355.025 2.458m-181.57-.804c.802.21 2.115.21 2.917 0 .802-.209.146-.381-1.459-.381-1.604 0-2.26.172-1.458.381m8.76.849c1.036.199 2.536.191 3.333-.017.797-.209-.051-.372-1.885-.363-1.833.01-2.485.18-1.448.38m9.166.833c1.037.199 2.537.192 3.334-.017.796-.208-.052-.371-1.885-.362-1.833.009-2.485.18-1.449.379m8.324.832c1.031.199 2.719.199 3.75 0 1.031-.199.188-.361-1.875-.361-2.062 0-2.906.162-1.875.361m8.75.82c.802.209 2.115.209 2.917 0 .802-.21.146-.381-1.459-.381-1.604 0-2.26.171-1.458.381m-32.917 3.347c1.032.198 2.719.198 3.75 0 1.032-.199.188-.361-1.875-.361-2.062 0-2.906.162-1.875.361m11.262.843c1.267.192 3.142.186 4.166-.011 1.025-.198-.011-.355-2.303-.349-2.291.007-3.13.168-1.863.36m11.666.833c1.267.192 3.142.187 4.167-.011s-.011-.355-2.303-.348c-2.292.006-3.13.168-1.864.359m13.531.236l-4.167.571 4.167.118c2.291.065 4.729-.245 5.416-.689 1.45-.937 1.414-.937-5.416 0m8.75.833c-.898.58-.052.811 3.002.821 2.339.007 6.652.184 9.584.395l5.33.382-4.583-.726c-9.332-1.479-12.113-1.661-13.333-.872m144.549.889c-.884 1.429-.093 1.569 1.653.293 1.352-.989 1.394-1.182.256-1.182-.748 0-1.607.4-1.909.889m-202.248 3.034c1.037.199 2.537.191 3.333-.017.797-.209-.051-.372-1.884-.363-1.834.01-2.486.18-1.449.38m20.805.845c1.479.184 4.104.187 5.833.007 1.729-.181.519-.331-2.689-.335-3.209-.004-4.623.144-3.144.328m25.435.839c1.719.18 4.532.18 6.25 0 1.719-.18.313-.327-3.125-.327-3.437 0-4.843.147-3.125.327m20.625.23c3.772.71 13.078 1.099 12.431.519-.191-.171-3.91-.517-8.264-.769-5.549-.32-6.795-.246-4.167.25m-71.032.586c1.037.199 2.537.191 3.334-.017.796-.209-.052-.372-1.885-.363-1.833.01-2.485.18-1.449.38m12.074.841c1.26.19 3.323.19 4.583 0 1.261-.191.23-.348-2.291-.348s-3.552.157-2.292.348m12.5.833c1.26.191 3.323.191 4.583 0 1.261-.191.23-.347-2.291-.347s-3.552.156-2.292.347m12.5.833c1.26.191 3.323.191 4.583 0 1.261-.191.23-.347-2.291-.347s-3.552.156-2.292.347m12.5.834c1.26.19 3.323.19 4.583 0 1.261-.191.23-.348-2.291-.348s-3.552.157-2.292.348m-23.542 1.06l-34.583.454 45.764.194c25.17.107 45.608.058 45.417-.108-.839-.733-24.641-.96-56.598-.54m5.16 4.614c.241.24 3.959.54 8.264.666 4.304.127 8.67.693 9.701 1.259 1.043.572 1.875.673 1.875.227 0-.44.469-.968 1.042-1.171.573-.204-.008-.237-1.291-.074-1.385.176-2.127-.037-1.826-.524.321-.52-2.919-.821-8.848-.821-5.145 0-9.158.197-8.917.438m28.403.902c.572.573 22.429.446 23.008-.133.206-.206-5.001-.374-11.571-.374-6.569 0-11.716.229-11.437.507m-26.063.646c0 .74 3.372 1.127 3.799.436.256-.416-.493-.755-1.666-.755s-2.133.143-2.133.319m-46.274 1.643c.972.711 1.344 1.654 1.003 2.544-.321.836-.207 1.206.281.904 1.702-1.052.93-4.577-1.002-4.577-1.741 0-1.754.053-.282 1.129m7.108-.296c1.615 1.044 2.5 1.044 2.5 0 0-.458-.844-.827-1.875-.82-1.517.01-1.636.167-.625.82m26.875-.307c.802.236 1.458 1.125 1.458 1.974s-.656 1.738-1.458 1.974c-1.134.335-1.087.392.208.258 1.171-.12 1.667-.784 1.667-2.232 0-1.448-.496-2.112-1.667-2.232-1.295-.134-1.342-.077-.208.258m25 0c1.736.512 1.975 3.641.277 3.641-.649 0-1.371-.385-1.604-.854-.233-.47-.326-.377-.208.208.118.584.934 1.062 1.812 1.062 2.307 0 2.241-4.077-.069-4.315-1.295-.134-1.342-.077-.208.258"
      />
    </svg>
  )
}

export default SvgBigShip;