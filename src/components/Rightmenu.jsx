// RightMenu.js
import React from 'react';
import { FaBug, FaUserPlus, FaBell } from 'react-icons/fa';

const notifications = [
  { id: 1, message: "You have a bug that needs...", time: "Just now" },
  { id: 2, message: "New user registered", time: "59 minutes ago" },
  { id: 3, message: "You have a bug that needs...", time: "12 hours ago" },
  { id: 4, message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { id: 1, message: "You have a bug that needs...", time: "Just now", icon: <FaBug /> },
  { id: 2, message: "Released a new version", time: "59 minutes ago", icon: <FaBell /> },
  { id: 3, message: "Submitted a bug", time: "12 hours ago", icon: <FaBug /> },
  { id: 4, message: "Modified a data in Page X", time: "Today, 11:59 AM", icon: <FaBug /> },
  { id: 5, message: "Deleted a page in Project X", time: "Feb 2, 2023", icon: <FaBug /> },
];

const contacts = [
  { id: 1, name: "Natali Craig", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "Drew Cano", avatar: "https://via.placeholder.com/40" },
  { id: 3, name: "Orlando Diggs", avatar: "https://via.placeholder.com/40" },
  { id: 4, name: "Andi Lane", avatar: "https://via.placeholder.com/40" },
  { id: 5, name: "Kate Morrison", avatar: "https://via.placeholder.com/40" },
  { id: 6, name: "Koray Okumus", avatar: "https://via.placeholder.com/40" },
];

const RightMenu = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-5 shadow-lg fixed right-0 top-0 bottom-0 overflow-y-auto">
      {/* Notifications Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Notifications</h3>
        <ul>
          {notifications.map((item) => (
            <li key={item.id} className="flex items-start space-x-2 mb-3">
              <span className="text-blue-500 text-lg"><FaBell /></span>
              <div>
                <p className="text-sm font-medium text-gray-700">{item.message}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Activities</h3>
        <ul>
          {activities.map((item) => (
            <li key={item.id} className="flex items-start space-x-2 mb-3">
              <span className="text-blue-500 text-lg">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-700">{item.message}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Contacts</h3>
        <ul>
          {contacts.map((item) => (
            <li key={item.id} className="flex items-center space-x-2 mb-3">
              <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full" />
              <span className="text-sm text-gray-700">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightMenu;
