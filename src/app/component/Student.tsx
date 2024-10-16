

export default function Student(data:any) {
    return (
      <div>
        <h1>Student Component</h1>

        <h2>Name: {data.name}</h2>
        <h2>Profession: {data.profession}</h2>
      </div>
    );
  }