import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const gradePoints = {
  A: 10,
  B: 9,
  C: 8,
  D: 7,
  E: 6,
  F: 5,
  G: 0,
};

export default function SGPAcalculator() {
  const [subjects, setSubjects] = useState([{ name: "", credits: "", grade: "" }]);
  const [sgpa, setSGPA] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", credits: "", grade: "" }]);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (const subject of subjects) {
      const credits = parseFloat(subject.credits);
      const grade = subject.grade.toUpperCase();
      const gradePoint = gradePoints[grade];

      if (!gradePoint && gradePoint !== 0) continue;

      totalCredits += credits;
      totalGradePoints += credits * gradePoint;
    }

    if (totalCredits === 0) {
      setSGPA("Invalid (0 total credits)");
      return;
    }

    setSGPA((totalGradePoints / totalCredits).toFixed(2));
  };

  return (
    <motion.div className="max-w-3xl mx-auto p-4 space-y-4">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My SGPA Calculator!
      </motion.h1>

      {subjects.map((subject, index) => (
        <Card key={index} className="p-4">
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Credits"
              value={subject.credits}
              onChange={(e) => handleChange(index, "credits", e.target.value)}
            />
            <Input
              placeholder="Grade (A-G)"
              value={subject.grade}
              onChange={(e) => handleChange(index, "grade", e.target.value)}
            />
          </CardContent>
        </Card>
      ))}

      <div className="flex gap-4 justify-center">
        <Button onClick={addSubject}>Add Subject</Button>
        <Button onClick={calculateSGPA}>Calculate SGPA</Button>
      </div>

      {sgpa !== null && (
        <div className="text-center text-xl font-semibold mt-4">
          Your SGPA is: <span className="text-green-600">{sgpa}</span>
        </div>
      )}
    </motion.div>
  );
}
