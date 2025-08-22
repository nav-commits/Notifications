import Image from "next/image";
import { Notification } from "@/types/data";

interface NotificationData {
  notifications: Notification[];
  notificationsUnread: number;
  onMarkAllRead: () => void;
}

const Card: React.FC<NotificationData> = ({
  notifications,
  notificationsUnread,
  onMarkAllRead,
}) => {
  return (
    <div className="bg-white rounded-xl p-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[hsl(219,85%,26%)]">
            Notifications
          </h2>
          <div className="text-white py-1 px-3 rounded-sm text-sm flex items-center justify-center bg-[hsl(219,85%,26%)] font-bold">
            {notificationsUnread}
          </div>
        </div>

        <button
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          onClick={onMarkAllRead}
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications list */}
      <div className="flex flex-col gap-2">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start gap-4 py-3 cursor-pointer px-2 rounded-lg transition-colors ${
              notif.unread ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex-shrink-0">
              <Image
                src={notif.image}
                alt={notif.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-gray-700">
                <span className="font-semibold">{notif.name}</span>{" "}
                {notif.title}
              </p>
              <span className="text-xs text-gray-400 mt-1">
                {notif.timeAgo}
              </span>
              {notif.comment && (
                <div className="mt-2 border border-gray-300 rounded-lg p-3 bg-gray-50">
                  <p className="text-gray-600">{notif.comment}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
