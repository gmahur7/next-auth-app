# Basic Next Auth App

This is a basic authentication application built using Next.js, React.js, MongoDB, Nodemailer, Bcrypt.js, and TailwindCSS. The app supports user login, signup, logout, email verification, and profile details functionality.

## Key Features

- **User Signup**: New users can create an account.
- **User Login**: Existing users can log in to their account.
- **User Logout**: Users can log out of their account.
- **Email Verification**: New users need to verify their email address.
- **Profile Details**: Users can view and update their profile details.

## Key Technologies

- **Next.js**: A React framework for server-rendered or statically-exported React applications.
- **React.js**: A JavaScript library for building user interfaces.
- **MongoDB**: A NoSQL database for storing user information.
- **Nodemailer**: A module for Node.js applications to send emails.
- **Bcrypt.js**: A library to help you hash passwords.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB setup and running

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/basic-next-auth-app.git
    cd basic-next-auth-app
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```env
    MONGODB_URI=<your-mongodb-uri>
    EMAIL_USER=<your-email-address>
    EMAIL_PASS=<your-email-password>
    JWT_SECRET=<your-jwt-secret>
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```bash
basic-next-auth-app/
├── components/
│   ├── Header.js
│   ├── LoginForm.js
│   ├── SignupForm.js
│   ├── Profile.js
├── models/
│   ├── User.js
├── pages/
│   ├── api/
│   │   ├── auth/
│   │       ├── login.js
│   │       ├── signup.js
│   │       ├── logout.js
│   │       ├── verify-email.js
│   │       ├── profile.js
│   ├── index.js
│   ├── login.js
│   ├── signup.js
│   ├── profile.js
│   ├── verify-email.js
├── styles/
│   ├── globals.css
├── utils/
│   ├── db.js
│   ├── auth.js
│   ├── mailer.js
├── .env.local
├── package.json
└── README.md
