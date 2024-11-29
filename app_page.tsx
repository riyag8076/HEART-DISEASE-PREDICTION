import HeartDiseaseDetector from '../components/heart-disease-detector'
import HeartDiseaseInfo from '../components/heart-disease-info'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Assess Your Risk</h2>
          <HeartDiseaseDetector />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
          <HeartDiseaseInfo />
        </div>
      </div>
    </main>
  )
}

