# AI Disease Predictor (Full-Stack Starter)

This repository provides a cleaner, production-style structure for a disease prediction app inspired by notebook-based projects.

## Stack
- **Frontend:** React + Vite
- **Backend:** FastAPI
- **ML integration:** service layer ready to load `.pkl` and `.h5` models

## Pages
1. Landing page (`/`)
2. Dashboard (`/dashboard`)
3. Form prediction pages (`/predict/:disease`) for diabetes, heart, liver, kidney
4. Image prediction pages (`/analyze/:disease`) for pneumonia, breast-cancer, malaria

## API Endpoints
- `POST /predict/diabetes`
- `POST /predict/heart`
- `POST /predict/liver`
- `POST /predict/kidney`
- `POST /predict/pneumonia`
- `POST /predict/breast-cancer`
- `POST /predict/malaria`

## Run Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```

## Notes
Current predictors are deterministic stubs so UI and API wiring can be validated before integrating real trained models.
