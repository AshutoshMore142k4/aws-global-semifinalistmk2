# Motion Contract

- Motion ownership: define where timeline/state-machine logic lives.
- Accessibility: enforce `prefers-reduced-motion` strategy for animated interactions.
- Performance: avoid layout-thrashing animation properties; prefer transform/opacity.
- Invariants: define max duration, easing conventions, and infinite-loop restrictions.
- Library boundaries: define allowed usage of Framer Motion/GSAP/Lottie and fallback behavior.
