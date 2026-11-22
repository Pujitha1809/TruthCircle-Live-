# 🛡️ TruthCircle — Real-Time Misinformation Firewall for Group Chats

> **Stage-Ready Hackathon Submission**  
> Stopping viral disinformation inside group chats before it causes panic, radicalization, or financial fraud.

[![Multi-Sponsor Integration](https://img.shields.io/badge/Sponsors-Nexconn%20%7C%20SerpApi%20%7C%20You.com-emerald.svg)](#authentic-multi-sponsor-architecture)
[![FastAPI & React 18](https://img.shields.io/badge/Stack-FastAPI%20%2B%20React%20%2B%20Tailwind-blue.svg)](#architecture--quickstart)
[![Multiplayer Sync](https://img.shields.io/badge/Sync-WebSocket%20%2B%20BroadcastChannel-purple.svg)](#killer-features-that-impress-hackathon-judges)
[![Persistent Storage](https://img.shields.io/badge/Storage-MongoDB%20%2B%20Resilient%20Disk%20Fallback-brightgreen.svg)](#4-async-mongodb-persistence-with-disk-fallback)

---

## 🌟 Overview & Problem Statement

Every morning, millions of encrypted family and community group chats receive sensational forwards—ranging from fake financial deadlines (*"RBI discontinuing ₹500 notes"*) to bogus health rumors (*"5G towers killing birds"*), phishing scams (*"Electricity cut tonight - update KYC"*), and fabricated awards (*"UNESCO declares national anthem best"*).

Most people hesitate to challenge elders or group admins because confronting them feels disrespectful. **TruthCircle** acts as a gentle, intelligent in-chat guardian:
1. **Listens inline** for suspicious forwards, uploaded screenshots, URLs, or `@truthcircle` mentions.
2. **Predicts scams in `<15ms`** using deterministic pattern matching for UPI/KYC/lottery phishing traps.
3. **Scans viral screenshot text client-side** using `Tesseract.js` OCR right in the browser.
4. **Deploys a multi-engine fact-check pipeline** in real time across mainstream news, dedicated debunkers, and full-article journalistic extractions.
5. **Posts an authoritative "Credibility Card"** directly into the conversation stream with an **Outlet Consensus Meter**, citations, and an **Indian Family "Copy Polite Reply"** button (English, हिन्दी, Hinglish) so anyone can debunk rumors without causing embarrassment.
6. **Synchronizes group consensus** via live multiplayer Community Notes voting (`👍 Helpful` / `🚩 Needs Context`).
7. **Survives reboots** through asynchronous MongoDB Atlas storage backed by automatic local disk fallback.

---

## 🏛️ Authentic Multi-Sponsor Architecture

TruthCircle deeply integrates all sponsor technologies into its core data pipeline and user interface:

### 1. Nexconn Chat SDK (`@nexconn/engine`, `@nexconn/chat`)
- **Direct Connection & Hybrid Resilience**: Configured via `VITE_NEXCONN_APP_ID`. Implemented through `nexconnAdapter.js`, which bridges direct engine connectivity with an automatic local **WebSocket + `BroadcastChannel`** message bus.
- **Instant Stage Multiplayer**: Allows opening a second browser window or toggling the top-bar **"Split-Screen Multiplayer"** button to mirror **User A ("Rohan")** and **User B ("Maa")** simultaneously with zero configuration.
- **Capabilities**: Powers dynamic rooms, live typing indicators, online member avatars, read receipts, consensus vote synchronization, and real-time `CredibilityCard` broadcasting.

### 2. SerpApi Multi-Engine Pipeline (`serpapi.com/search.json`)
- **News Consensus Engine (`engine="google_news"`)**:
  - Parameters: `engine="google_news"`, `q=claim`, `gl="in"`, `hl="en"`.
  - Gauges how mainstream national (e.g. *The Hindu, Indian Express, NDTV, Mint*) and international news outlets cover the claim.
- **Fact-Check Hunter Engine (`engine="google"`)**:
  - Parameters: `engine="google"`, `q=f"{claim} fact check PIB AltNews BoomLive"`, `gl="in"`.
  - Specifically hunts verified fact-checking desks (Press Information Bureau Fact Check, AltNews, BOOM Live, The Quint WebQoof).
- **Deep Page Extraction (`engine="extract"`)**:
  - Parameters: `engine="extract"`, `url=target_url`, `output="md"`, `include_markdown=true`.
  - Pulls clean full-article Markdown text from the top debunking article—guaranteeing that verdicts are grounded in full investigative journalism, not superficial search snippets.

### 3. You.com Cited Research & Search API (`X-API-Key` header)
- **Endpoint**: `https://api.ydc-index.io/search` and `https://api.ydc-index.io/rag`.
- **RAG Synthesis**: Ingests the claim alongside the deep Markdown extract to synthesize:
  - Neutral, definitive verdict: `VERIFIED` | `MISLEADING` | `FALSE` | `UNVERIFIED`.
  - 0–100 confidence score (e.g. `98% Confidence`).
  - Clickable web citations with domain trust ratings.
  - Multi-language polite reply text (English, Hindi हिन्दी, Hinglish).

### 4. Async MongoDB Persistence with Disk Fallback
- **Target Collections**: `rooms`, `messages`, `audit_logs` in database `truthcircle`.
- **Resilient Fallback**: Pings MongoDB with a 3-second timeout on startup. If `MONGODB_URI` is omitted or network blocks Atlas, it automatically falls back to atomic local disk storage (`backend/data/truthcircle_db.json`), ensuring all chat history, invite codes, and audit logs persist across laptop reboots.

---

## 🚀 Killer Features Built for Judges

| Feature | Description |
|---|---|
| **1. Dynamic Group Creation (`TC-XXXX`)** | Zero pre-seeded hardcoded chats. Users create groups with unique 6-character invite codes (`TC-XXXX`) or join via 1-click "Recent Rooms" pills. |
| **2. Real-Time Spam & Scam Prediction** | `<15ms` in-flight analysis of incoming messages detecting UPI scams, electricity KYC fraud, and lottery traps with inline red alert badges and 1-click deep verify. |
| **3. Screenshot OCR Fact-Checking** | Drag & drop or paste (`Ctrl+V`) viral WhatsApp forwards or news screenshots. `Tesseract.js` extracts text in-browser and verifies via SerpApi + You.com. |
| **4. Inline "Credibility Card"** | High-contrast semantic header (`FALSE` in crimson, `MISLEADING` in amber, `VERIFIED` in emerald), animated confidence gauge, **Outlet Consensus Meter** (`0 Confirmed • 6 Debunked`), clickable source pills, and **"Copy Polite Reply"** with English/हिन्दी/Hinglish toggle. |
| **5. Group Consensus Voting** | Live multiplayer Community Notes voting (`👍 Helpful` / `🚩 Needs Context`). When consensus threshold is met, card renders `✅ Verified by Group Consensus` across all devices. |
| **6. Enterprise Misinformation Radar** | Telemetry strip tracking verified vs blocked rumors with a modal dashboard showing rumor category breakdowns and 1-click **CSV/JSON Compliance Export**. |
| **7. Split-Screen Multiplayer Mode** | Top-bar toggle splitting the screen into two synced phones (**User A: "Rohan"** and **User B: "Maa"**) with instant bi-directional messaging and synced fact-checks. |

---

## 📁 Project Structure

```text
truthcircle/
├── .env.example               # Sponsor API keys & configuration template
├── .gitignore                 # Strict exclusions for .env, node_modules, and local DBs
├── README.md                  # Comprehensive architecture & submission documentation
├── backend/
│   ├── main.py                # FastAPI + WebSockets + REST API routes + WebSocket broadcast
│   ├── models.py              # Strict Pydantic v2 schemas
│   ├── database.py            # Async TruthCircleDB (MongoDB Atlas + resilient disk fallback)
│   ├── spam_detector.py       # Deterministic <15ms regex & heuristic spam prediction engine
│   ├── cache_store.py         # Persistent JSON cache for instant sub-80ms stage evaluations
│   ├── requirements.txt       # Dependencies (fastapi, uvicorn, motor, pymongo, httpx, etc.)
│   └── services/
│       ├── serp_service.py    # Async httpx client for SerpApi (news, hunter, extract md)
│       ├── you_service.py     # Async httpx client for You.com Cited Research
│       └── orchestrator.py    # Concurrent asyncio.gather pipeline + synthesis engine
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── App.jsx            # Main app wiring rooms, split-screen, and inspector drawer
        ├── services/
        │   ├── api.js         # REST endpoints client
        │   └── nexconnAdapter.js # Resilient Nexconn engine + WebSocket + BroadcastChannel bus
        └── components/
            ├── RoomLobby.jsx       # Dynamic group creation & join with code (TC-XXXX)
            ├── ChatPane.jsx        # Dual-device chat room pane with OCR screenshot upload & paste
            ├── CredibilityCard.jsx # Rich semantic card with consensus voting & polite reply generator
            ├── EvidenceDrawer.jsx  # Slide-out inspector showing SerpApi Extract MD + You.com citations
            ├── RadarModal.jsx      # Enterprise rumor breakdown dashboard with CSV/JSON export
            └── DemoControlBar.jsx  # Top telemetry bar, presets & split-screen switcher
```

---

## ⚡ Quickstart Guide

### 1. Prerequisites
- Python 3.10+
- Node.js 18+ & npm

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your sponsor API keys (`SERPAPI_API_KEY`, `YOU_API_KEY`, `NEXCONN_APP_ID`, and optional `MONGODB_URI`).  
*(Note: If API keys are omitted, TruthCircle automatically activates its high-fidelity demo engine so evaluations never fail!)*

### 3. Start Backend Server
```bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
API runs at `http://localhost:8000` (Docs available at `http://localhost:8000/docs`).

### 4. Start Frontend Client
In a new terminal window:
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```
Open `http://localhost:5173` in your browser.

---

## 🎯 Stage Presentation Script (2-Minute Demo)

1. **Lobby & Dynamic Group Creation (0:00 - 0:25)**:
   - Open `http://localhost:5173`. Show the clean lobby (no pre-seeded chats).
   - Click **"Create New Group"**, enter *"Beyond 9to5 VIP Judges"*. Receive unique code `TC-XXXX`.
   - Point out the active storage indicator (`🍃 MongoDB Atlas` or `💾 Persistent Local Disk`).
2. **Multiplayer Sync (0:25 - 0:45)**:
   - Click **"Split-Screen Multiplayer"**. Notice User B (Maa) instantly joins the exact same room via code.
   - Send a message or upload a screenshot forward from User B's screen. Both views update in real time.
3. **Real-Time Spam Detection & OCR Verification (0:45 - 1:15)**:
   - Forward a suspicious payment or electricity notice. Watch the `🚨 SPAM / SCAM ALERT` banner appear in `<15ms`.
   - Tag `@truthcircle <claim>` or click **"🔍 Fact-Check"**.
   - Show the 5-step live progress bubble resolving in SerpApi + You.com.
4. **Credibility Card & Consensus Voting (1:15 - 1:40)**:
   - The Credibility Card renders simultaneously on both screens.
   - Click `👍 Helpful` on User B's device: User A's screen increments instantly, displaying `✅ Verified by Group Consensus`.
   - Toggle languages to **हिन्दी** / **Hinglish** and show **"📋 Copy Polite Reply"**.
5. **Radar & Enterprise Audit Export (1:40 - 2:00)**:
   - Click the top telemetry strip to open the **Misinformation Radar**.
   - Review category distributions (Financial, Health, Civic, Brand) and click **"⬇️ Export Audit CSV"** for compliance teams.

---

## 🛡️ License
Built with ❤️ for the Build-a-thon. MIT License.
