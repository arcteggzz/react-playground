import Icon from "../../components/Icons";
import CustomDropdownSelect from "../../components/CustomDropdownSelect";
import { useState } from "react";
import Dropdown from "rsuite/Dropdown";

const PopupPage = () => {
  const [dropdownValue, setDropdownValue] = useState([
    { key: "name", value: "Name" },
  ]);

  const dropdownOptions = [
    { key: "name", value: "Name" },
    { key: "age", value: "Age" },
  ];

  return (
    <>
      <section className="flex">
        <button className="px-2">
          <p>Tega</p>
          <Icon width="10" height="6" id={"gbp-icon"} />
        </button>

        <CustomDropdownSelect
          value={dropdownValue}
          setValue={setDropdownValue}
          options={dropdownOptions}
          disabled={false}
        />

        <Dropdown title="Dropdown" trigger="hover">
          <Dropdown.Item>New File</Dropdown.Item>
          <Dropdown.Item>New File with Current Profile</Dropdown.Item>
          <Dropdown.Item>Download As...</Dropdown.Item>
          <Dropdown.Item>Export PDF</Dropdown.Item>
          <Dropdown.Item>Export HTML</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>About</Dropdown.Item>
        </Dropdown>
      </section>
    </>
  );
};

export default PopupPage;
