function Form({
  userDetails,
  setUserDetails,
  handleSubmit,
  enableInputs,
  setEnableInputs,
}) {
  const {
    firstname,
    lastname,
    email,
    mobile,
    website,
    course,
    role,
    company,
    position,
    school,
    country,
    state,
    interest_1,
    interest_2,
    interest_3,
  } = userDetails;

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    setEnableInputs(true);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Resume Generator </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h4>Please Input Your Details</h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Firstname"
              name="firstname"
              required
              value={firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Lastname"
              name="lastname"
              required
              value={lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="Your Role"
              name="role"
              required
              value={role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              required
              value={country}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="form-control"
              required
              value={state}
              onChange={handleChange}
            />
          </div>
          <h5>Contact</h5>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Phone number"
              name="mobile"
              required
              value={mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="phone">Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              placeholder="website"
              name="website"
              required
              value={website}
              onChange={handleChange}
            />
          </div>
          <h5>Education</h5>
          <div className="form-group col-md-6">
            <label htmlFor="school">School</label>
            <input
              type="text"
              className="form-control"
              id="school"
              name="school"
              value={school}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="course">Course of Study</label>
            <input
              type="text"
              className="form-control "
              id="course"
              name="course"
              required
              value={course}
              onChange={handleChange}
            />
          </div>
          <h5>Experience</h5>
          <div className="form-group col-md-6">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="company"
              name="company"
              required
              value={company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              placeholder="position"
              name="position"
              required
              value={position}
              onChange={handleChange}
            />
          </div>
          {/* Interests form */}
          <h5>Interests</h5>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="interest_1"
              placeholder="interest"
              name="interest_1"
              required
              value={interest_1}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 mt-2">
            <input
              type="text"
              className="form-control"
              id="interest_2"
              placeholder="interest"
              name="interest_2"
              required
              value={interest_2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 mt-2">
            <input
              type="text"
              className="form-control"
              id="interest_3"
              placeholder="interest"
              name="interest_3"
              required
              value={interest_3}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary mt-3"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
}

export default Form;
