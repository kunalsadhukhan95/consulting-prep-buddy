// ============================================
// CONSULTING PREP ASSISTANT — chatbot.js
// Smart keyword-based responses with tab links
// ============================================

function initChatbot() {
  const toggle = document.getElementById('chatbot-toggle');
  const win = document.getElementById('chatbot-window');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  if (!toggle) return;
  let isOpen = false;

  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    win.classList.toggle('open', isOpen);
    toggle.textContent = isOpen ? '✕' : '🎓';
    if (isOpen) input.focus();
  });

  const TABS = `<div style="margin-top:.7rem;display:flex;flex-direction:column;gap:.38rem;font-size:.8rem;">
    <a href="industry.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">🏭 Industry Sector Overviews (18 sectors) →</a>
    <a href="frameworks.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">🧩 Case Interview Frameworks (9 frameworks) →</a>
    <a href="cases.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">💼 Case Interview Practice (100 cases) →</a>
    <a href="guesstimates.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">📊 Guesstimate Practice (69 examples) →</a>
    <a href="tips.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">💡 Tips &amp; Tricks (12 sections) →</a>
    <a href="guidance.html" style="color:#2d3a8c;font-weight:600;text-decoration:none;">🎯 Personalized 1-on-1 Guidance →</a>
    <a href="https://topmate.io/kunal_sadhukhan" target="_blank" style="color:#3b55e6;font-weight:700;text-decoration:none;">📅 Book a Session on Topmate →</a>
  </div>`;

  const QA = {
    'framework': `<strong>🧩 9 Case Interview Frameworks</strong> are available:<br><em>Profitability, Market Entry, Pricing, Growth (Ansoff), M&amp;A, Operations, Go-to-Market, Guesstimate Approach, and Core Interview Skills.</em><br>Each includes the evolved technique, key preliminary questions, and segmentation tools.<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">Go to Frameworks →</a>`,
    'profitabilit': `<strong>📉 Profitability Framework:</strong><br>Profit = Revenue − Costs | Revenue = Price × Volume<br>After isolating the metric issue, segment along the <strong>Value Chain:</strong><br><em>Production → Distribution Push → Customer Pull</em><br>Always check: company-specific or industry-wide?<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">See full framework →</a>`,
    'market entry': `<strong>🌐 Market Entry (2 parts):</strong><br><strong>1.</strong> Economic Sense: Profit = Market Size × Market Share × Profit/unit − Fixed Costs<br><strong>2.</strong> Implementation: Value chain feasibility → Entry mode (Organic / Acquisition / JV)<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">See full framework →</a>`,
    'industry': `<strong>🏭 18 Industry Sector Overviews</strong> covering:<br><em>Airlines, Automobiles, Cement, Defence, E-commerce, Education, Hospitality, Insurance, IT &amp; ITES, Logistics, Oil &amp; Gas, OTT, Payments, Pharma, Power, Retail, Semiconductor, Telecom.</em><br>Each has Value Chain, Porter's Five Forces, Revenue &amp; Cost Drivers, KPIs and Key Terminology.<br><a href="industry.html" style="color:#2d3a8c;font-weight:700;">Go to Industry Sectors →</a>`,
    'case': `<strong>💼 100 Case Interview Practice Examples</strong> across:<br><em>Profitability (28), Market Entry (15), Growth (18), Pricing (12), Operations (8), M&amp;A (6), Due Diligence (5), Unconventional (6), GTM (2).</em><br>Each shows the full Interviewer–Candidate dialogue with colour-coded turns.<br><a href="cases.html" style="color:#2d3a8c;font-weight:700;">Go to Case Practice →</a>`,
    'guesstimate': `<strong>📊 69 Guesstimate Practice Examples</strong> across:<br><em>Volume Estimation, Market Sizing, Revenue Estimation, Consumption/Demand, Transport &amp; Mobility.</em><br>Each shows Assumptions → Methodology → Calculations → Final Answer.<br><a href="guesstimates.html" style="color:#2d3a8c;font-weight:700;">Go to Guesstimates →</a>`,
    'tip': `<strong>💡 12 Tips &amp; Tricks Sections</strong> covering:<br>Preliminary Questions, Overall Strategy, Hypothesis-Driven Approach, MECE Segmentation, 80/20 Rule, Competitor Benchmarking, CV Tips, Behavioural Prep, Mental Math, Non-Verbal Communication, Role-Specific Prep, and Common Mistakes.<br><a href="tips.html" style="color:#2d3a8c;font-weight:700;">Go to Tips &amp; Tricks →</a>`,
    'guidance': `<strong>🎯 Personalized Guidance</strong> includes:<br>CV Review, Mock Case Interview, Interview Strategy (Strategy / M&amp;A / Operations / Digital), Guesstimate Coaching, Industry Deep-Dive, and Full Prep Package.<br><a href="guidance.html" style="color:#2d3a8c;font-weight:700;">Go to Guidance →</a> &nbsp;|&nbsp; <a href="https://topmate.io/kunal_sadhukhan" target="_blank" style="color:#3b55e6;font-weight:700;">📅 Book on Topmate →</a>`,
    'topmate': `For personalised <strong>1-on-1 coaching</strong>, book a session with Kunal directly:<br><a href="https://topmate.io/kunal_sadhukhan" target="_blank" style="color:#3b55e6;font-weight:700;">📅 Book on Topmate →</a>`,
    'pricing': `<strong>💰 Pricing Framework — 3 methods:</strong><br>Cost-Plus | Competitor-Based | Value-Based<br>Price Floor = Variable Cost/unit | Ceiling = Customer WTP<br>For new/unique products, use value-based approach.<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">See full framework →</a>`,
    'growth': `<strong>🚀 Growth Strategy — Ansoff Matrix:</strong><br>Market Penetration | Product Development | Market Development | Diversification<br>Revenue = Price × Volume. Explore all levers: pricing, volume, new segments, new channels, M&amp;A.<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">See full framework →</a>`,
    'm&a': `<strong>🤝 M&amp;A Framework:</strong><br>Strategic Rationale → Revenue + Cost Synergies → Valuation → Risks → 100-Day Integration Plan<br>Key risks: culture clash, talent loss, regulatory approvals, customer attrition.<br><a href="frameworks.html" style="color:#2d3a8c;font-weight:700;">See full framework →</a>`,
    'guesstimate approach': `<strong>📊 Guesstimate Method (6 steps):</strong><br>1. Clarify scope 2. Choose Top-down or Bottom-up 3. State assumptions aloud 4. Segment if needed 5. Calculate step by step 6. Sanity check<br><strong>Key India data:</strong> Population 1.4B, Urban 500M, Households ~300M (avg 4.5), Income: BPL 20% / Low 40% / Mid 30% / High 10%<br><a href="guesstimates.html" style="color:#2d3a8c;font-weight:700;">Go to Guesstimates →</a>`,
    'telecom': `<strong>📡 Telecom Industry:</strong><br>World's 2nd largest telecom market (1,200M subscribers, 85% tele-density).<br>Key KPIs: ARPU, Churn Rate, Network Uptime, Data Usage/User, Customer Acquisition Cost.<br>Porter's: Buyer Power is High (price-sensitive, low switching costs). Competitive Rivalry is High (oligopolistic, price-driven).<br><a href="industry.html" style="color:#2d3a8c;font-weight:700;">See full Telecom overview →</a>`,
    'pharma': `<strong>💊 Pharmaceuticals Industry:</strong><br>India is a top generic formulations exporter with a large branded-generics home market.<br>Key KPIs: Time to Market, Return on Research Capital (RORC), Clinical Trial Success Rate.<br>Porter's: Threat of New Entrants is Low (highly regulated, high capital requirements).<br><a href="industry.html" style="color:#2d3a8c;font-weight:700;">See full Pharma overview →</a>`,
    'banking': `<strong>🏦 Banking/Insurance Industry:</strong><br>Covered in detail in the Insurance sector overview. Key metrics: Policy Renewal Rate, Claims Settlement Ratio, Gross Written Premium, Loss Ratio.<br>Also check the Payments sector for digital banking/fintech dynamics.<br><a href="industry.html" style="color:#2d3a8c;font-weight:700;">See Industry Sectors →</a>`,
    'cv': `<strong>📄 CV Tips for Consulting:</strong><br>• Quantify impact on every point ("Increased sales by 23%")<br>• Show 3–4 "spikes" (exceptional achievements)<br>• Lead with strongest section<br>• Use action verbs: Led, Delivered, Reduced, Launched, Achieved<br>• Keep to one page<br><a href="tips.html" style="color:#2d3a8c;font-weight:700;">See full CV Tips section →</a>`,
  };

  const DEFAULT = `Here's a quick overview of everything on this platform:<br>
    <div style="margin:.55rem 0;font-size:.82rem;line-height:1.75;">
      <strong>🏭 Industry Sectors</strong> — 18 sectors: value chains, KPIs &amp; Porter's Five Forces<br>
      <strong>🧩 Frameworks</strong> — 9 case frameworks with evolved approaches &amp; India data<br>
      <strong>💼 Case Practice</strong> — 100 full Interviewer–Candidate transcripts<br>
      <strong>📊 Guesstimates</strong> — 69 solved examples with step-by-step calculations<br>
      <strong>💡 Tips &amp; Tricks</strong> — 12 sections on interview strategy &amp; prep<br>
      <strong>🎯 Personalized Guidance</strong> — 1-on-1 coaching, mock cases &amp; CV review
    </div>${TABS}`;

  async function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMsg(text, 'user');
    sendBtn.disabled = true;
    const typingEl = appendMsgHtml('<em style="opacity:.6;">Thinking…</em>', 'bot');
    await new Promise(r => setTimeout(r, 280));

    const tl = text.toLowerCase().replace(/[^a-z0-9& ]/g, ' ');
    let reply = null;
    for (const [key, val] of Object.entries(QA)) {
      if (tl.includes(key)) { reply = val; break; }
    }
    typingEl.innerHTML = reply || DEFAULT;
    sendBtn.disabled = false;
    messages.scrollTop = messages.scrollHeight;
  }

  function appendMsg(text, role) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }
  function appendMsgHtml(html, role) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }
  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !sendBtn.disabled) handleSend(); });
}

document.addEventListener('DOMContentLoaded', initChatbot);
