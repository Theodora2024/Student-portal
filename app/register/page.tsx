'use client';

import React, { useState } from 'react';

const COURSE_OPTIONS = [
  { id: 'web-dev', label: 'Web Development' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'devops', label: 'DevOps Engineering' },
  { id: 'cloud', label: 'Cloud Computing' },
  { id: 'cyber-security', label: 'Cyber Security' },
];

export default function StudentRegistration() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    courses: [] as string[] 
  });

  // Handles checking and unchecking boxes
  const handleCheckboxChange = (courseId: string) => {
    setFormData((prev) => {
      const isSelected = prev.courses.includes(courseId);
      if (isSelected) {
        // Remove it if it was already there (untick)
        return { ...prev, courses: prev.courses.filter((id) => id !== courseId) };
      } else {
        // Add it if it wasn't there (tick)
        return { ...prev, courses: [...prev.courses, courseId] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration Successful! Welcome to the portal."); 
        console.log("Success: Multi-course data sent to API");
      }
    } catch (error) {
      alert("Error: Could not reach the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b pb-4">
          Student Registration
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Your Courses</label>
            <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-md border border-gray-200">
              {COURSE_OPTIONS.map((course) => (
                <label key={course.id} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-white rounded transition">
                  <input 
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                    checked={formData.courses.includes(course.id)}
                    onChange={() => handleCheckboxChange(course.id)}
                  />
                  <span className="text-gray-700">{course.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg active:scale-95"
          >
            Register Student
          </button>
        </form>
      </div>
    </div>
  );
}
