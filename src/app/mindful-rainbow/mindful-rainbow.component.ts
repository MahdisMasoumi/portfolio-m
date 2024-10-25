import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mindful-rainbow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mindful-rainbow.component.html',
  styleUrl: './mindful-rainbow.component.scss',
})
export class MindfulRainbowComponent {
  projectTitle: string = 'MindfulRainbow';
  tagline: string = 'Your colorful path to mental well-being.';
  projectDescription: string =
    'MindfulRainbow is a mobile application designed to offer users a user-friendly platform for tracking and enhancing their mental well-being. Merging rainbow colors, I aim to enhance user interaction and experience.';

  userNeeds: string[] = [
    'Users want the app to be easy to use for tracking their mood.',
    'The app should look good to encourage daily use.',
    'It should have features that help users think about their mental health.',
  ];

  keyFeatures: { title: string; description: string }[] = [
    {
      title: 'Mood Tracker',
      description:
        'Monitor and track mood fluctuations using intuitive features.',
    },
    {
      title: 'Rainbow Rays Journaling',
      description:
        'Express thoughts and feelings creatively through vibrant journaling.',
    },
    {
      title: 'Goal Setting',
      description:
        'Set and track personal goals with a visually engaging interface.',
    },
    {
      title: 'Therapy Tracker',
      description:
        'Keep a detailed record of therapy sessions and track progress.',
    },
  ];

  feedbackDescription: string =
    'User feedback was gathered through surveys and testing, leading to improvements in the app’s usability and design.';

  challenges: { challenge: string; solution: string }[] = [
    {
      challenge: 'Making it easy for users to move around the app.',
      solution:
        'Created a clearer menu and layout to help users find what they need.',
    },
    {
      challenge: 'Maintaining user engagement.',
      solution:
        'Introduced fun features, like rewards for regularly tracking their progress.',
    },
  ];

  conclusion: string =
    'I’m excited to share this journey into UX design and see how combining development and design can create better user experiences.';
}
