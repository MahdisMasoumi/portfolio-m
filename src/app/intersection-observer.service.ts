import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initObserver(sections: NodeListOf<Element>): void {
    if (isPlatformBrowser(this.platformId)) {
      const revealSection = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.remove('section--hidden');
        this.observer.unobserve(entry.target);
      };

      this.observer = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
      });

      sections.forEach((section) => {
        this.observer.observe(section);
        section.classList.add('section--hidden');
      });
    }
  }
}
