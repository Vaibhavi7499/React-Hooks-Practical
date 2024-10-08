import React, { useState } from "react";

const ContactManager = () => {
  let [contactInfo, setContactInfo] = useState({
    id: "",
    name: "",
    email: "",
    isUpdate: false,
  });

  let [data, setData] = useState([]);

  function getInptId(e) {
    setContactInfo({
      ...contactInfo,
      id: e.target.value,
    });
  }

  function getInptName(e) {
    setContactInfo({
      ...contactInfo,
      name: e.target.value,
    });
  }

  function getInptEmail(e) {
    setContactInfo({
      ...contactInfo,
      email: e.target.value,
    });
  }

  function update() {
    let b = data.map((e) => {
      if (e?.id === contactInfo.id) {
        return {
          ...e,
          id: contactInfo.id,
          name: contactInfo.name,
          email: contactInfo.email,
        };
      } else {
        return e;
      }
    });
    setData(b);
    clearForm();
  }
  console.log(contactInfo);

  let addContacts = () => {
    if (contactInfo.name === "" && contactInfo.email === "") {
      alert("Please enter the id, name , email");
    } else {
      if (contactInfo.isUpdate) {
        update();
      } else {
        {
          setData([...data, contactInfo]);
          clearForm();
        }
      }
    }
  };
  let deleteContact = (id) => {
    let a = data.filter((e) => {
      return e.id !== id;
    });
    setData(a);
    clearForm();
  };

  function clearForm() {
    setContactInfo({
      id: "",
      name: "",
      email: "",
      isUpdate: false,
    });
  }

  let updateContact = (obj) => {
    setContactInfo({
      id: obj.id,
      name: obj.name,
      email: obj.email,
      isUpdate: true,
    });
  };

  return (
    <div>
      <div>
        <h1>Contact Manager</h1>
        <h3>{contactInfo.isUpdate ? "Edit" : "Add"} Contact</h3>
        <label>Id : </label>
        <input
          type="text"
          value={contactInfo.id}
          onChange={(e) => getInptId(e)}
          disabled={contactInfo.isUpdate}
        />{" "}
        &nbsp; &nbsp;
        <label>Name : </label>
        <input
          type="text"
          value={contactInfo.name}
          onChange={(e) => getInptName(e)}
        />{" "}
        &nbsp; &nbsp;
        <label>Email : </label>
        <input
          type="text"
          value={contactInfo.email}
          onChange={(e) => getInptEmail(e)}
        />{" "}
        &nbsp; &nbsp;
        <button className="btn btn-primary" onClick={addContacts}>
          {contactInfo.isUpdate ? "Update" : "Add"}
        </button>
      </div>
      <div>
        <h3>Contact List</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateContact(ele)}
                  >
                    update
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(ele.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactManager;
