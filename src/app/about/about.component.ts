import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { IntersectionObserverService } from '../intersection-observer.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  constructor(
    private intersectionObserverService: IntersectionObserverService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const allSections = document.querySelectorAll('.section');
      this.intersectionObserverService.initObserver(allSections);
    }
  }
}
