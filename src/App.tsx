import { useState } from "react";
import ProfileList from "./components/Cards";
import CreateCards from "./components/profile-form";

export interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
}



const App = () => {
  console.log("Parent rendered");

  const [profiles, setProfiles] = useState<Person[]>([]);
  return (
    <div>
      <CreateCards setProfiles={setProfiles} />
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProfileList profiles={profiles} />
      </div>
    </div>
  );
};
export default App;
