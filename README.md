# CampusHub — College Management Portal
A full-stack, modular campus administration and student utility portal built using Node.js, Express, MongoDB, and modern vanilla web technologies. CampusHub centralizes academic tracking, file sharing, attendance logging, and extra-curricular recognition into an intuitive single-dashboard interface.
---
## 🌟 Key Features
* **Real-Time Academic Dashboard:** Dynamic counters displaying daily check-ins, top rankers, shared materials, and campus bulletins fetched live from the API.
* **Attendance System:** Date-driven daily check-ins with department and semester filters, complete with historical search logs.
* **Resource Hub (Multer Uploads):** Centralized repository for sharing lecture notes, lab manuals, and syllabus PDFs with multi-tier department/semester filtering.
* **Merit & Toppers Leaderboard:** Dynamic leaderboard system celebrating top performers by department and semester with custom visual rank badges.
* **Campus Life & Events:** Live feed of technical seminars, hackathons, sports meets, and achievements with real-time post publishing.
* **Persistent Student Profile:** Client-side persistent profile management supporting local photo uploads (Base64), real-time sidebar synchronization, and instant academic detail updates.
---
## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | HTML5, Modern CSS3 (CSS Variables, Flexbox/Grid), Vanilla JavaScript (ES6+), FontAwesome |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **File Handling** | Multer (Multipart/form-data handler) |
| **Architecture** | RESTful APIs, MVC Pattern, Client-side persistence (`localStorage`) |

---
## 📁 Project Structure
```text
CampusDiary/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB Mongoose connection
│   ├── middleware/
│   │   └── upload.js             # Multer disk-storage configuration
│   ├── models/
│   │   ├── Activity.js           # Events & achievements schema
│   │   ├── Attendance.js         # Daily check-in schema
│   │   ├── Resource.js           # File repository schema
│   │   ├── Result.js             # Academic leaderboard schema
│   │   └── Timetable.js          # Class schedule schema
│   ├── routes/
│   │   ├── activityRoutes.js     # Events endpoints
│   │   ├── attendanceRoutes.js   # Attendance CRUD endpoints
│   │   ├── resourceRoutes.js     # Multer file upload & retrieval endpoints
│   │   ├── resultRoutes.js       # Merit leaderboard endpoints
│   │   └── timetableRoutes.js    # Timetable endpoints
│   ├── uploads/                  # Uploaded documents and media
│   ├── package.json              # Backend dependencies
│   ├── seed.js                   # Mock data seeding script
│   └── server.js                 # Express entry point
├── frontend/
│   ├── activities.html           # Campus activities & wins
│   ├── attendance.html           # Daily log & historical records
│   ├── index.html                # Main overview dashboard
│   ├── profile.html              # Editable student profile & photo upload
│   ├── resources.html            # Document repository
│   ├── results.html              # Leaderboard & rank displays
│   ├── style.css                 # Global styling system
│   └── timetable.html            # Class timetable views
├── .gitignore                    # Version control ignore definitions
└── README.md

**Patel Umangi**
🎓 Computer Engineering (SPI: 9.65)

🔗 GitHub: https://github.com/Umangi-webdev

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share it with others
