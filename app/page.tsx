"use client";
import { useState, useEffect, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export interface Student {
  id?: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    phone_number: "",
    gender: "Other",
  });

  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  //Handle Form Submit
  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);

    if (editId) {
      //Update

      const response = await updateStudent(editId);

      if (response) {
        toast.success("Student update succefully!");
        fetchStudents();
        setEditId(null);
      } else {
        toast.error(`Failed to update student`);
      }
    } else {
      //Add
      const response = await addStudent();

      if (response) {
        toast.success("Student added successfully!");
        fetchStudents();
      } else {
        toast.error(`Failed to create student`);
      }
    }

    setForm({
      name: "",
      email: "",
      phone_number: "",
      gender: "Other",
    });
  }

  const updateStudent = async (editId: string) => {
    const response = await fetch(`/api/students?id=${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    return response.ok;
  };

  const addStudent = async () => {
    const response = await fetch(`/api/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    return response.ok;
  };

  //Fetch Students Data
  const fetchStudents = async () => {
    const response = await fetch(`/api/students`);

    if (response.ok) {
      const data = await response.json();
      setStudents(data || []);
    } else {
      toast.error("Failed to read data");
    }
  };

  // Handle Edit Student
  function handleEdit(student: Student) {
    setForm(student);
    if (student.id) {
      setEditId(student.id);
    }
  }

  //Handle Delete Student
  async function handleDelete(studentId: string) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await deleteStudent(studentId);

      if (response) {
        toast.success("Student deleted successfully!");
        fetchStudents();
      } else {
        toast.error("Failed to delete student:");
      }
    }
  }

  const deleteStudent = async (studentId: string) => {
    const response = await fetch(`/api/students?id=${studentId}`, {
      method: "DELETE",
    });

    return response.ok;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <Toaster />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Formulário - ocupa 1 coluna */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-black">
              Student Management
            </h1>

            <form onSubmit={handleFormSubmit}>
              {/* Label nome */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                  placeholder="Rahul Sharma"
                />
              </div>

              {/* Label Email */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                  placeholder="rahul_sharma@example.net"
                />
              </div>

              {/* Label Telefone */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  value={form.phone_number}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone_number: e.target.value,
                    })
                  }
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                  placeholder="7412596325"
                />
              </div>
              {/* Label genero */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
                  value={form.gender}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Botão */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
              >
                {/* Se tiver um estado para editar, fica como Update */}
                {editId ? "Update" : "Add"}
              </button>
            </form>
          </div>

          {/* Tabela - ocupa 2 colunas */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Students List
            </h2>

            {students.length === 0 ? (
              <p className="text-blue-600 text-2xl">Sem alunos cadastrados</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
                        Name
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
                        Email
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
                        Phone
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
                        Gender
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Linha placeholder */}
                    {students.map((stu) => (
                      <tr key={stu.id}>
                        <td className="border border-gray-300 px-4 py-2 text-gray-600">
                          {stu.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-600">
                          {stu.email}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-600">
                          {stu.phone_number}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-600">
                          {stu.gender}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <button
                            className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white px-3 py-1 rounded mr-2 text-sm"
                            onClick={() => handleEdit(stu)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-800 cursor-pointer text-white px-3 py-1 rounded text-sm"
                            onClick={() => stu.id && handleDelete(stu.id)} //Se tiver id, chama a função
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
