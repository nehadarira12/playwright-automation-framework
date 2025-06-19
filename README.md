# Playwright Automation Framework with Allure Reporting

A **scalable, beginner-friendly end-to-end testing framework** built using **[Playwright](https://playwright.dev/)** and **TypeScript**. Designed for real-world testing needs, this framework integrates powerful tools like:

-  Page Object Model (POM)  
-  Allure reporting  
-  Screenshots & video on failure  
-  Cross-browser testing  

---

## 🔧 Features

-  Built with **Playwright + TypeScript**  
-  Clean **Page Object Model (POM)** architecture  
-  **Allure reports** with trace, video & screenshot attachments  
-  Parallel test execution  
-  Supports **Chromium, Firefox, WebKit**  
- Headless/headed mode toggle  
-  Easily configurable via `playwright.config.ts`  

---

## 📁 Project Structure

```
├── config/                  # Config files (optional)
├── pages/                  # Page Object Model (POM) classes
├── tests/                  # Test specifications
├── utils/                  # Utility functions
├── playwright.config.ts    # Core Playwright config
├── .gitignore
└── package.json
```

---

## 🧪 Running Tests

Install all dependencies:

```bash
npm install
```

Run all tests in all browsers:

```bash
npm run test
```

👉 This will auto-generate an Allure report and open it automatically.

---

## 🎯 Run a Single Spec File

```bash
npx playwright test tests/login.spec.ts
```

---

## 📊 View Last Allure Report Anytime

```bash
npm run allure:report
```

---

## 🧰 Debugging & Reports

| Feature       | Config in `playwright.config.ts`         |
|---------------|-------------------------------------------|
| Screenshot    | `screenshot: 'only-on-failure'`           |
| Video         | `video: 'retain-on-failure'`              |
| Trace Viewer  | `trace: 'on-first-retry'`                 |
| HTML Report   | `reporter: ['html']`                      |
| Allure Report | `reporter: ['allure-playwright']`         |

---

## 📸 Sample Report

> *(Insert an Allure report screenshot here)*

---

## 🧱 Tech Stack

- [Playwright](https://playwright.dev/)  
- TypeScript  
- Allure Playwright Reporting  

---

## 🤝 Contributing

Forks, ideas, and PRs are all welcome! Let's build better automation together.

---



## 📬 Let's Connect

Want to learn more, collaborate, or get guidance?  
📢 [Connect on LinkedIn](https://www.linkedin.com/in/nehadarira12/)
