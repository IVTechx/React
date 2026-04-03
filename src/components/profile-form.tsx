import { useState } from "react";
import type { Person } from "../App";
import Select from "./select";
import Input from "./input";
import Button from "./button";

const CreateCards = ({ setProfiles }: { setProfiles: any }) => {
  const [imageInput, setimageInput] = useState("");
  const [nameValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPerson: Person = {
      id: Date.now(),
      image: imageInput,
      name: nameValue,
      title: titleValue,
    };
    console.log(newPerson);
    setProfiles((state: Person[]) => [...state, newPerson]);
    setimageInput("");
    setInputValue("");
    setTitleValue("");
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setimageInput(e.target.value);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value.trim());
  };

  const isDisabled =
    imageInput.trim() === "" || nameValue.trim() === "" || titleValue.trim() === "";

  return (
    <div>
      <h1 style={{ display: "block", textAlign: "center" }}>Form</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="formConatainer" onSubmit={handleSubmit}>
          <Select onChange={onSelectChange} value={imageInput} name={"picture"} />
          <Input onChange={onNameChange} value={nameValue} name={"name"} />
          <Input onChange={onTitleChange} value={titleValue} name={"title"} />
          <Button name={"submit"} isDisabled={isDisabled} />
        </form>
      </div>
    </div>
  );
};
export default CreateCards;
