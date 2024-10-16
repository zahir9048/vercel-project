// import Link from "next/link";

interface StudentProps {
  name: string;
  profession: string;
}

export default function Student({ name, profession }: StudentProps) { 
  return (
    <div>
      <h1>Student Component</h1>
      <h2>Name: {name}</h2>
      <h2>Profession: {profession}</h2>
    </div>
  );
}