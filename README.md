# TallyBoard

TallyBoard is a full-stack productivity platform inspired by Trello. It allows users to manage their tasks through an interactive and collaborative board system. The application includes authentication, workspace management, and task flow functionality.

## Features

* ✅ **Authentication**: Secure login and registration using cookies.
* ✅ **Protected Routes**: Dashboard access is restricted based on authentication status.
* ✅ **Workspace Creation**: Users can create and manage their own workspaces.
* ✅ **Board System**: Drag-and-drop task management system across columns.
* ✅ **Dynamic Task Flow**: Easily move tasks between different stages.
* ✅ **Fully Responsive UI**: Built with TailwindCSS and shadcn/ui for modern and responsive design.

## Tech Stack

* **Framework**: Next.js (App Router)
* **Database**: MonogoDb with Prisma ORM
* **Authentication**: JSON Web Tokens (JWT) + Middleware
* **State Management**: TanStack Query
* **Styling**: TailwindCSS + shadcn/ui + Lucide Icons



## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Setup `.env` file**

```
DATABASE_URL=your_mongo_url
JWT_SECRET=your_jwt_secret
```

3. **Push Prisma schema**

```bash
npx prisma db push
```

4. **Run the dev server**

```bash
npm run dev
```

## Future Improvements

* [ ] Invite users to workspaces
* [ ] Real-time updates via WebSockets
* [ ] Board background customization
* [ ] Notifications and activity logs

---

Built with ❤️ by Mohd Altaf
