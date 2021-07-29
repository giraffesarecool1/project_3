const SearchInputForm = () => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <>
      <label>
        Username
        <input name="username" onChange={handleChange} />
      </label>
      <br />
      <label>
        Password
        <input name="password" onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};