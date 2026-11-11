"use client";

import { useEffect, useState } from "react";

const LETTERS = ["M", "A", "N", "E", "L", "A"] as const;

export function SiteIntro() {
  const [shown, setShown] = useState(-1);
  const [lifted, setLifted] = useState(-1);
  const [away, setAway] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone(true);
      return;
    }

    const timers: number[] = [];

    LETTERS.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setShown(index);
        }, (index + 1) * 180),
      );
    });

    const liftAt = 1900;
    LETTERS.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setLifted(index);
        }, liftAt + (index + 1) * 50),
      );
    });

    timers.push(window.setTimeout(() => setAway(true), 2300));
    timers.push(window.setTimeout(() => setDone(true), 3400));

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  if (done) return null;

  return (
    <div className={`site-intro${away ? " is-away" : ""}`} aria-hidden="true">
      <p className="site-intro-word">
        {LETTERS.map((letter, index) => {
          const state = lifted >= index ? "is-fade" : shown >= index ? "is-active" : "";
          return (
            <span key={`${letter}-${index}`} className={`site-intro-letter ${state}`.trim()}>
              {letter}
            </span>
          );
        })}
      </p>
    </div>
  );
}
