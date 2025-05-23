export const TECHNOLOGIES = [
    { name: 'React', width: 24, height: 24, src: '/assets/icons/react.svg'},
    { name: 'TailwindCSS', width: 24, height: 24, src: '/assets/icons/tailwindcss.svg'},
    { name: 'TypeScript', width: 22, height: 22, src: '/assets/icons/typescript.svg'},
    { name: 'Prisma', width: 20, height: 20, src: '/assets/icons/prisma.svg'},
    { name: 'Material UI', width: 20, height: 20, src: '/assets/icons/materialui.svg'},
]

export const TECH = {
    React: 0,
    TailwindCSS: 1,
    TypeScript: 2,
    Prisma: 3,
    MaterialUI: 4,
  } as const;
  
  export type TECH_KEY = keyof typeof TECH;