import { gsap } from "@/lib/gsap";

const ANIMATION_START_OFFSET = "top 75%";

const SCROLL_TRIGGER_CONFIG = {
  start: ANIMATION_START_OFFSET,
  bottom: "25%",
  once: true,
};

const SEQUENCE_ENABLE = { clearProps: "transform" };

const DEFAULT_STAGGER = 0.15;
const DEFAULT_EASE = "power3.out";

const INITIAL_STATE_CLASS = ".prereveal";
const INITIAL_STATE_CLASS_UPWARD = ".prereveal-upward";
const INITIAL_STATE_CLASS_DOWNWARD = ".prereveal-downward";
const INITIAL_STATE_CLASS_REVEAL = ".reveal";

export function useAnimation(section, callback, delay = 0) {
  if (!section) return;

  const ctx = callback(section, delay);
  return () => ctx.revert();
}

function createScrollTrigger(section, delay = 0) {
  return {
    ...SCROLL_TRIGGER_CONFIG,
    trigger: section,
    delay,
  };
}

export function reveal(section, delay = 0) {
  return gsap.context(() => {
    gsap.fromTo(
      INITIAL_STATE_CLASS_REVEAL,
      {
        autoAlpha: 0,
        scale: 0.7,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: DEFAULT_EASE,
        scrollTrigger: createScrollTrigger(section, delay),
      },
    );
  }, section);
}

export function sectionReveal(section, delay = 0) {
  return gsap.context(() => {
    gsap.fromTo(
      INITIAL_STATE_CLASS,
      {
        autoAlpha: 0,
        scale: 0.98,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: DEFAULT_EASE,
        scrollTrigger: createScrollTrigger(section, delay),
      },
    );
  }, section);
}

export function upwardsReveal(section, delay = 0) {
  return gsap.context(() => {
    gsap.fromTo(
      INITIAL_STATE_CLASS_UPWARD,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: DEFAULT_STAGGER,
        ease: DEFAULT_EASE,
        ...SEQUENCE_ENABLE,
        scrollTrigger: createScrollTrigger(section, delay),
      },
    );
  }, section);
}

export function downwardsReveal(section, delay = 0) {
  return gsap.context(() => {
    gsap.fromTo(
      INITIAL_STATE_CLASS_DOWNWARD,
      { autoAlpha: 0, y: 0 },
      {
        autoAlpha: 1,
        y: 30,
        duration: 0.9,
        delay,
        stagger: DEFAULT_STAGGER,
        ease: DEFAULT_EASE,
        ...SEQUENCE_ENABLE,
        scrollTrigger: createScrollTrigger(section),
      },
    );
  }, section);
}
