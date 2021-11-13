import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "Id Number 1",
      name: "hensel",
      image:
        "https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
