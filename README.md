# Asiduo Enterprises

Production-ready MERN application for an import-export business website with:

- Public corporate website
- Admin panel for products, inquiries, and categories
- Express + MongoDB REST API
- React frontend with reusable components
- Inquiry and quote request storage in MongoDB

## Folder Structure

```text
asiduo/
  backend/
    src/
      config/
        db.js
      controllers/
        categoryController.js
        inquiryController.js
        productController.js
      data/
        sampleData.js
        seed.js
      middlewares/
        errorMiddleware.js
      models/
        Category.js
        Inquiry.js
        Product.js
      routes/
        categoryRoutes.js
        inquiryRoutes.js
        productRoutes.js
      utils/
        appError.js
      server.js
    .env.example
    package.json
  frontend/
    public/
      index.html
    src/
      components/
        common/
        forms/
        layout/
        products/
      hooks/
        useAsync.js
      pages/
        admin/
      services/
        api.js
      styles/
        index.css
      utils/
        constants.js
      App.js
      index.js
    .env.example
    package.json
  package.json
```

## Setup

1. Install dependencies from the repo root:

```bash
npm install
```

2. Create environment files:

```bash
copy backend\\.env.example backend\\.env
copy frontend\\.env.example frontend\\.env
```

3. Start MongoDB locally and make sure it matches `backend/.env`.

4. Seed sample data:

```bash
npm run seed
```

5. Start backend:

```bash
npm run dev:backend
```

6. Start frontend in a new terminal:

```bash
npm run dev:frontend
```

## Default URLs

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- API Health: `http://localhost:5000/api/health`
- Admin Panel: `http://localhost:3000/admin`
