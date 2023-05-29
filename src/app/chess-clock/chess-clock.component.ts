import { Component, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-chess-clock',
  templateUrl: './chess-clock.component.html',
  styleUrls: ['./chess-clock.component.css']
})
export class ChessClockComponent {
  player1Time: number = 0;
  player2Time: number = 0;
  currentPlayer: number = 1;
  timerSubscription: Subscription | undefined;
  timeOptions: { [key: number]: number } = {
    1: 60,
    3: 180,
    5: 300,
    15: 900,
    25: 1500
  };

  @HostListener('document:keydown.space', ['$event'])
  handleSpacebarPress(event: KeyboardEvent) {
    event.preventDefault();
    this.switchPlayer();
    this.startTimer();
  }

  switchPlayer() {
    let increment: number;

    if (this.currentPlayer === 1) {
      if (this.player1Time <= 60) {
        increment = 0;
      } else if (this.player1Time <= 180) {
        increment = 2;
      } else if (this.player1Time <= 300) {
        increment = 3;
      } else {
        increment = 10;
      }

      this.player1Time += increment;
    } else {
      if (this.player2Time <= 60) {
        increment = 0;
      } else if (this.player2Time <= 180) {
        increment = 2;
      } else if (this.player2Time <= 300) {
        increment = 3;
      } else {
        increment = 10;
      }

      this.player2Time += increment;
    }

    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  startTimer() {
    if (!this.timerSubscription) {
      this.timerSubscription = interval(1000).subscribe(() => {
        if (this.currentPlayer === 1) {
          if (this.player1Time > 0) {
            this.player1Time--;
          } else {
            this.pauseTimer();
          }
        } else {
          if (this.player2Time > 0) {
            this.player2Time--;
          } else {
            this.pauseTimer();
          }
        }
      });
    }
  }

  pauseTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.player1Time = 0;
    this.player2Time = 0;
  }

  setTime(minutes: number) {
    this.resetTimer();
    this.player1Time = this.timeOptions[minutes];
    this.player2Time = this.timeOptions[minutes];
  }

  formatMinutesSeconds(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}
