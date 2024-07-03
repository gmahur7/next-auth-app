# 🌟 Basic Next Auth App 🌟

This is a basic authentication application built using Next.js, React.js, TypeScript, JavaScript, MongoDB, Nodemailer, Bcrypt.js, and TailwindCSS. The app supports user login, signup, logout, email verification, and profile details functionality.

## ✨ Key Features

- **User Signup**: New users can create an account.
- **User Login**: Existing users can log in to their account.
- **User Logout**: Users can log out of their account.
- **Email Verification**: New users need to verify their email address.
- **Profile Details**: Users can view and update their profile details.

## 🛠️ Key Technologies

- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) **Next.js**: A React framework for server-rendered or statically-exported React applications.
- ![React.js](https://img.shields.io/badge/-React.js-61DAFB?style=flat&logo=react&logoColor=white) **React.js**: A JavaScript library for building user interfaces.
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white) **JavaScript**: A high-level programming language used for implementing complex features on web pages.
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB**: A NoSQL database for storing user information.
- ![Nodemailer](https://img.shields.io/badge/-Nodemailer-2C3E50?style=flat&logo=nodemailer&logoColor=white) **Nodemailer**: A module for Node.js applications to send emails.
- ![Bcrypt.js](https://img.shields.io/badge/-Bcrypt.js-4A7A8C?style=flat&logo=logmein&logoColor=white) **Bcrypt.js**: A library to help you hash passwords.
- ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **TailwindCSS**: A utility-first CSS framework for rapid UI development.

## 🚀 Getting Started

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
    MONGODB_URL=<your-mongodb-uri>
    SMTP_USER=<your-email-address>
    SMTP_PASS=<your-email-password>
    TOKEN_SECRET=<your-jwt-secret>
    DOMAIN=<your-domain>
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Folder Structure

```bash
basic-next-auth-app/
├── public/
│    ├── images/
│    │   ├── user.png
│    ├── next.svg
│    ├── vercel.svg
├── src/
│    ├── app/
│    │   ├── api/
│    │   │   ├── users/
│    │   │   │   ├── getdetails/
│    │   │   │   │   ├──route.ts
│    │   │   │   ├── login/
│    │   │   │   │   ├──route.ts
│    │   │   │   ├── logout/
│    │   │   │   │   ├──route.ts
│    │   │   │   ├── profile/
│    │   │   │   │   ├──route.ts
│    │   │   │   ├── signup/
│    │   │   │   │   ├──route.ts
│    │   │   │   ├── verifyemail/
│    │   │   │   │   ├──route.ts
│    │   ├── login/
│    │   │   │   ├──page.tsx
│    │   ├── signup/
│    │   │   │   ├──page.tsx
│    │   ├── profile/
│    │   │   │   ├──page.tsx
│    │   ├── verifyemail/
│    │   │   │   ├──page.tsx
│    │   ├── favicon.ico
│    │   ├── globals.css
│    │   ├── layout.tsx
│    │   ├── page.tsx
│    ├── components/
│    │   ├── Header.tsx
│    ├── dbConfig/
│    │   ├── dbConfig.ts
│    ├── helpers/
│    │   ├── JWT.ts
│    │   ├── node-mailer.ts
│    ├── models/
│    │   ├── userModel.ts
│    ├── middleware.ts
├── .env.local
├── eslintrc.json
├── .gitignore
├── next-config.mjs
├── package-lock.json
├── package.json
├── postcss-config.mjs
├── README.md
├── ts.config.ts
└── .tsconfig.json
