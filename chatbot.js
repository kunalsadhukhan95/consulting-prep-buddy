// ============================================
// CONSULTING PREP BUDDY — chatbot.js
// Option 3: Topmate CTA instead of AI chatbot
// ============================================

function initChatbot() {
  const toggle = document.getElementById("chatbot-toggle");
  const win = document.getElementById("chatbot-window");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");
  const messages = document.getElementById("chat-messages");
  let isOpen = false;

  toggle.addEventListener("click", () => {
    isOpen = !isOpen;
    win.classList.toggle("open", isOpen);
    toggle.textContent = isOpen ? "✕" : "🎓";
  });

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";

    // Show user's question
    appendMsg(text, "user");

    // Respond with a Topmate CTA
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "chat-msg bot";
      div.innerHTML = `Great question! For a detailed, personalised answer — including mock practice on exactly this topic — book a 1-on-1 session with Kunal on Topmate.<br><br>
        <a href="https://topmate.io/kunal_sadhukhan" target="_blank"
           style="display:inline-block;background:#3b55e6;color:white;padding:0.55rem 1.1rem;border-radius:20px;font-weight:700;font-size:0.82rem;text-decoration:none;margin-top:0.25rem;">
          📅 Book on Topmate →
        </a>`;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }, 400);
  }

  function appendMsg(text, role) {
    const div = document.createElement("div");
    div.className = "chat-msg " + role;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") handleSend(); });
}

document.addEventListener("DOMContentLoaded", initChatbot);
