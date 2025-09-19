import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UserData } from "@/interfaces";
import Button from "@/components/common/Button";

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button
            label="Add User"
            variant="primary"
            size="md"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          user={null}
          isLoading={false}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
