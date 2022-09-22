export const loadPeople = (): Promise<People> =>
  fetch("http://localhost:4000/people").then((res) => res.json());

export const loadPerson = (id: string): Promise<Person> =>
  fetch("http://localhost:4000/people/" + id).then((res) => res.json());

export const savePerson = (person: Person): Promise<Person> =>
  fetch("http://localhost:4000/people/" + person.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  }).then((res) => res.json());
