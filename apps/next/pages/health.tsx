import { useEffect, useState } from "react";

export default function Health() {
  const [health, setHealth] = useState<string>();
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    const getHealth = async () => {
      try {
        const res = await fetch(`http://localhost:3001/health`);
        const data = await res.json();
        setHealth(data);
      } catch (error) {
        setError(error);
      }
    };
    getHealth();
  }, []);
  if (error) {
    return <>Something went wrong: {error}</>;
  }
  return (
    <div>
      <p>{health}</p>
    </div>
  );
}
