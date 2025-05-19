# 🗂️ Kanban Board Application

Live Site: [https://your-kanban-frontend.onrender.com](https://kanban-board-1-yvgp.onrender.com)

## 🚀 Overview

This is a secure, full-stack Kanban board application built with:

- **Frontend**: React + Vite
- **Backend**: Node.js + Express + Sequelize (PostgreSQL)
- **Authentication**: JSON Web Tokens (JWT)
- **Hosting**: Deployed on [Render](https://kanban-board-uovn.onrender.com)

It provides a secure login system and allows users to manage tasks in a classic Kanban format.

---

## 🔐 Authentication Flow

- Users must log in using a **username and password**
- Auth is handled via **JWT (JSON Web Tokens)**
- Token is stored securely in **localStorage**
- Users are automatically logged out on:
  - Logout click
  - Token expiration (inactivity)

---

## ✅ User Stories (Features)

### Login & Access Control

- ✅ **GIVEN** a Kanban board with a secure login page  
  **WHEN** I load the login page  
  **THEN** I see form inputs for username and password

- ✅ **WHEN** I enter a valid username and password  
  **THEN** I am authenticated with JWT and redirected to the Kanban board

- ✅ **WHEN** I enter invalid credentials  
  **THEN** I see an error message

- ✅ **WHEN** I successfully log in  
  **THEN** a JWT is stored securely in local storage

- ✅ **WHEN** I log out  
  **THEN** the JWT is removed and I'm redirected to the login page

- ✅ **WHEN** I try to access the board without a token  
  **THEN** I’m redirected to the login page

- ✅ **WHEN** I'm inactive for a set time  
  **THEN** my token expires and I’m redirected on next action

---

## 🧰 Tech Stack

| Layer       | Tech                                |
|-------------|--------------------------------------|
| Frontend    | React, Vite, TypeScript              |
| Backend     | Node.js, Express                     |
| Database    | PostgreSQL (via Sequelize ORM)       |
| Auth        | JSON Web Tokens (JWT)                |
| Deployment  | Render (Frontend + Backend)          |

---

## 📦 Environment Variables

Frontend (`.env`):
