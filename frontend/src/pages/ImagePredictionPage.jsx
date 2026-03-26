import { useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE = 'http://localhost:8000';

export default function ImagePredictionPage() {
  const { disease } = useParams();
  const [imageBase64, setImageBase64] = useState('');
  const [result, setResult] = useState(null);

  const onFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const raw = await file.arrayBuffer();
    setImageBase64(btoa(String.fromCharCode(...new Uint8Array(raw))));
  };

  const onAnalyze = async () => {
    const response = await fetch(`${API_BASE}/predict/${disease}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image_base64: imageBase64 })
    });
    setResult(await response.json());
  };

  return (
    <section>
      <h2>{disease} Image Analysis</h2>
      <input type="file" accept="image/*" onChange={onFile} />
      <button onClick={onAnalyze} disabled={!imageBase64}>Analyze</button>
      {result && <p>Result: {result.prediction} ({Math.round(result.confidence * 100)}%)</p>}
    </section>
  );
}
