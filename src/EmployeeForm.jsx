
import { useState } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const savedEmployees = JSON.parse(
      localStorage.getItem("newEmployees") || "[]"
    );

    const newEmployee = {
      ...employee,
      id: Date.now(),
    };

    localStorage.setItem(
      "newEmployees",
      JSON.stringify([...savedEmployees, newEmployee])
    );

    setMessage("Employee added successfully!");
    setEmployee({ name: "", email: "", city: "", phone: "" });
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto form-card">
        <div className="card-body p-4">
          <h2 className="mb-4">Add Employee</h2>

          {message && (
            <div className="alert alert-success">{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Employee Name</label>
              <input
                className="form-control"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                className="form-control"
                name="city"
                value={employee.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
