# SecondBrain 🧠

SecondBrain is a lightweight web app that lets you paste a YouTube URL or a Twitter post link and instantly view all the extracted metadata—titles, descriptions, thumbnails, author info.

## 🚀 Features

* **YouTube URL Parsing**

  * Video title, description, channel name
  * Video thumbnail
* **X Post Parsing**

  * Tweet text, author handle, author name
  * retweet & like counts
  * Embedded media (images, videos)
* **Authentication**

  * User login via email/password 
* **Clean UI**

  * Copy-to-clipboard for easy sharing

## 🔐 Authentication

Users can sign up and log in to access additional features:

* **Sign Up / Log In**: Email/password
* **Protected Routes**: Only authenticated users can view extraction history and save favorites

## 🧰 Tech Stack

* **Frontend:** React + TypeScript
* **Styling:** Tailwind CSS
* **Backend:**  Node.js and Express.js
* **Auth:** JWT (email/password)


## 📦 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/SecondBrain.git
   cd SecondBrain
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run in development mode**

   ```bash
   npm run dev
   ```

## 📖 Usage

1. Open the app in your browser (defaults to `http://localhost:3000`).
2. Sign up or log in to your account.
3. Paste a YouTube video URL or a Twitter post link into the input field.
4. Hit **Extract** and see the metadata appear instantly.
5. View your extraction history  in your user dashboard.


> Made with ❤️ by \[Rohan Shikhare]
> — Turn your links into insights with SecondBrain!
