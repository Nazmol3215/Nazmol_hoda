import React, { useState, useEffect, useRef } from "react";
import "./LiveChat.css";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", from: "support" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  const chatBoxRef = useRef(null);

  const questionsAndAnswers = {


    " ই-কমার্স ওয়েবসাইট কী?": "ই-কমার্স ওয়েবসাইট এমন একটি প্ল্যাটফর্ম যেখানে পণ্য বা সেবা অনলাইনে বিক্রি করা যায়।",
    "ই-কমার্স ওয়েবসাইটের প্রয়োজন কেন?":" এটি ব্যবসাকে অনলাইনে নিয়ে আসে, গ্রাহকের সংখ্যা বৃদ্ধি করে এবং বিক্রির সুযোগ বাড়ায়।",
    "পণ্যটি কি স্টকে আছে?": "দয়া করে পণ্যের নাম বা আইডি শেয়ার করুন। আমি চেক করে জানাচ্ছি পণ্যটি স্টকে আছে কি না।",
    "আপনার ওয়েবসাইটে কী ধরনের পেমেন্ট অপশন রয়েছে?": "আমাদের ওয়েবসাইটে ক্রেডিট/ডেবিট কার্ড, মোবাইল ব্যাংকিং (যেমন: বিকাশ, নগদ), এবং ক্যাশ অন ডেলিভারি অপশন রয়েছে।",
    "ই-কমার্স ওয়েবসাইট তৈরির খরচ কত?": "খরচ নির্ভর করে ফিচার এবং ডেভেলপমেন্টের জটিলতার ওপর। আপনার প্রয়োজন অনুযায়ী কাস্টমাইজ করা যাবে।",
    "একটি ই-কমার্স ওয়েবসাইট তৈরিতে কত সময় লাগে?": "সাধারণত ২-৪ সপ্তাহ সময় লাগে, তবে এটি প্রকল্পের জটিলতার ওপর নির্ভর করে",
    "ই-কমার্স ওয়েবসাইট কি মোবাইল ফ্রেন্ডলি হবে?": "হ্যাঁ, আমরা মোবাইল ফ্রেন্ডলি এবং রেসপন্সিভ ওয়েবসাইট তৈরি করি",
    "পেমেন্ট সিস্টেম ইন্টিগ্রেশন কি থাকবে?": "হ্যাঁ, পেমেন্ট গেটওয়ে যেমন Stripe, PayPal, এবং বিকাশ ইন্টিগ্রেশন করতে পারি।",
    "ই-কমার্স ওয়েবসাইটে কতগুলো পণ্য আপলোড করা যাবে?": "আপনার হোস্টিং স্পেসের ওপর নির্ভর করে পণ্য সংখ্যা সীমাহীন হতে পারে।",
    "আমি কি নিজে পণ্য আপলোড করতে পারব?": "হ্যাঁ, আমরা এমন ইন্টারফেস তৈরি করি যেখানে আপনি সহজেই পণ্য আপলোড করতে পারবেন।",
    "ই-কমার্স ওয়েবসাইট কি সুরক্ষিত হবে?": "হ্যাঁ, আমরা SSL সার্টিফিকেট এবং অন্যান্য নিরাপত্তা ব্যবস্থা নিশ্চিত করি।",
    "ওয়েবসাইট কি SEO অপটিমাইজড হবে?": "হ্যাঁ, আমরা SEO ফ্রেন্ডলি ওয়েবসাইট তৈরি করি।",
    "ওয়েবসাইটের ডিজাইন কি কাস্টম হবে?": "হ্যাঁ, আপনার ব্র্যান্ডের সাথে মিল রেখে কাস্টম ডিজাইন করা হবে।",
    "আমি কি আমার পছন্দমতো থিম ব্যবহার করতে পারব?": "হ্যাঁ, আপনার পছন্দ অনুযায়ী থিম কাস্টমাইজ করা যাবে।",
    "ওয়েবসাইটে লোগো ও ব্যানার যুক্ত করা যাবে কি?": "হ্যাঁ, আমরা লোগো এবং ব্যানার আপলোডের অপশন দিয়ে থাকি।",
    "কোন ধরনের লেআউট পাওয়া যাবে": "আপনার প্রয়োজন অনুযায়ী গ্রিড, লিস্ট, বা কার্ডভিত্তিক লেআউট দেওয়া হবে।",
    "কালার স্কিম কি পরিবর্তন করা যাবে?": "হ্যাঁ, ওয়েবসাইটের কালার স্কিম সম্পূর্ণ কাস্টমাইজ করা যাবে।",
    "কাস্টম ফন্ট ব্যবহার করা যাবে কি?": "হ্যাঁ, আপনার পছন্দমতো ফন্ট ইন্টিগ্রেট করা যাবে।",
    "ওয়েবসাইটের ল্যাঙ্গুয়েজ কি মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট করবে?": "হ্যাঁ, মাল্টি-ল্যাঙ্গুয়েজ ফিচার ইন্টিগ্রেট করা যাবে।",
    "ডার্ক মোড ফিচার থাকবে কি?": "হ্যাঁ, চাইলে ডার্ক মোড ফিচার যুক্ত করা যাবে।",
    "ওয়েবসাইটে কি লাইভ চ্যাট ফিচার থাকবে?": "হ্যাঁ, লাইভ চ্যাট ফিচার ইন্টিগ্রেট করা যাবে।",
    "কাস্টমার রিভিউ সেকশন কি থাকবে?": "হ্যাঁ, কাস্টমার রিভিউ এবং রেটিং সিস্টেম যুক্ত করা যাবে।",
    "শপিং কার্ট সিস্টেম কি থাকবে?": "হ্যাঁ, ব্যবহারকারীরা শপিং কার্টে পণ্য যোগ করতে পারবেন।",
    "উইশলিস্ট ফিচার কি থাকবে?": "হ্যাঁ, উইশলিস্ট ফিচার অন্তর্ভুক্ত করা যাবে।",
    "পণ্য ফিল্টার এবং সার্চ ফিচার থাকবে কি?": "হ্যাঁ, পণ্য খোঁজার জন্য ফিল্টার এবং সার্চ ফিচার দেওয়া হবে।",
    "ডিসকাউন্ট কুপন সাপোর্ট করা হবে কি?": "হ্যাঁ, ডিসকাউন্ট কুপন সিস্টেম ইন্টিগ্রেট করা যাবে।",
    "অর্ডার ট্র্যাকিং সিস্টেম থাকবে কি?": "হ্যাঁ, গ্রাহকরা তাদের অর্ডার ট্র্যাক করতে পারবেন।",
    "ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম থাকবে কি?": "হ্যাঁ, পণ্যের স্টক ট্র্যাক করার জন্য ইনভেন্টরি ম্যানেজমেন্ট থাকবে।",
    "ইমেইল নোটিফিকেশন সিস্টেম থাকবে কি?": "হ্যাঁ, অর্ডার এবং পেমেন্ট আপডেটের জন্য ইমেইল নোটিফিকেশন দেওয়া হবে।",
    "পণ্য ডেলিভারি চার্জ ক্যালকুলেশন সিস্টেম থাকবে?": "হ্যাঁ, ডেলিভারি চার্জ কাস্টমাইজ করা যাবে।",
    "কাস্টমার অ্যাকাউন্ট ম্যানেজমেন্ট সিস্টেম থাকবে কি?": "হ্যাঁ, গ্রাহকদের জন্য লগইন, রেজিস্ট্রেশন এবং প্রোফাইল ম্যানেজমেন্ট সিস্টেম থাকবে।",
    "অ্যাডমিন প্যানেল কি থাকবে?": "হ্যাঁ, অ্যাডমিন প্যানেল থেকে পণ্য, অর্ডার এবং ব্যবহারকারীদের ম্যানেজ করা যাবে।",
    "ওয়েবসাইট কোন টেকনোলজিতে তৈরি হবে": "React.js, Node.js, এবং MongoDB এর মতো আধুনিক টেকনোলজিতে তৈরি হবে।",
    "ওয়েবসাইটের হোস্টিং কে করবে?": "হোস্টিং আপনার পছন্দ অনুযায়ী সেটআপ করা হবে, যেমন Vercel, Netlify, বা AWS।",
    "ওয়েবসাইট কি স্কেলেবল হবে": "হ্যাঁ, আমরা স্কেলেবল আর্কিটেকচার ব্যবহার করি।",
    "ডেটাবেস কোনটি ব্যবহার করা হবে?": "MongoDB বা MySQL ব্যবহার করা যেতে পারে।",
    "ওয়েবসাইটে CDN ব্যবহার করা হবে কি?": "হ্যাঁ, দ্রুত লোডিংয়ের জন্য CDN ব্যবহার করা হবে।",
    "আপনারা কি ইন্সটলমেন্ট পেমেন্ট প্ল্যান অফার করেন?": "হ্যাঁ, নির্দিষ্ট পেমেন্ট পার্টনারের মাধ্যমে আমরা ইন্সটলমেন্ট পেমেন্ট সাপোর্ট করি।",
    "আপনারা কি কর্পোরেট গিফটিং সলিউশন দেন?": "হ্যাঁ, আমরা কর্পোরেট গিফটিং সলিউশন প্রদান করি।",
    "ওয়েবসাইট কি পুশ নোটিফিকেশন সাপোর্ট করবে?": "হ্যাঁ, পুশ নোটিফিকেশন ইন্টিগ্রেট করা যাবে।",
    "কাস্টম ডোমেইন সেটআপ করা যাবে কি?": "হ্যাঁ, আপনার পছন্দের ডোমেইন সেটআপ করা হবে।",
    "ব্যাকআপ ফিচার থাকবে কি?": "হ্যাঁ, স্বয়ংক্রিয় ব্যাকআপ ফিচার সেটআপ করা হবে।",
    "ওয়েবসাইট কি ক্লাউড ভিত্তিক হবে?": "হ্যাঁ, ক্লাউড হোস্টিং অপশন দেওয়া হবে।",

    
  };

  const fetchSupportReply = async (userMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      const lowerCaseMessage = userMessage.toLowerCase();

      const matchedQuestion = Object.keys(questionsAndAnswers).find((question) =>
        question.toLowerCase().includes(lowerCaseMessage)
      );

      const reply =
        matchedQuestion &&
        questionsAndAnswers[matchedQuestion] ||
        "Sorry, I didn't understand that. Can you please rephrase?";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, from: "support" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const sendMessage = () => {
    if (userMessage.trim()) {
      const newMessage = { text: userMessage, from: "user" };
      setMessages([...messages, newMessage]);
      fetchSupportReply(userMessage);
      setUserMessage("");
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (
      chatBoxRef.current &&
      !chatBoxRef.current.contains(event.target) &&
      !event.target.closest(".toggle-chat-button")
    ) {
      setIsChatVisible(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (isChatVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatVisible]);

  return (
    <div className="live-chat-container">
      <button
        className="toggle-chat-button"
        onClick={() => setIsChatVisible(!isChatVisible)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        {isChatVisible ? "✖" : "💬"}
      </button>

      {isChatVisible && (
        <div
          className="chat-container"
          ref={chatBoxRef}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            zIndex: 1000,
            background: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "300px",
            maxHeight: "400px",
            overflow: "hidden",
          }}
        >
          <div className="chat-box">
            {!userName ? (
              <div className="user-name-input">
                <input
                  type="text"
                  placeholder="Enter your name to start"
                  value={userName}
                  onChange={handleNameChange}
                />
                <button onClick={() => userName && alert("Welcome " + userName)}>
                  Start Chat
                </button>
              </div>
            ) : (
              <>
                <div
                  className="messages"
                  style={{ padding: "10px", overflowY: "auto", maxHeight: "300px" }}
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.from}`}
                      style={{
                        textAlign: msg.from === "user" ? "right" : "left",
                        margin: "5px 0",
                      }}
                    >
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>

                {isTyping && (
                  <div
                    className="typing-indicator"
                    style={{ padding: "10px", fontStyle: "italic" }}
                  >
                    <span>Support is typing...</span>
                  </div>
                )}

                <div
                  className="chat-input"
                  style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    style={{ flex: 1, padding: "5px" }}
                  />
                  <button onClick={sendMessage} style={{ marginLeft: "10px" }}>
                    Send
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;