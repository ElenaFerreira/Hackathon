"use client";

import React from "react";
import { MessageSquareIcon, HeartIcon, ShareIcon, PlusIcon } from "lucide-react";

export default function Community() {
  const posts = [
    {
      id: 1,
      user: {
        name: "Alex Kim",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      content: "Just repaired my favorite jeans using the sashiko technique I learned here. So proud of how it turned out!",
      image:
        "https://images.unsplash.com/photo-1625479144604-ae69462778b7?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 24,
      comments: 5,
      time: "2h ago",
    },
    {
      id: 2,
      user: {
        name: "Jordan Taylor",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      content: "Looking for advice on how to fix the sole of my sneakers. Has anyone tried the shoe goo method?",
      image: "",
      likes: 8,
      comments: 12,
      time: "5h ago",
    },
    {
      id: 3,
      user: {
        name: "Morgan Lee",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content: "Check out my upcycled tote bag made from an old jacket! Swipe for the before picture.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 56,
      comments: 7,
      time: "1d ago",
    },
  ];
  return (
    <div className="px-4 py-6 max-w-md mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Community</h1>
        <button className="bg-emerald-600 text-white p-2 rounded-full shadow-md hover:bg-emerald-700">
          <PlusIcon size={20} />
        </button>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow">
            {/* Post Header */}
            <div className="p-4 flex items-center">
              <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="font-medium">{post.user.name}</h3>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>
            {/* Post Content */}
            <div className="px-4 pb-2">
              <p className="text-sm">{post.content}</p>
            </div>
            {/* Post Image (if any) */}
            {post.image && (
              <div className="mt-2">
                <img src={post.image} alt="Post content" className="w-full h-64 object-cover" />
              </div>
            )}
            {/* Post Actions */}
            <div className="px-4 py-3 border-t border-gray-100 flex justify-between">
              <button className="flex items-center text-gray-600 text-sm">
                <HeartIcon size={18} className="mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center text-gray-600 text-sm">
                <MessageSquareIcon size={18} className="mr-1" />
                {post.comments}
              </button>
              <button className="flex items-center text-gray-600 text-sm">
                <ShareIcon size={18} className="mr-1" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
