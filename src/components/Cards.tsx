import type { Person } from "../App";
import styles from "../card.module.css";

const ProfileCard = ({ i, name, title }: { i: string; name: string; title: string }) => {
  console.log("Child rendered");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img src={i} alt={name} />{" "}
      </div>
      <h3 style={{ margin: "10px 0 5px", fontSize: "22px" }}>{name}</h3>
      <p style={{ color: "#777", fontSize: "14px" }}>Title: {title}</p>
    </div>
  );
};

const ProfileList = ({ profiles }: { profiles: Person[] }) => {
  console.log("Child rendered");
  return (
    <div>
      {profiles?.map((item) => (
        <ProfileCard key={item.id} i={item.image} name={item.name} title={item.title} />
      ))}
    </div>
  );
};

export default ProfileList;
