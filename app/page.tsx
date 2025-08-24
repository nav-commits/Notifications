"use client";
import { useState } from "react";
import Card from "./components/Card";
import { notificationData } from "@/data";

export default function Home() {
  const [notifications, setNotifications] = useState(notificationData);

  const notificationsUnread = notifications.filter(
    (item) => item.unread === true
  );
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const markItemAllRead = (id: number) => {
    setNotifications((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, unread: false } : user
      )
    );
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Card
        notifications={notifications}
        notificationsUnread={notificationsUnread.length}
        onMarkAllRead={markAllRead}
        markItemAllRead={markItemAllRead}
      />
    </div>
  );
}
