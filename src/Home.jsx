
import { useEffect, useState } from "react";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load employees");
        }
        return response.json();
      })
      .then((data) => setEmployees(data))
      .catch(() => setError("Unable to load employees. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.email} ${employee.address.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="fw-bold">Employee Dashboard</h2>
      <p className="text-secondary">
        View and search employee information.
      </p>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-secondary">Total Employees</h6>
              <h3>{employees.length}</h3>
            </div>
          </div>
        </div>
      </div>

      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search by name, email or city..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading employees...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address.city}</td>
                  <td>{employee.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEmployees.length === 0 && (
            <p className="text-center text-secondary">
              No employees found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
