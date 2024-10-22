import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  resultMessage: string = '';

  onAnswerClick(isCorrect: boolean): void {
    this.resultMessage = isCorrect ? 'Correct! 🎉' : 'Oops! Try again. 😢';
  }
  resultMessage1: string = '';
  onAnswerClick1(isCorrect: boolean): void {
    this.resultMessage1 = isCorrect ? 'Correct! 🎉' : 'Oops! Try again. 😢';
  }
  resultMessage2: string = '';

  onAnswerClick2(isCorrect: boolean): void {
    this.resultMessage2 = isCorrect ? 'Correct! 🎉' : 'Oops! Try again. 😢';
  }
  resultMessage3: string = '';

  onAnswerClick3(isCorrect: boolean): void {
    this.resultMessage3 = isCorrect ? 'Correct! 🎉' : 'Oops! Try again. 😢';
  }
  resultMessage4: string = '';

  onAnswerClick4(isCorrect: boolean): void {
    this.resultMessage4 = isCorrect ? 'Correct! 🎉' : 'Oops! Try again. 😢';
  }
}
