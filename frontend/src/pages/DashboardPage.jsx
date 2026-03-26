import { Link } from 'react-router-dom';

const cards = [
  { name: 'Diabetes', path: '/predict/diabetes' },
  { name: 'Heart Disease', path: '/predict/heart' },
  { name: 'Liver Disease', path: '/predict/liver' },
  { name: 'Kidney Disease', path: '/predict/kidney' },
  { name: 'Pneumonia', path: '/analyze/pneumonia' },
  { name: 'Breast Cancer', path: '/analyze/breast-cancer' },
  { name: 'Malaria', path: '/analyze/malaria' }
];

export default function DashboardPage() {
  return (
    <section>
      <h2>Dashboard</h2>
      <div className="grid">
        {cards.map((card) => (
          <Link className="card" key={card.name} to={card.path}>{card.name}</Link>
        ))}
      </div>
    </section>
  );
}
