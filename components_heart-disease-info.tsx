import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HeartDiseaseInfo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>About Heart Disease</CardTitle>
        <CardDescription>Understanding the risks and prevention</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Heart disease is a leading cause of death worldwide. It refers to various conditions that affect the heart and blood vessels, including coronary artery disease, heart valve disease, and arrhythmias.
        </p>
        <h3 className="text-lg font-semibold mb-2">Common Risk Factors:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>High blood pressure</li>
          <li>High cholesterol</li>
          <li>Smoking</li>
          <li>Obesity</li>
          <li>Physical inactivity</li>
          <li>Diabetes</li>
          <li>Excessive alcohol use</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Prevention Tips:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Maintain a healthy diet</li>
          <li>Exercise regularly</li>
          <li>Manage stress</li>
          <li>Quit smoking</li>
          <li>Limit alcohol consumption</li>
          <li>Regular health check-ups</li>
        </ul>
        <p className="text-sm text-gray-500">
          Remember, this tool provides a simplified risk assessment. For accurate medical advice, always consult with a healthcare professional.
        </p>
      </CardContent>
    </Card>
  )
}

