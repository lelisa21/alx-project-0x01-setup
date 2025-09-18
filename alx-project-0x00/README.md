# alx-project-0x00-setup

This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components, while emphasizing best practices in front-end development.

## Requirements
Node.js (v16 or later)

npm or yarn

Visual Studio Code (or any preferred IDE)

Next.js v13+

TypeScript

Tailwind CSS

ESLint

### Project Structure 

```
alx-project-0x00-setup/
├── .next/                     # Build output (auto-generated)
├── node_modules/              # Dependencies (auto-generated)
│
├── components/ 
|     └─ Card.tsx             # Reusable Card components
|     └─ Button.tsx           # Reusable button component
|     └─ Pill.tsx             # Reusable button component
├── interfaces/               # TypeScript interfaces
│   └── index.ts              # Props for components
│
├── pages/                     # Next.js pages (Routes)
│   ├── api/                   # API routes
│   ├── index.tsx              # Home page
│   └── landing.tsx            # Landing page (Button demo)
│
├── public/                    # Static assets 
│   ├── assets/
├── styles/                    # Global and modular styles
│   └── globals.css            # Tailwind entry
│
├── .gitignore                 # Git ignored files
├── eslint.config.mjs          # ESLint configuration
├── README.md                  # Project documentation
├── tsconfig.json              # TypeScript config
└── package.json               # Project dependencies & scripts

```

To open this  project 
 run the development server: after downloading this from github: 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
