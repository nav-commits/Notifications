export interface Notification {
    id: number;
    name: string;
    title: string;       // main notification text
    comment?: string;    // optional multi-line comment
    unread: boolean;
    timeAgo: string;     // e.g., "2 days ago"
    image: string;       // URL or path to image
  }
  