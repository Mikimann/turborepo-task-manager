import { useEffect, useState } from "react";

export async function getHealth() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3001/heatlh`);
  const data = await res.json();

  return { health: { data } };
}

export default function Health() {
  return (
    <div>
      <p>{health}</p>
    </div>
  );
}
