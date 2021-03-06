import React from 'react';
import styles from './SvgLetters.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const SvgZero = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-50 -30 600 600" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M412 73q-11 -20 -33.5 -33t-41.5 -21q-5 -2 -9 -3.5t-9 -3.5q-9 -4 -18 -5q-14 -4 -28.5 -5.5t-29.5 -1.5q-51 0 -89.5 16.5t-64.5 46t-39 69t-13 86.5q0 8 0.5 16.5t1.5 16.5q0 5 0.5 8.5t1.5 7.5q2 8 2 12q4 16 9.5 30.5t10.5 28.5q3 9 7.5 18l8.5 17q2 5 5.5 13.5
      t8.5 10.5l9 14l30 38q29 33 57.5 53.5t59.5 28.5q4 1 8.5 1h9.5q16 0 23 7q2 -1 5.5 -2.5t6.5 -1.5t4 1q3 3 7 3q3 0 5 -2q3 -3 4 -3q2 0 2 1.5t2 1.5t3.5 -2t3.5 -2t3 1q1 -2 4.5 -4.5t5.5 -4.5q13 -9 14 -23v-7q0 -4 -0.5 -5t-0.5 -3q-2 -4 -2 -5l-3 -7q-2 -4 -4 -4l9 -8
      q4 -3 9 -9t11 -11t11 -11q5 -5 8 -11t8 -11l18 -26q3 -4 5.5 -9t4.5 -10l4.5 -9t4.5 -10t3.5 -9.5l3.5 -10.5l5 -20q2 -7 4 -20q1 -6 1.5 -10.5t0.5 -11.5q0 -3 0.5 -5.5t0.5 -5.5v-27v-9.5t-1 -3.5v-12q-1 -11 -2.5 -22.5t-3.5 -22.5l-3 -8q0 -2 -0.5 -3.5l-1.5 -4.5
      q-3 -13 -10.5 -25t-14.5 -23q-2 -2 -3.5 -4.5t-3.5 -4.5zM363 147q2 5 2.5 5t2.5 4q11 14 15.5 30.5t4.5 34.5q0 23 -4.5 46.5t-8.5 43.5q-3 17 -10.5 32.5t-17.5 29.5t-22.5 23.5t-23.5 21.5q-4 4 -7 5t-7 3l-16 6q-6 2 -16 4l-23 -8q-21 -8 -31.5 -18t-27.5 -32
      q-28 -36 -40 -78t-12 -80q0 -69 33.5 -101t87.5 -32q27 0 51 7t44 23q4 3 7 6.5t7 7.5z"
      />
    </svg>
  )
}

export const SvgOne = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-50 -30 600 600" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M234 8q-1 1 -3 5t-3 4t-1 -3l-5 14l1 -1q0 -1 1 -2q-2 11 -3.5 17t-1.5 13t1 11q1 7 1 12v16q-1 1 -1 4q0 2 1 3t1 3q-3 4 -3 12v55q0 12 2 31.5t4 41.5t4.5 44.5t4.5 39.5t5.5 44.5t7.5 51.5q-8 -4 -15.5 -8.5l-22.5 -13.5q-6 -4 -15 -8.5l-19 -9.5q-8 -4 -17.5 -9
      t-17.5 -10q-7 -4 -16 -4q-16 0 -25 9l-11 12q-2 0 -2.5 6t-0.5 10q0 2 -1 3.5t-1 3.5t1 4q3 10 9 18q6 6 13.5 11.5t14.5 9.5q13 5 23.5 12t23.5 12q5 2 17.5 8.5t26.5 11.5q6 2 10 4t9.5 4t13 4.5t21.5 6.5l9 3q1 0 6 1t11 2t11 2t6 1q19 -7 26.5 -21.5t12.5 -35.5
      q0 -4 -1 -6q0 -5 -3 -10.5t-5 -16.5l-11 -53q-1 -4 -1.5 -7t-0.5 -6l-2 -10l-3 -18t-1 -13q0 -2 -2 -8t-2 -10.5t-2 -14.5q-1 -9 -2 -15t-2 -14l-1 -13q-1 -12 -2 -21t-1 -14q-2 -25 -3.5 -53.5t-1.5 -45.5q0 -8 1 -12t2.5 -8.5l4 -12t6.5 -23.5q2 -8 2 -12q0 -13 -6 -23
      t-14 -17t-16.5 -10.5t-13.5 -3.5q-14 0 -22 7z"
      />
    </svg>
  )
}

export const SvgTwo = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-50 -30 600 600" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M76 416q-6 16 -6 33q0 5 7 17.5t17 18.5q21 13 46.5 24.5t52 19t52.5 12t48 4.5t39.5 -7.5t28.5 -19t17 -26t6 -28.5q0 -27 -5.5 -51t-27.5 -56q-23 -33 -42.5 -57.5t-37.5 -47t-36 -47t-40 -58.5q-8 -14 -8 -24q0 -4 1 -7q13 2 33.5 4.5t42 4t42 2.5t32.5 1q45 0 77 -16
      q14 -8 24 -16l6 -6t5 -7q8 -11 8 -25q0 -5 -2 -13q-3 -8 -7 -14q-12 -15 -26 -15q-8 0 -12 2t-14.5 5.5t-17.5 5.5q-6 3 -11 3.5t-12 1.5q-5 1 -8.5 1h-5.5q-13 -1 -26 -0.5t-27 -1.5q-25 -3 -42.5 -5.5t-33 -5t-31 -4t-35.5 -1.5q-11 0 -18.5 4.5t-16.5 13.5
      q-10 12 -17 26.5t-8 30.5q0 10 0.5 22.5t3.5 22.5q7 20 27 52t58 80q27 33 42.5 52.5t25 31.5t15.5 19.5t12 18.5q8 14 12.5 28.5t4.5 22.5q-5 4 -11.5 5.5t-21.5 1.5q-14 0 -39.5 -4t-42.5 -13q-2 -1 -4 -2.5t-4 -3.5l-5 -5q-4 -13 -15.5 -20t-25.5 -7q-10 0 -20.5 4
      t-20.5 15z"
      />
    </svg>
  )
}

export const SvgThree = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-50 -30 600 600" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M171 207q-8 0 -20 6t-14 15q-2 5 -3 10q-3 9 -3 22q0 2 2.5 14.5t16.5 26.5t29 28q12 12 26.5 25.5t27.5 26.5q15 15 23.5 24t13 15t5.5 10t1 8q0 11 -12.5 16t-28.5 5q-28 0 -50.5 -3t-48.5 -19l-6 -4q-2 -2 -4 -3.5t-4 -2.5q-3 -3 -9.5 -6t-14.5 -3q-2 0 -5.5 0.5
      t-11.5 2.5q-13 3 -21 17t-8 31q0 7 1 10q3 15 8.5 21.5t22.5 14.5q45 19 88.5 25.5t72.5 6.5q35 0 67 -8t48 -23q14 -14 18.5 -29t4.5 -30q0 -13 -2.5 -22t-14.5 -30q-8 -14 -18.5 -27.5t-28.5 -31.5q-21 -20 -41.5 -36t-31.5 -23q26 -2 53.5 -5.5t48.5 -15.5
      q14 -8 26.5 -16.5t21.5 -20.5t14.5 -27.5t5.5 -37.5q0 -38 -18.5 -70t-49 -56t-70.5 -37.5t-83 -13.5q-35 0 -55 4.5t-38 4.5q-8 0 -17.5 4t-12.5 6q-6 3 -12 15q-7 12 -7 32q0 8 3 16t7 12q14 16 31 16q2 0 4 -0.5t4 -0.5h3q5 -1 15 -4t21 -8q7 -3 12 -6t11 -4.5t14 -2.5
      t20 -1q24 0 47.5 6t42.5 17.5t30.5 28.5t11.5 40q0 28 -26.5 36.5t-62.5 8.5h-70z"
      />
    </svg>
  )
}

export const SvgFour = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-100 -100 650 700" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M222 164q-22 0 -52.5 -2.5t-66.5 -2.5q-8 0 -16 0.5t-16 1.5q-9 1 -17 2q-12 13 -23 34t-15 44l-1 17q0 14 10 31q7 11 17.5 34t24.5 48q23 42 48 82.5t53 73.5q14 17 25.5 22.5t18.5 5.5q8 0 19.5 -2.5t19.5 -15.5q8 -11 10.5 -21.5t2.5 -19.5q0 -17 -10.5 -24.5
      t-28.5 -12.5q-12 -6 -23.5 -21t-22 -31.5t-18.5 -32t-13 -24.5q-5 -8 -11 -21t-12 -26.5t-10 -25t-4 -16.5q0 -7 2 -12q12 0 26 1t29 1q13 0 33 2t42 4l3 21q5 32 15.5 71.5t27.5 71.5q6 11 12.5 18.5t16.5 7.5q5 0 11 -4t12 -10t11.5 -12t8.5 -9q4 -4 7 -10.5t3 -17.5
      q0 -8 -3.5 -15l-6.5 -13l-20 -43q-4 -7 -7 -19.5t-5 -25.5q7 2 15 4t17 4q11 2 32 7t42 5q7 0 17 -3.5t18.5 -9.5t14.5 -14.5t6 -17.5q0 -12 -2.5 -19t-10.5 -14q-4 -4 -10 -5t-13 -1q-6 0 -11.5 0.5t-9.5 0.5q-3 0 -10.5 -1t-16 -2.5t-16.5 -3t-12 -2.5q-17 -4 -30 -7.5
      t-28 -8.5q-1 -17 -2.5 -37.5t-1.5 -38.5q0 -23 1 -45.5t7 -45.5q9 -15 13.5 -23t6.5 -24q0 -20 -15.5 -30t-24.5 -10q-10 0 -22 8t-21 27q-8 17 -13 36t-7.5 37t-3.5 34t-1 28q0 20 0.5 35t0.5 33h-16z"
      />
    </svg>
  )
}

export const SvgFive = () => {

  const move = useSelector((state) => state.condition.moves);
  const [stateLetter, setStateLetter] = useState(0);
  useEffect(() => { setStateLetter(move) }, [])

  return (
    <svg className={styles.svg} viewBox="-100 -100 650 700" transform="scale(1, -1)">

      <defs>
        <linearGradient id={`zero${stateLetter}`}>
          <stop offset="0" stopColor="#8b00ff">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
          <stop offset="0" stopColor="rgba(10, 10, 10, 0.0)">
            <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      <path className={styles.path} strokeWidth="20" fill={`url(#zero${stateLetter})`}
        d="M73 -41q-2 3 -4.5 2.5t-4.5 2.5q-2 1 -4 1.5t-4 5.5q-3 0 -5 9l-4 11q-2 4 -2 6q0 1 0.5 2t0.5 2q-1 2 -1 5q0 4 1 5q0 1 0.5 5.5t1.5 4.5q1 4 2 5.5t2 3.5q2 4 3 3.5t3 4.5l4 4l4 4t4 2t4 2q6 4 9 4l10 3q10 2 17 2q12 0 24 -3q3 -1 7 -1q3 0 5 0.5t4 0.5q6 0 9 1
      q29 2 51 6q62 12 101.5 46.5t39.5 82.5q0 17 -9.5 27t-35.5 10q-20 0 -45 -1.5t-50.5 -4t-47.5 -4t-36 -1.5q-17 0 -28 8t-17 19q-5 10 -7.5 22t-2.5 31q0 3 1.5 14t3.5 24.5t5 28.5t5 26q3 17 5.5 31.5t4.5 32.5q1 8 1 16.5t2 16.5q3 8 7.5 14t12.5 10q11 5 31.5 10.5
      t37.5 8.5q21 4 37 6.5t30 4t28 2t29 0.5q17 0 36 -4t30 -12q10 -7 17.5 -15.5t7.5 -21.5q0 -7 -1.5 -15t-6.5 -14q-13 -18 -41 -18q-14 0 -25.5 4.5t-34.5 4.5q-38 0 -66.5 -7t-45.5 -12q-5 -10 -8 -26.5t-7 -33.5q-4 -18 -5 -28.5t-1 -16.5q0 -7 -0.5 -12.5t-0.5 -8.5h145
      q24 0 46.5 -9t40 -24.5t27.5 -36.5t10 -45q0 -44 -15.5 -78t-42.5 -60t-63 -45t-78 -32q-20 -6 -40 -11.5t-43 -7.5q-3 -1 -10 -1q-20 -3 -44 -3q-3 0 -5.5 0.5t-5.5 0.5z"
      />
    </svg>
  )
}