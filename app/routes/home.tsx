import type { Route } from "./+types/home";
import Navbar from '../components/Navbar';
export function meta({}: Route.MetaArgs) {
  return [
    { title: "aiRes" },
    { name: "description", content: "Your Personal Resume Analyzer" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Resume Ratings</h1>
        <h2>Review your submission and get AI-powered feedback</h2>
      </div>
    </section>
  </main>
}
