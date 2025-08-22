# 📝 Customer Feedback Management System – Angular UI

This is the frontend application for the **Customer Feedback Management System**, built using **Angular**. It interacts with the Spring Boot backend to allow users to submit, view, and manage customer feedback.

---

## 🚀 Features

- Submit feedback with customer details and address
- View feedback history
- Form validation and error handling
- Responsive UI with Angular Material (optional)
- RESTful API integration with Spring Boot backend

---

## 🛠️ Tech Stack

- **Angular** 15+
- **TypeScript**
- **RxJS**
- **Bootstrap / Angular Material** (optional)
- **REST API** (Spring Boot backend)

---

## 📦 Project Structure

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

bash
git clone https://github.com/Gopinath1098/feedback-ui.git
cd feedback-ui

**2. Install Dependencies**

npm install

**3. Run the Application**

ng serve

**🔗 Backend Integration**

http://localhost:8080

// customer.service.ts
private baseUrl = 'http://localhost:8080/api/customers';

**📤 API Endpoints Used**

- POST /api/customers – Submit feedback
- GET /api/customers – Get all feedback


📌 Notes
- Ensure CORS is enabled on the backend.
- Customize styles and layout as needed.
- Add authentication if required for admin access.

