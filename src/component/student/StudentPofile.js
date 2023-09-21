import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:9192/students/student/${id}`);
    setStudent(result.data);
  };

  return (
    <section className="bg-whitesmoke min-h-screen flex flex-col items-center">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-full w-32 h-32 mx-auto mb-3"
              />
              <h5 className="text-xl font-semibold mb-2">{`${student.firstName} ${student.lastName}`}</h5>
              <div className="flex justify-center space-x-2">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                  Call
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="border-b-2 border-gray-300 mb-4">
                <h2 className="text-2xl font-semibold">Student Profile</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-gray-700">First Name</h5>
                  </div>
                  <div className="w-3/4">
                    <p className="text-gray-900">{student.firstName}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-gray-700">Last Name</h5>
                  </div>
                  <div className="w-3/4">
                    <p className="text-gray-900">{student.lastName}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-gray-700">Email</h5>
                  </div>
                  <div className="w-3/4">
                    <p className="text-gray-900">{student.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/4">
                    <h5 className="text-gray-700">Department</h5>
                  </div>
                  <div className="w-3/4">
                    <p className="text-gray-900">{student.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
