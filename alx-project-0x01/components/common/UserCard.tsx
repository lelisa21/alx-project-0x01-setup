import React from "react";
import { UserProps } from "@/interfaces";
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="text-blue-600">{user.email}</p>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>📍 Address:</strong> {user.address.street},{" "}
          {user.address.city}
        </p>
        <p>
          <strong>📞 Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>🌐 Website:</strong> {user.website}
        </p>
      </div>

      <div className="mt-4 border-t pt-3 text-sm">
        <p className="font-semibold">🏢 {user.company.name}</p>
        <p className="italic">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
