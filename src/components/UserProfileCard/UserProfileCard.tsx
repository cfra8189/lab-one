// UserProfileCard component implementation will go here
import React from 'react';
import type { UserProfileCardProps } from '../../types';
import './UserProfileCard.css';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="bg-white/70 border border-gray-200 rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 header-area">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-3xl lg:text-4xl font-bold flex-shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          {showEmail && (
            <p className="text-sm text-gray-600">{user.email}</p>
          )}
        </div>
      </div>

      {showRole && (
        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
            {user.role}
          </span>
        </div>
      )}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Edit Profile
        </button>
      )}

      {children && <div className="mt-4 pt-4 border-t border-gray-200">{children}</div>}
    </div>
  );
};

export default UserProfileCard;
