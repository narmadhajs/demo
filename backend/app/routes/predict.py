from fastapi import APIRouter

from app.services.predictors import (
    ImagePredictionRequest,
    NumericPredictionRequest,
    run_image_prediction,
    run_numeric_prediction,
)

router = APIRouter()


@router.post("/diabetes")
def predict_diabetes(payload: NumericPredictionRequest):
    return run_numeric_prediction("diabetes", payload)


@router.post("/heart")
def predict_heart(payload: NumericPredictionRequest):
    return run_numeric_prediction("heart", payload)


@router.post("/liver")
def predict_liver(payload: NumericPredictionRequest):
    return run_numeric_prediction("liver", payload)


@router.post("/kidney")
def predict_kidney(payload: NumericPredictionRequest):
    return run_numeric_prediction("kidney", payload)


@router.post("/pneumonia")
def predict_pneumonia(payload: ImagePredictionRequest):
    return run_image_prediction("pneumonia", payload)


@router.post("/breast-cancer")
def predict_breast_cancer(payload: ImagePredictionRequest):
    return run_image_prediction("breast-cancer", payload)


@router.post("/malaria")
def predict_malaria(payload: ImagePredictionRequest):
    return run_image_prediction("malaria", payload)
