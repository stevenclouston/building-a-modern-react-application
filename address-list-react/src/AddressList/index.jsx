import * as React from "react";

const AddressList = () => {
  const [address, setAddress] = React.useState("");
  const [addresses, setAddresses] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress("");
    setAddresses([...addresses, { id: address, name: address }]);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((item) => item.id !== id));
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          value={address}
          type="text"
          onChange={(event) => setAddress(event.target.value)}
        />
        <p className="help">Type an email address and hit enter</p>
      </form>
      <ul>
        {addresses.map((address) => (
          <li>
            <span>{address.name}</span>
            <a onClick={() => handleDelete(address.id)}>delete</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
