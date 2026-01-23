export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "") || "hero";
    const elem = document.getElementById(targetId);

    if (elem) {
      const navbarHeight = 100; // Navbar için bırakılacak boşluk
      const targetPosition = elem.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Milisaniye cinsinden hız
      let startTime: number | null = null;

      // Matematiksel yumuşatma fonksiyonu (EaseInOutQuad)
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };