# 📰 Newsletter Signup App

A simple and functional newsletter signup application built with **Node.js** and **Express.js**, integrated with the **Mailchimp API** to collect and manage subscribers.

## 🎯 Features

- 📧 Collects user email, first name, and last name
- 🔗 Submits data to Mailchimp via their API
- ✅ Displays success or failure message accordingly
- 💻 Frontend built with HTML & CSS, backend in Node.js
- 🔒 Secure API integration using environment variables

---

## 🛠️ Tech Stack

| Tech           | Purpose                                |
|----------------|----------------------------------------|
| **Node.js**     | Server-side backend                    |
| **Express.js**  | Web server and routing framework       |
| **Mailchimp API** | Newsletter integration              |
| **HTML/CSS**    | Frontend UI                            |
| **Body-parser** | Handle form data in Node.js            |

---

## 🧩 Folder Structure

Newsletter-Signup/
│
├── public/ # Static assets (CSS, images)
│
├── signup.html # Main signup form UI
├── success.html # Page shown on successful signup
├── failure.html # Page shown on failure
├── app.js # Backend logic and Mailchimp API integration
├── package.json
└── .env # (For storing Mailchimp API key securely)

yaml
Copy
Edit

---

## 🚀 Getting Started Locally

1. Clone the Repository
git clone https://github.com/Aman73802/Newsletter-Signup.git
cd Newsletter-Signup

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file in the root directory and add:
env
API_KEY=your-mailchimp-api-key
LIST_ID=your-audience-list-id
SERVER_PREFIX=usX (example: us21)
Make sure to replace with your actual Mailchimp credentials.

4. Run the Server
node app.js
Visit http://localhost:3000 in your browser.

🙋‍♂️ Author
Aman Upadhyay
📧 amanupadhyay8146@gmail.com
