import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";

interface UsersPageProps {
  data: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(data);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  return (
    <div className="flex flex-col h-screen">
        <Header />
     <main className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      </main>
      {isModalOpen && (
        <UserModal
          user={null}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Users;
