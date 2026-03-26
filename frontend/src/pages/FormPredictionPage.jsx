import { useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE = 'http://localhost:8000';

export default function FormPredictionPage() {
  const { disease } = useParams();
  const [features, setFeatures] = useState({});
  const [result, setResult] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_BASE}/predict/${disease}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ features })
    });
    setResult(await response.json());
  };

  return (
    <section>
      <h2>{disease} Prediction</h2>
      <form onSubmit={onSubmit} className="form">
        {['feature_1', 'feature_2', 'feature_3', 'feature_4'].map((key) => (
          <label key={key}>
            {key}
            <input
              type="number"
              step="any"
              onChange={(e) => setFeatures((prev) => ({ ...prev, [key]: Number(e.target.value) }))}
            />
          </label>
        ))}
        <button type="submit">Predict</button>
      </form>
      {result && <p>Result: {result.prediction} ({Math.round(result.confidence * 100)}%)</p>}
    </section>
  );
}
