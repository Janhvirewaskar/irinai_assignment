﻿# irinai_assignment
jwt-profile-app/
├── client/          # React frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── ClientList.js
│       │   ├── Login.js
│       │   ├── Profile.js
│       │   └── Signup.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── App.js
│       ├── index.js
│       └── styles.css
├── server/          # Express backend
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   ├── .env
│   └── server.js
└── README.md
This is a simple React authentication app using JWT and the Context API. It includes:

- User registration and login
- Protected profile and client routes
- Persistent authentication state using React Context
- Navbar updates based on login status
