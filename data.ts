import { Notification } from "./types/data";

export const notificationData: Notification[] = [
  {
    id: 1,
    name: "Angela Gray",
    title: "followed you",
    unread: true,
    timeAgo: "2 days ago",
    image: "/assets/images/angela.png",
  },
  {
    id: 2,
    name: "Anna Kim",
    title: "left the group Chess Club",
    unread: true,
    timeAgo: "5 hours ago",
    image: "/assets/images/anna-kim.png",
  },
  {
    id: 3,
    name: "Jacob Thompson",
    title: "commented on your post",
    comment: `Great post! I really enjoyed reading your thoughts. Keep it up!
  I especially liked the part about user experience and accessibility.
  Looking forward to your next post with more insights!`,
    unread: false,
    timeAgo: "3 days ago",
    image: "/assets/images/jacob-thompson.png",
  },

  {
    id: 4,
    name: "Kimberly Smith",
    title: "commented on your picture",
    unread: true,
    timeAgo: "1 week ago",
    image: "/assets/images/kimberly-smith.png",
  },
  {
    id: 5,
    name: "Emma Brown",
    title: "liked your comment",
    unread: false,
    timeAgo: "2 weeks ago",
    image: "/assets/images/mark-webber.png",
  },
];
