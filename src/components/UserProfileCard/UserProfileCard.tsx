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
      <div className="flex items-center space-x-3 mb-4 header-area">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-32 h-32 relative left-0 sm:left-[100px] md:left-[200px] lg:left-[300px] xl:left-[380px] rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl lg:text-4xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
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
