from hashlib import sha256

from pydantic import BaseModel, Field


class NumericPredictionRequest(BaseModel):
    features: dict[str, float] = Field(default_factory=dict)


class ImagePredictionRequest(BaseModel):
    image_base64: str


def _score_from_text(text: str) -> float:
    digest = sha256(text.encode("utf-8")).hexdigest()
    return (int(digest[:8], 16) % 10000) / 10000


def run_numeric_prediction(disease: str, payload: NumericPredictionRequest) -> dict:
    serialized = f"{disease}:{sorted(payload.features.items())}"
    probability = _score_from_text(serialized)
    return {
        "disease": disease,
        "prediction": "positive" if probability >= 0.5 else "negative",
        "confidence": round(max(probability, 1 - probability), 4),
    }


def run_image_prediction(disease: str, payload: ImagePredictionRequest) -> dict:
    serialized = f"{disease}:{payload.image_base64[:200]}"
    probability = _score_from_text(serialized)
    return {
        "disease": disease,
        "prediction": "positive" if probability >= 0.5 else "negative",
        "confidence": round(max(probability, 1 - probability), 4),
    }
