YG DI BAWAH DEFAULT README, BOLEH DIBACA TIPIS TIPIS. KALO MAU LANGSUNG BACA NOTES DARI UCIL KE LINE 41 AJA

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


------------------------ LINE BREAK ---------------------------------

HHHAAAAAAI MWEHEHEHE welcam to panduan by ucil 101. ucil bakal pandu and sekalian ajarin uti perlahan lahan sampe uti paham, uti got dis -3- donwori juga karna nnti ucil bakal jelasin ulang langsung biar makin paham

buah kedondong, buah bekicot
sempak pink punyanya si anya
"kaka absen dong", gausah banyak cocot 
GOW KITA MULAI MASUK KE PANDUANNYA

**ISTILAH-ISTILAH UMUM**
1. `git` is used to track changes and collaborate safely without overwriting each other's work.
2. `git checkout` artinya switch to another branch. (ex; git checkout main --> artinya switch ke branch main)
3. `git checkout -b` artinya create and switch to a new branch sekaligus. (ex; git checkout -b feature/navbar --> creates new branch & immidiately switches to it)
4. `git pull` artinya downloads the latest changes from github (ex; git pull origin main)
5. `git commit` artinya saves your changes locally (ex; git commit -m "feat: add homepage hero")
6. `git add` artinya marks files that should be included in the next commit. (ex; git add . --> the dot (`.`) means "add all changed files.")
7. `git push` artinya uploads your commits to GitHub. (ex; git push origin feature/navbar)
8. `git fetch` artinya sees information about new commits from GitHub without changing your local files. (ex; git fetch --> useful when you want to check for updates first.)
9.`pull request` artinya request asking the team to merge your branch into another branch.
10. `merge` artinya combines one branch into another, cone after reviewing the pull request.


**SOP/GENERAL RULES/PANDUAN**
1. Never work directly on the main branch. kalo mau nambah fitur/page baru berarti bikin branch baru, kalo mau fix sesuatu dari existing branch yaudah tinggal switch ke existing branch tsb. (one feature = one branch)

contoh penamaan branch
## feature/blog
## fix/mobile-navbar

2. Next ucil bakal jelasin fungsi setiap foldernya ya:

## app/
Contains all application routes.

## components/
Contains reusable UI components.

## constants/
Contains static website data. semua konten berbentuk teks di sini ya. kita sistemnya bakal "manggil" konten nanti di masing masing application routesnya

    name: "XMT 350",
    image: "...",
    brand: "Miller",

## types/
Containts template buat mendefinisikan bentuk data buat si constantsnya.

  name: string;
  image: string;
  brand: string;

## Media
Semua media kaya video, foto, pdf taro di public and to its respective folders

    documents: pdf
    icons: kalo ada icon dari external
    images: foto
    logo: logo perusahaan, brand
    videos: video

## Naming Convention

# Folder: use kebab-case/lowercase

contoh penamaan
    service-center
    product-card
    hero-section
    featured-products

# React Components: use PascalCase

contoh penamaan
    Hero.tsx
    ProductCard.tsx

# Next.js Route Files: These filenames are reserved by Next.js and must remain lowercase. Do not rename these files.

contoh penamaan
    page.tsx
    layout.tsx
    loading.tsx
    error.tsx

# Static Data: use kebab-case/lowercase

contoh penamaan
    company.ts
    social-links.ts

# Image/Video/PDF: use kebab-case/lowercase

contoh penamaan
    miller-logo.svg
    xmt-350.png
    hypertherm-powermax45.jpg

3. Icons
Use `lucide-react`. Do not download random SVG icons unless necessary.

4. Always pull the latest changes before creating a new branch.

Alurnya codingnya gini ya:
    git checkout main --> git pull origin main --> git checkout -b feature/<feature-name> -->  Start Coding -->  git add . --> git commit -m "feat: ..." --> git push origin feature/<feature-name> -->  Create Pull Request (GitHub) --> Review & Merge to main --> git checkout main --> git pull origin main --> Ready for the next feature

5. Commit Message Convention

    # feature (feat: add product page)
    # fix (fix: mobile navbar overflow)
    # refractor/rapihin (refractor: simplify footer layout)
    # documentation (docs: add hero banner image)


**WHAT SHOULD UTI DO NEXT?**
1. Setelah uti clone repositorynya (atau bahasa simplenya link project codingannya), jangan lupa install dependencies di terminal that i installed beforehand yeaa. code: npm install

dependencies tuh apa baaangg? jadi gini adik, dependencies tuh kaya paket-paket eksternal/framework/library yang bantu build this project. nah salah satu dependency yang ucil download tuh namanya framer-motion buat bantu animasi atau motion saat interaksi sama webnyaa (slide in, fade out, etc). terus ada juga lucide react wicis library of icons buat uinya. pahaaaam gaaaaa? kalo uti lupa install dependencies nanti projectnya di uti ga jalann jadi wajib ya hukumnya setelah clone repo project manapun harus install dulu paket-paket that comes along with it.

2. Abistu uti coba run servernya di local host. coba ke terminal (ctrl + `) terus ketik "npm run dev". bisa ga?

3. Kalo bisa sok udah boleh coding. ikutin aja alur codingnya yang di atas kalo mau bikin fitur baru