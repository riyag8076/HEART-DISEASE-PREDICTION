"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface FormData {
  age: number
  gender: string
  cholesterol: number
  bloodPressure: number
  heartRate: number
  diabetes: string
}

export default function HeartDiseaseDetector() {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    gender: '',
    cholesterol: 0,
    bloodPressure: 0,
    heartRate: 0,
    diabetes: '',
  })
  const [risk, setRisk] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const calculateRisk = () => {
    let riskScore = 0

    // This is a very simplified risk calculation and should not be used for actual medical purposes
    if (formData.age > 45) riskScore += 1
    if (formData.gender === 'male') riskScore += 1
    if (formData.cholesterol > 200) riskScore += 2
    if (formData.bloodPressure > 140) riskScore += 2
    if (formData.heartRate > 100) riskScore += 1
    if (formData.diabetes === 'yes') riskScore += 2

    if (riskScore <= 2) return 'Low'
    if (riskScore <= 4) return 'Moderate'
    return 'High'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const riskLevel = calculateRisk()
    setRisk(riskLevel)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Enter Your Health Information</CardTitle>
        <CardDescription>Please provide accurate information for a better risk assessment.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" required onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select name="gender" onValueChange={(value) => handleSelectChange('gender', value)}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cholesterol">Total Cholesterol (mg/dL)</Label>
            <Input id="cholesterol" name="cholesterol" type="number" required onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloodPressure">Systolic Blood Pressure (mmHg)</Label>
            <Input id="bloodPressure" name="bloodPressure" type="number" required onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heartRate">Resting Heart Rate (bpm)</Label>
            <Input id="heartRate" name="heartRate" type="number" required onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="diabetes">Do you have diabetes?</Label>
            <Select name="diabetes" onValueChange={(value) => handleSelectChange('diabetes', value)}>
              <SelectTrigger id="diabetes">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Calculate Risk</Button>
        </form>
      </CardContent>
      {risk && (
        <CardFooter>
          <Alert className={`w-full ${risk === 'Low' ? 'bg-green-100' : risk === 'Moderate' ? 'bg-yellow-100' : 'bg-red-100'}`}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Risk Level: {risk}</AlertTitle>
            <AlertDescription>
              This is a simplified risk assessment. Please consult with a healthcare professional for accurate medical advice.
            </AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  )
}

