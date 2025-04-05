import { useParams } from "react-router-dom";

const dashboard = () => {
  const { role } = useParams<{ role: string }>();
  return (
    <div>
      <h1>Welcome to the {role} Dashboard!</h1>
      <p>You are successfully logged in as a {role}.</p>
    </div>
  );
};

export default dashboard;
