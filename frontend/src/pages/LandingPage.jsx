import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section>
      <h1>Professional AI Disease Predictor</h1>
      <p>Predict chronic and image-based diseases using a clean full-stack architecture.</p>
      <Link className="button" to="/dashboard">Start Prediction</Link>
    </section>
  );
}
