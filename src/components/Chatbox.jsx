import React, { useState } from "react";
import "../css/Chatbox.css";

const Chatbox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 Welcome to Jovian! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // 🔥 SMART NORMALIZER (fixes typos + spacing issues)
  const normalize = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  // 🔥 LEVEL 2 BOT ENGINE
  const getBotResponse = (message) => {
    const msg = normalize(message);

    // ===== GREETING =====
    if (msg.match(/\b(hi|hello|hey|hii|hola)\b/)) {
      return "Hello 👋 Welcome to Jovian! How can I help you shop today?";
    }

    // ===== PRICE INTENT =====
    if (msg.match(/\b(price|cost|how much|prcie|prize)\b/)) {
      return "Prices depend on the item 👕 Check each product page or tell me what you want.";
    }

    // ===== SIZE INTENT =====
    if (msg.match(/\b(size|fit|measurement|sizing)\b/)) {
      return "We offer sizes from 2–3 yrs to 8–9 yrs. Use the size chart on each product.";
    }

    // ===== DELIVERY INTENT =====
    if (msg.match(/\b(delivery|shipping|courier|how long)\b/)) {
      return "We deliver within 1–3 days across Kenya 🚚";
    }

    // ===== ORDER INTENT =====
    if (msg.match(/\b(order|buy|purchase|checkout)\b/)) {
      return "Add items to cart and checkout — we’ll handle the rest 🛒";
    }

    // ===== PAYMENT INTENT =====
    if (msg.match(/\b(payment|pay|mpesa|cash)\b/)) {
      return "We accept M-Pesa and secure online payments 💳";
    }

    // ===== LOCATION =====
    if (msg.match(/\b(location|where|shop|store)\b/)) {
      return "We are an online store delivering across Kenya 🇰🇪";
    }

    // ===== DEFAULT =====
    return "Sorry 🤔 I didn’t fully get that. Try asking about price, size, delivery or orders.";
  };

  // SEND MESSAGE
  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { sender: "user", text: trimmed };

    const botMessage = {
      sender: "bot",
      text: getBotResponse(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbox-container">

      {/* Toggle */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbox">

          {/* Header */}
          <div className="chat-header">
            <h4>Jovian Support</h4>
            <span onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
              ✖
            </span>
          </div>

          {/* Messages */}
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Chatbox;