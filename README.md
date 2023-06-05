# Chess Clock

## Technical Documentation

The Chess Clock is a web application that provides a timer for two players to play chess with a time limit. This documentation will explain the architecture, design, and implementation details of the project.

### Architecture

The Chess Clock is implemented as an Angular application, using the Angular framework for building web applications.

The application consists of the following components:
- `ChessClockComponent`: The main component that controls the functionality of the chess clock. It handles the player times, switching players, starting, pausing, and resetting the timer. It also provides options for setting different time limits.

### Design

The design of the Chess Clock follows a simple and intuitive layout. It uses HTML and CSS for structuring and styling the user interface. The `container` class provides a wrapper for the entire application, while the `clocks` class contains the two player clocks and the control buttons.

The player clocks are represented by the `clock` class, which displays the player name and the remaining time. The active player's clock is highlighted using the `active` class.

The control buttons are placed within the `controls` class and include options for switching players, starting, pausing, and resetting the timer.

The time options are displayed under the `options` class and are represented by buttons that allow the user to set different time limits.

### Implementation Details

The implementation of the Chess Clock utilizes Angular features and TypeScript programming language. The main functionality is provided by the `ChessClockComponent` class.

The key properties of the `ChessClockComponent` class are:
- `player1Time`: Stores the remaining time for player 1.
- `player2Time`: Stores the remaining time for player 2.
- `currentPlayer`: Stores the current active player.
- `timerSubscription`: Holds the subscription object for the timer interval.
- `timeOptions`: Defines the available time options.

The class methods provide the following functionality:
- `switchPlayer()`: Switches the active player and increments their time based on the current time limit.
- `startTimer()`: Starts the timer by creating an interval subscription that decrements the active player's time every second.
- `pauseTimer()`: Pauses the timer by unsubscribing from the interval subscription.
- `resetTimer()`: Resets the timer by pausing it and setting both player times to zero.
- `setTime(minutes: number)`: Sets the player times to the specified minutes based on the selected time option.
- `formatMinutesSeconds(seconds: number)`: Formats the remaining time into a readable string representation (MM:SS).

### User Manual

The Chess Clock application provides a user-friendly interface for managing the timer during a chess game. Here are the instructions for using the software effectively:

1. Time Options:
  - Click on the time option buttons to set the desired time limit for the game. The available options range from 1 minute to 25 minutes.
  - Each time option represents the total time available for each player.

2. Player 1 and Player 2 Clocks:
  - The player clocks display the remaining time for each player in minutes and seconds.
  - The active player's clock is highlighted to indicate their turn.

3. Control Buttons:
  - Switch Player: Clicking this button will switch the active player. Use this button when it is the other player's turn.
  - Start: Clicking this button will start the timer for the active player.
  - Pause: Clicking this button will pause the timer.
  - Reset: Clicking this button will reset the timer and set both player times to zero.

4. Keyboard Shortcut:
  - Pressing the spacebar (␣) key

on your keyboard will automatically switch the player and start the timer. Use this shortcut when it is the other player's turn.

5. Time Management:
  - Each player's time will decrement every second when the timer is running.
  - When a player's time reaches zero, the timer will automatically pause, and the game will end.

6. Switching Players:
  - The active player can switch to the other player's turn by clicking the "Switch Player" button or using the spacebar shortcut.
  - The inactive player's time will be incremented based on the current time limit.

7. Pausing and Resetting:
  - To pause the timer, click the "Pause" button. The timer can be resumed by clicking the "Start" button.
  - To reset the timer, click the "Reset" button. This will set both player times to zero.

By following these instructions, you can effectively use the Chess Clock application to manage the time during a chess game and ensure fair play between the two players.
