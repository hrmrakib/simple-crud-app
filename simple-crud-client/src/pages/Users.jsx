import { useLoaderData } from "react-router-dom";

export const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
