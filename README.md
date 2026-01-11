# Angular Practices - Book Management App

A modern Angular application for managing and searching books, built with Angular 21 and TailwindCSS.

## Features

- **Book Search**: Search for books dynamically.
- **Book List**: View a curated list of books.
- **Book Management**: Add and edit book details using a reactive form.
- **Responsive Design**: Styled with TailwindCSS 4 for a seamless experience across devices.

## Tech Stack

- **Framework**: Angular 21
- **Styling**: TailwindCSS 4
- **Testing**: Vitest
- **Server-Side Rendering**: Angular SSR with Express

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Build

Build the project for production:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Tests

Run unit tests with Vitest:
```bash
npm test
```

## Project Structure

- `src/app/book-search`: Search functionality implementation.
- `src/app/book-list`: Logic and template for displaying the list of books.
- `src/app/book-form`: Forms for adding and editing book details.
- `src/app/book-item`: Component for displaying individual book items.
- `src/app/services`: Shared services for data management.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.5.
