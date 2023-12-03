import { Person } from "../../validation/form.schema";

interface Props {
  data: Person;
}

function PersonData({ data }: Props) {
  return (
    <>
      <div>
        <span>Name:</span>
        {data.name}
      </div>
      <div>
        <span>Age:</span>
        {data.age}
      </div>
      <div>
        <span>Email:</span>
        {data.email}
      </div>
      <div>
        <span>Password:</span>
        {data.password ? "exists" : "does not exist"}
      </div>
      <div>
        <span>Gender:</span>
        {data.gender}
      </div>
      <div>
        <span>Accept T&C:</span>
        {data.accept ? "accept" : "not accept"}
      </div>
      <div>
        <span>Picture:</span>
        {data.picture}
      </div>
      <div>
        <span>Country:</span>
        {data.country}
      </div>
    </>
  );
}

export default PersonData;
