"use client";

import type React from "react";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Settings,
  Paperclip,
  Send,
  Smile,
  MoreHorizontal,
} from "lucide-react";

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread?: number;
  isOnline?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  time: string;
  isOwn: boolean;
  status?: "sent" | "delivered" | "read";
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Lan Anh",
    lastMessage: "Chào Hậu :)",
    time: "18/5",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
  },
  {
    id: "2",
    name: "Minh Tuấn",
    lastMessage: "Cảm ơn bạn nhiều!",
    time: "17/5",
    avatar: "/placeholder.svg?height=40&width=40",
    unread: 2,
  },
  {
    id: "3",
    name: "Thu Hà",
    lastMessage: "Hẹn gặp lại nhé",
    time: "16/5",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const messages: Message[] = [
  {
    id: "2",
    senderId: "1",
    senderName: "Lan Anh",
    content:
      "Mình cũng có thể ra soát trang bán phòng của bạn và góp ý một số mẹo chỉnh sửa để hiển thị tốt hơn trên kết quả tìm kiếm, tăng tương tác và lượt view và từ đó để có đặt phòng hơn. Nếu bạn quan tâm thì có thể nhắn lại mình nhá!",
    time: "06:54",
    isOwn: false,
    status: "read",
  },
  {
    id: "3",
    senderId: "me",
    senderName: "Tôi",
    content: "hello tôi muốn đặt phòng",
    time: "10:42",
    isOwn: true,
    status: "read",
  },
  {
    id: "4",
    senderId: "1",
    senderName: "Lan Anh",
    content: "Chào Hậu :)",
    time: "11:46",
    isOwn: false,
    status: "delivered",
  },
];

export default function ChatInterface() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
  const [messageInput, setMessageInput] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[600px] bg-white border-t   border-gray-200">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-gray-900">Tin nhắn</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1">
            <Button
              variant={activeTab === "all" ? "default" : "ghost"}
              size="lg"
              onClick={() => setActiveTab("all")}
              className="rounded-full border"
            >
              Tất cả
            </Button>
            <Button
              variant={activeTab === "unread" ? "default" : "ghost"}
              size="lg"
              onClick={() => setActiveTab("unread")}
              className="rounded-full border"
            >
              Chưa đọc
            </Button>
          </div>
        </div>

        {/* Contact List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedContact.id === contact.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.name}
                    />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {contact.isOnline && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">
                      {contact.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {contact.lastMessage}
                  </p>
                  <p className="text-xs text-gray-400">
                    Đại sứ Chủ nhà siêu cấp
                  </p>
                </div>
                {contact.unread && (
                  <Badge
                    variant="destructive"
                    className="h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {contact.unread}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={selectedContact.avatar || "/placeholder.svg"}
                alt={selectedContact.name}
              />
              <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-gray-900">
                {selectedContact.name}
              </h2>
              {selectedContact.isOnline && (
                <p className="text-sm text-green-600">Đang hoạt động</p>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {/* Date separator */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-xs text-gray-600">18 thg 5</span>
              </div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.isOwn ? "justify-end" : "justify-start"
                }`}
              >
                {!message.isOwn && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt={message.senderName}
                    />
                    <AvatarFallback>
                      {message.senderName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`max-w-xs lg:max-w-md ${
                    message.isOwn ? "order-1" : ""
                  }`}
                >
                  {!message.isOwn && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {message.senderName}
                      </span>
                      <span className="text-xs text-gray-500">
                        • Đại sứ Chủ nhà siêu cấp {message.time}
                      </span>
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl ${
                      message.isOwn
                        ? "bg-gray-900 text-white rounded-br-md"
                        : "bg-gray-100 text-gray-900 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>

                  {message.isOwn && (
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs text-gray-500">
                        {message.time}
                      </span>
                      <span className="text-xs text-gray-400">
                        Lan Anh đã đọc
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Soạn tin nhắn..."
                className="pr-20 rounded-full border border-gray-300 focus:ring-gray-300 focus:border-transparent"
                autoFocus
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Paperclip className="h-4 w-4 text-gray-400" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Smile className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="rounded-full bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              disabled={!messageInput.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
