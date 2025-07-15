# Advanced Task Manager

A modern, responsive React application demonstrating the core React Hooks in a real-world “Task Manager” mini-project. Built with Vite, TypeScript, Tailwind-inspired CSS, and deployed on Vercel.

**Live Demo:** [https://task-manager-advanced-phi.vercel.app/](https://task-manager-advanced-phi.vercel.app/)

---

## 🚀 Features

- **Create / Edit / Delete / Toggle** tasks with priority levels (Low, Medium, High)
- **Light & Dark Theme** toggle with persistent preference
- **LocalStorage Persistence** via custom `useLocalStorage` hook
- **Simulated Fetch** with loading & error states via custom `useTasks` hook
- **Responsive Design** optimized for desktop and mobile
- **Accessible UI** with semantic HTML, focus styles, and ARIA labels
- **Internationalization** support (English 🇬🇧 / Portuguese 🇵🇹) powered by `react-i18next`

---

## 🏗️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tooling & dev server)
- **React Hooks**: `useState`, `useReducer`, `useEffect`, `useContext`, `useRef`, `useCallback`, `useMemo`
- **i18n**: `i18next` + `react-i18next`
- **Styling**: Plain CSS with CSS Variables for theming
- **Deployment**: Vercel

---

## 📥 Getting Started

### Prerequisites

- Node.js (v16+) & npm
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/task-manager-advanced.git
cd task-manager-advanced

# Install dependencies
npm install
```

### Running Locally

```bash
# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

---

## 🔧 Project Structure

```
task-manager-advanced/
├─ public/               # static assets
├─ src/
│  ├─ components/        # TaskInput, TaskList, TaskItem, LanguageSwitcher
│  ├─ context/           # ThemeContext, ThemeProvider
│  ├─ hooks/             # useTasks, useLocalStorage, useTheme
│  ├─ locales/           # en.json, pt.json for i18n
│  ├─ reducers/          # taskReducer
│  ├─ types/             # Task interface
│  ├─ App.tsx            # root component
│  ├─ i18n.ts            # i18n configuration
│  ├─ index.css          # global styles & theming
│  └─ main.tsx           # app entrypoint
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

---

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "feat: add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with 💚 by Fernando Ghiberti
