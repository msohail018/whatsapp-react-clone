export const mockContacts = [
  {
    id: 1,
    name: "The Bois 🍻",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TB&backgroundColor=00a884",
    lastMessage: "~Jake: Who's bringing the pizza tonight?",
    time: "10:52 AM",
    unread: 5,
    online: true,
    muted: false,
    isGroup: true,
    isFavorite: true,
    messages: [
      { id: 1, text: "Anyone up for game night?", senderName: "Alex", senderPhone: "+1 (555) 123-4567", sender: "other", time: "8:59 PM" },
      { id: 2, text: "I'm in! What time?", senderName: "Jake", senderPhone: "+1 (555) 234-5678", sender: "other", time: "9:05 PM", replyTo: { sender: "Alex", text: "Anyone up for game night?" } },
      { id: 3, text: "Yes, Whatsup?", sender: "me", time: "9:28 PM", edited: true },
      { id: 4, text: "Ride available on 23 and 24 Jan to downtown", senderName: "Mike", senderPhone: "+1 (203) 504-4076", sender: "other", time: "10:53 AM" },
      { id: 5, text: "Ride available from suburb area and nearby places to downtown on 23 & 24 Jan. Do reach out to me if interested", senderName: "Sarah", senderPhone: "+1 (864) 509-3840", sender: "other", time: "1:21 PM" }
    ]
  },
  {
    id: 2,
    name: "Work Gang 💼",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=WG&backgroundColor=111b21",
    lastMessage: "~Lisa: The client loved the presentation!",
    time: "10:45 AM",
    unread: 12,
    online: false,
    muted: true,
    isGroup: true,
    isFavorite: false,
    messages: [
      { id: 1, text: "Did everyone submit their reports?", senderName: "Lisa", senderPhone: "+1 (312) 555-0101", sender: "other", time: "9:00 AM" },
      { id: 2, text: "Just sent mine", sender: "me", time: "9:15 AM" },
      { id: 3, text: "The client loved the presentation!", senderName: "Lisa", senderPhone: "+1 (312) 555-0101", sender: "other", time: "10:45 AM" }
    ]
  },
  {
    id: 3,
    name: "Sarah Miller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "That movie was amazing! 🎬",
    time: "10:20 AM",
    unread: 2,
    online: true,
    muted: false,
    isGroup: false,
    isFavorite: true,
    messages: [
      { id: 1, text: "Hey, did you watch the new Marvel movie?", sender: "other", time: "10:00 AM" },
      { id: 2, text: "Not yet! No spoilers please 😅", sender: "me", time: "10:05 AM" },
      { id: 3, text: "That movie was amazing! 🎬", sender: "other", time: "10:20 AM" }
    ]
  },
  {
    id: 4,
    name: "Pizza Palace 🍕",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PP&backgroundColor=fd7e14",
    lastMessage: "Your order is on the way! 🚗",
    time: "9:30 AM",
    unread: 0,
    online: false,
    muted: false,
    isGroup: false,
    isFavorite: false,
    messages: [
      { id: 1, text: "Hi! I'd like to order a large pepperoni", sender: "me", time: "9:00 AM" },
      { id: 2, text: "Sure! That will be $18.99", sender: "other", time: "9:05 AM" },
      { id: 3, text: "Your order is on the way! 🚗", sender: "other", time: "9:30 AM" }
    ]
  },
  {
    id: 5,
    name: "Mom ❤️",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mom",
    lastMessage: "Don't forget to eat your vegetables!",
    time: "Yesterday",
    unread: 0,
    online: false,
    muted: false,
    isGroup: false,
    isFavorite: true,
    messages: [
      { id: 1, text: "Hey sweetie, how are you?", sender: "other", time: "Yesterday" },
      { id: 2, text: "I'm good mom! Working hard 💪", sender: "me", time: "Yesterday" },
      { id: 3, text: "Don't forget to eat your vegetables!", sender: "other", time: "Yesterday" }
    ]
  },
  {
    id: 6,
    name: "Dev Squad 🚀",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=6f42c1",
    lastMessage: "~Alex: The bug is fixed! Finally! 🎉",
    time: "Yesterday",
    unread: 45,
    online: true,
    muted: true,
    isGroup: true,
    isFavorite: true,
    messages: [
      { id: 1, text: "Anyone else getting a 500 error?", senderName: "Tom", senderPhone: "+1 (555) 999-8888", sender: "other", time: "Yesterday" },
      { id: 2, text: "Yeah, looking into it now", sender: "me", time: "Yesterday" },
      { id: 3, text: "The bug is fixed! Finally! 🎉", senderName: "Alex", senderPhone: "+1 (555) 777-6666", sender: "other", time: "Yesterday" }
    ]
  },
  {
    id: 7,
    name: "Gym Buddy 🏋️",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gym",
    lastMessage: "Leg day tomorrow? 💪",
    time: "Tuesday",
    unread: 0,
    online: false,
    muted: false,
    isGroup: false,
    isFavorite: false,
    messages: [
      { id: 1, text: "Great workout today!", sender: "other", time: "Tuesday" },
      { id: 2, text: "Yeah, I'm gonna be sore tomorrow 😂", sender: "me", time: "Tuesday" },
      { id: 3, text: "Leg day tomorrow? 💪", sender: "other", time: "Tuesday" }
    ]
  },
  {
    id: 8,
    name: "Coffee Club ☕",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=CC&backgroundColor=795548",
    lastMessage: "~Emma: Try the new oat milk latte!",
    time: "Monday",
    unread: 3,
    online: false,
    muted: false,
    isGroup: true,
    isFavorite: false,
    messages: []
  },
  {
    id: 9,
    name: "Tech News",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TN&backgroundColor=007bff",
    lastMessage: "Apple just announced new iPhone 🔥",
    time: "Monday",
    unread: 0,
    online: false,
    muted: true,
    isGroup: false,
    isFavorite: false,
    messages: []
  },
  {
    id: 10,
    name: "Dad",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dad",
    lastMessage: "Call me when you get a chance",
    time: "Sunday",
    unread: 0,
    online: false,
    muted: false,
    isGroup: false,
    isFavorite: true,
    messages: []
  },
  {
    id: 11,
    name: "Book Club 📚",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BC&backgroundColor=e83e8c",
    lastMessage: "~Mike: Next book is '1984' by Orwell",
    time: "Last Week",
    unread: 8,
    online: false,
    muted: false,
    isGroup: true,
    isFavorite: false,
    messages: []
  },
  {
    id: 12,
    name: "Travel Squad ✈️",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TS&backgroundColor=20c997",
    lastMessage: "~Nina: Bali trip is confirmed! 🏝️",
    time: "Last Week",
    unread: 0,
    online: true,
    muted: false,
    isGroup: true,
    isFavorite: true,
    messages: []
  }
];
