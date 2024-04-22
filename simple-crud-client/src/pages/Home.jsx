export const Home = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    fetch("http://localhost:2468/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h2>hello</h2>

      <form onSubmit={handleAddUser}>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <input type='submit' value='Add User' />
      </form>
    </div>
  );
};
