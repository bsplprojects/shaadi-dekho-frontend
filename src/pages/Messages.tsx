import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { io } from "socket.io-client";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import {
  useGetProfile,
  useGetProfiles,
  useMyProfile,
} from "@/features/profile/hook";
import { useGetAllInterest } from "@/features/interest/hook";
import { api } from "@/lib/axios";

const socket = io("http://localhost:5000");

const Messages = () => {
  const [chatProfiles, setChatProfiles] = useState<any[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const user = useAuth();
  const { data: myProfile } = useMyProfile();
  const { data: interestData } = useGetAllInterest();

  useEffect(() => {
    if (!interestData || !user?.user?._id) return;

    const { interestedByYou, interestedToYou } = interestData?.data;

    const acceptedByYou = interestedByYou.filter(
      (i) => i.status === "accepted" && i.user !== user.user._id,
    );

    const acceptedYou = interestedToYou.filter(
      (i) => i.status === "accepted" && i.user !== user.user._id,
    );

    const merged = [...acceptedByYou, ...acceptedYou];

    const unique = merged.filter(
      (v, i, a) => a.findIndex((t) => t.user === v.user) === i,
    );

    setChatProfiles(unique);
  }, [interestData, user?.user?._id]);

  //websocket

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const receiverId = selectedProfile?.user;

  useEffect(() => {
    if (!user?.user?._id) return;

    socket.emit("register", user.user._id);

    const handleMessage = (msg) => {
      if (msg.senderId !== receiverId && msg.receiverId !== receiverId) {
        return;
      }

      const formatted = {
        from: msg.senderId === user.user._id ? "me" : "other",
        message: msg.text,
        time: new Date(msg.createdAt || Date.now()).toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, formatted]);
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [receiverId, user?.user?._id]);

  // Fetch old messages
  useEffect(() => {
    if (!receiverId) return;

    const fetchMessages = async () => {
      try {
        const res = await api.get(`/messages/${user?.user?._id}/${receiverId}`);

        const formatted = res.data.map((msg) => ({
          from: msg.senderId === user?.user?._id ? "me" : "other",
          message: msg.text,
          time: new Date(msg.createdAt).toLocaleTimeString(),
        }));

        setMessages(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [receiverId]);

  const sendMessage = () => {
    if (!message.trim() || !receiverId) return;

    socket.emit("send_message", {
      senderId: user?.user?._id,
      receiverId,
      text: message,
    });

    setMessage("");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container py-6">
        <h1 className="text-3xl font-display font-bold mb-6">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-14rem)]">
          {/* Conversations list */}
          <Card className="md:col-span-1 overflow-auto">
            <CardContent className="p-0">
              {chatProfiles.map((profile) => (
                <button
                  key={profile.user}
                  onClick={() => setSelectedProfile(profile)}
                  className={`w-full flex items-center gap-3 p-2 text-left border-b border-border hover:bg-muted transition-colors ${
                    selectedProfile?.user === profile.user ? "bg-accent" : ""
                  }`}
                >
                  {/* <div className="h-10 w-10 rounded-full overflow-hidden bg-primary/10 shrink-0">
                    {validImage ? (
                      <img
                        src={validImage}
                        alt="profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-bold text-primary">
                        {profile?.basicDetails?.name?.[0]}
                      </span>
                    )}
                  </div> */}
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {" "}
                    {profile.basicDetails.name[0]}{" "}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-sm">
                      {profile.basicDetails.name}
                    </span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Chat area */}
          <Card className="md:col-span-2 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              {selectedProfile ? (
                <>
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {selectedProfile.basicDetails?.name?.[0]}
                  </div>
                  <span className="font-semibold">
                    {selectedProfile.basicDetails?.name}
                  </span>
                </>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Select a conversation
                </span>
              )}
            </div>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, index) => (
                <div
                  key={index}
                  className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.from === "me"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted rounded-bl-md"
                    }`}
                  >
                    {m.message}
                    <div className="text-[10px] mt-1 opacity-60">{m.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
            <div className="p-4 border-t border-border flex gap-2 shrink-0">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" onClick={sendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
