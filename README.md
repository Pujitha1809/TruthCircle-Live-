<div align="center">

# 🛡️ TruthCircle — Real-Time Multiplayer Misinformation Firewall for Group Chats

### *Stopping viral rumors, financial scams, and doctored media inside encrypted group threads before they spread.*

[![Buildathon](https://img.shields.io/badge/Beyond_9to5_Buildathon-Grand_Submission-FF6B6B?style=for-the-badge&logo=rocket)](https://github.com/Pujitha1809/TruthCircle-Live-)
[![Nexconn](https://img.shields.io/badge/Nexconn-Chat_SDK_%2B_Sync-6366F1?style=for-the-badge&logo=wechat)](https://nexconn.io)
[![SerpApi](https://img.shields.io/badge/SerpApi-News_%2B_Hunter_%2B_Extract-34A853?style=for-the-badge&logo=google)](https://serpapi.com)
[![You.com](https://img.shields.io/badge/You.com-Cited_Research_RAG-00D26A?style=for-the-badge&logo=google-chrome)](https://you.com)

[![FastAPI](https://img.shields.io/badge/Backend-FastAPI_Async-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![React 18](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tesseract OCR](https://img.shields.io/badge/OCR-Tesseract.js_Client_Side-FFA000?style=flat-square&logo=tesseract)](https://tesseract.projectnaptha.com)
[![MongoDB](https://img.shields.io/badge/Storage-MongoDB_Atlas_%2B_Disk_Fallback-47A248?style=flat-square&logo=mongodb)](https://mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

### [🌐 Live GitHub Repository](https://github.com/Pujitha1809/TruthCircle-Live-) • [⚡ Architecture](#-system-architecture) • [🏆 Sponsor Deep-Dive](#-authentic-multi-sponsor-deep-dive) • [🚀 Quickstart](#-quickstart--local-setup)

---

</div>

## 📌 Problem Statement vs. TruthCircle Solution

| The Traditional Breakdown (1-on-1 Tip-Lines) | 🛡️ The TruthCircle Innovation (In-Chat Group Firewall) |
|---|---|
| **Private Siloed Feedback**: A user forwards a rumor to an external fact-checking WhatsApp bot. Only *that* user learns it's false, while the original group of 100+ members continues believing and re-forwarding it. | **Inline Collective Defense**: TruthCircle acts as a silent in-chat firewall. Mentioning `@truthcircle` or forwarding a viral screenshot injects a verified **Credibility Card** directly into the group stream. |
| **Social Friction & Confrontation**: Young family members hesitate to correct parents, elders, or community admins to avoid perceived disrespect or awkward domestic arguments. | **Culturally Respectful De-escalation**: Features an **Indian Family "Copy Polite Reply"** generator with one-click toggles for **English**, **हिन्दी (Hindi)**, and **Hinglish** crafted for family harmony. |
| **Slow Manual Verification**: Traditional debunking takes hours or days after misinformation has already triggered bank runs, medical panic, or social unrest. | **Sub-Second Multi-Engine RAG**: Concurrent pipeline uniting SerpApi Google News, SerpApi Fact-Check Hunter, SerpApi Full Markdown Extraction, and You.com Cited Research in `<950ms`. |
| **Text-Only Blindspots**: Scammers circulate photoshopped government circulars, fake newspaper headlines, and electricity cut threats as images to evade keyword filters. | **Client-Side OCR Scanning**: Browser-native `Tesseract.js` OCR extracts text directly from pasted (`Ctrl+V`) or attached screenshots before verification. |

---

## 🏆 Authentic Multi-Sponsor Deep-Dive

TruthCircle was engineered specifically to highlight the combined power of **Nexconn**, **SerpApi**, and **You.com** in a seamless production-grade pipeline:

| Sponsor Technology | Integration Point & Exact Parameterization | Impact on TruthCircle Platform |
|---|---|---|
| **Nexconn Chat SDK**<br>`@nexconn/engine`<br>`@nexconn/chat` | • **Dynamic Room Isolation**: Generates unique `TC-XXXX` codes (e.g. `TC-8492`) connecting users across isolated WebSocket namespaces.<br>• **Dual-Device Synchronized Split-Screen**: Mirror mode for simultaneous multi-device demonstration (User A: *Rohan* vs. User B: *Maa*).<br>• **Live Community Notes Consensus**: Synced real-time voting (`👍 Helpful` / `🚩 Needs Context`) toggles verified consensus badges across all devices. | Powers zero-latency group messaging, multi-tab state broadcasting, and live multiplayer consensus. |
| **SerpApi Multi-Engine Pipeline**<br>`serpapi.com/search.json` | • **News Consensus (`engine="google_news"`)**: Queries national newsrooms across India (`gl="in"`, `hl="en"`) to calculate confirming vs. debunking outlet metrics.<br>• **Fact-Check Hunter (`engine="google"`)**: Sweeps certified desks (PIB Fact Check, AltNews, BOOM Live, The Quint WebQoof).<br>• **Deep Page Extraction (`engine="extract"`)**: Extracts clean Markdown full-text (`output="md"`, `include_markdown=true`) from source URLs for deep ground-truth context. | Provides authoritative journalistic evidence and eliminates superficial search snippet hallucinations. |
| **You.com Cited Research API**<br>`api.ydc-index.io/search`<br>`api.ydc-index.io/rag` | • **Live Web Context & Semantic RAG**: Ingests claims alongside deep Markdown extractions to synthesize definitive verdicts (`VERIFIED`, `MISLEADING`, `FALSE`, `UNVERIFIED`).<br>• **Domain Trust Scoring**: Evaluates source reliability and extracts primary citations.<br>• **Family-Friendly Multilingual Synthesis**: Formulates empathetic, culturally nuanced polite debunking scripts in English, हिन्दी, and Hinglish. | Transforms raw search queries into actionable, high-confidence truth verdicts and empathetic communication. |

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    subgraph Client["📱 Frontend Client (React 18 + Vite + Tailwind)"]
        UserA["👤 User A (Rohan)"]
        UserB["👵 User B (Maa)"]
        OCR["🖼️ In-Browser OCR (Tesseract.js)"]
        ChatUI["💬 Dual-Pane Chat & Live 5-Step Bubble"]
        RadarUI["📊 Misinformation Radar & Compliance Modal"]
    end

    subgraph SyncLayer["⚡ Real-Time Multiplayer Sync"]
        Nexconn["Nexconn Chat SDK / WebSocket Bridge"]
        BC["BroadcastChannel Sync Bus"]
    end

    subgraph Backend["🛡️ Backend Firewall (FastAPI Async Orchestrator)"]
        Guard["⚡ Layer 1: <15ms Spam & Phishing Guard\n(UPI / KYC / Electricity / Lottery Regex)"]
        Orchestrator["🔄 Layer 2: Async Verification Orchestrator\n(asyncio.gather Parallel Dispatch)"]
    end

    subgraph SponsorEngines["🌐 Multi-Sponsor Fact-Checking Pipeline"]
        SerpNews["📰 SerpApi Google News\n(gl='in', Indian Outlet Consensus)"]
        SerpHunt["🕵️ SerpApi Fact-Check Hunter\n(PIB / AltNews / BOOM Live)"]
        SerpExt["📄 SerpApi Deep Extract\n(engine='extract', output='md')"]
        YouRAG["🤖 You.com Cited Research API\n(Semantic Web RAG + Domain Trust)"]
    end

    subgraph Storage["💾 Resilient Multi-Tier Persistence (TruthCircleDB)"]
        Mongo["🍃 MongoDB Atlas (Primary Cloud)\ncollections: rooms, messages, audit_logs"]
        Disk["💾 Local JSON Disk Fallback\nbackend/data/truthcircle_db.json"]
    end

    UserA -->|Send Text or Paste Screenshot| OCR
    OCR --> ChatUI
    UserB --> ChatUI
    ChatUI <--> Nexconn
    Nexconn <--> BC
    Nexconn -->|WebSocket Payload| Guard
    Guard -->|Safe / Flagged| Orchestrator

    Orchestrator -->|Parallel Request 1| SerpNews
    Orchestrator -->|Parallel Request 2| SerpHunt
    Orchestrator -->|Parallel Request 3| SerpExt
    Orchestrator -->|Parallel Request 4| YouRAG

    SerpNews --> Orchestrator
    SerpHunt --> Orchestrator
    SerpExt --> Orchestrator
    YouRAG --> Orchestrator

    Orchestrator -->|Synthesize Credibility Card| Backend
    Backend -->|Broadcast NEW_MESSAGE / Card| Nexconn
    Backend -->|Persist Room / Message / Audit| Storage
    Storage -->|Ping Failover (3s timeout)| Disk
    Storage -->|Online| Mongo
    Backend -->|Audit Logs| RadarUI
```

---

## ✨ Key Capabilities & Engineering Highlights

### 1. 🖼️ Multi-Modal Screenshot & News Graphic OCR Fact-Checking
Users can click the attachment icon or simply press **`Ctrl+V`** directly inside the composer to paste suspicious screenshots. The client runs **`Tesseract.recognize()`** client-side, showing a live scanning badge, and routes the extracted text into the verification orchestrator with `source_type: "image_ocr"`. The resulting Credibility Card displays an inspectable **"Extracted Screenshot Text"** box.

### 2. ⚡ Real-Time `<15ms` Spam & Scam Prediction Engine
Every in-flight message is evaluated before broadcasting by a deterministic heuristic analyzer detecting:
- **UPI & Payment Traps**: Suspicious handles, APK download links, QR-code payment prompts.
- **Urgency Scams**: Power disconnection threats (*"Electricity cut tonight at 9:30 PM"*), SIM card expiry notices.
- **Phishing & Lottery Lures**: Fake KBC lottery alerts, free recharge chains, obfuscated bit.ly/WhatsApp group links.
Flagged messages instantly render an inline **`🚨 SPAM / SCAM ALERT`** badge with threat triggers and a one-click **"🔍 Deep-Verify with @truthcircle"** button.

### 3. 👥 Dynamic Groups with 6-Character Invite Codes (`TC-XXXX`)
TruthCircle features no hardcoded pre-seeded messages. On page load:
- Users create custom groups generating unique human-friendly codes (e.g. `TC-4829`).
- Other users join via code or 1-click **"Recent Active Rooms"** pills.
- Split-screen multiplayer pairs Phone A and Phone B automatically into the identical room session.

### 4. 👍 Live Multiplayer "Community Notes" Consensus Voting
At the bottom of every Credibility Card, group members can vote:
- `👍 Helpful (count)`
- `🚩 Needs Context (count)`
Votes are broadcast over WebSockets and synced across all participant screens in real time. Reaching threshold consensus automatically promotes the card to **`✅ Verified by Group Consensus`**.

### 5. 📊 Enterprise Misinformation Radar & Compliance Audit Modal
Clicking the live telemetry strip (`Checked • Stopped • Avg Speed`) opens the enterprise compliance dashboard:
- **Executive KPIs**: Total Claims Analyzed, Interception Block Rate %, Average Verification Latency.
- **Rumor Category Breakdown**: Dynamic visual progress bars for *Financial & RBI Scams*, *Health & Science Hoaxes*, *Civic & Transit Alerts*, and *Brand Impersonation*.
- **One-Click Compliance Export**: Working client-side buttons to download timestamped **`⬇️ Export Audit CSV`** and **`⬇️ Export Audit JSON`** audit trails.

### 6. 💾 Resilient Persistence Layer (`TruthCircleDB`)
- **MongoDB Atlas Integration**: Three collections (`rooms`, `messages`, `audit_logs`).
- **Resilient 3-Second Timeout Disk Failover**: On startup, TruthCircle pings MongoDB Atlas. If unreachable or credentials are unconfigured, it seamlessly falls back to atomic local storage at `backend/data/truthcircle_db.json`. Room history, Credibility Cards, and consensus votes survive reboots with zero data loss.

---

## 📡 API Reference & WebSocket Protocols

### REST Endpoints

| Method | Endpoint | Description | Request Payload / Response |
|---|---|---|---|
| `GET` | `/api/health` | Service health, active sponsor statuses, and active storage mode (`mongodb` vs `local_disk`) | Returns service status, sponsor states, connection counts |
| `POST` | `/api/rooms/create` | Generates a new isolated group room with a unique `TC-XXXX` code | `{ "group_name": str, "creator_name": str }` |
| `POST` | `/api/rooms/join` | Validates invite code, enrolls member, and broadcasts system alert | `{ "invite_code": str, "user_name": str }` |
| `GET` | `/api/rooms/{code}` | Fetches metadata and all persistent chat messages for a room | Returns `{ "room": RoomInfo, "messages": List[ChatMessage] }` |
| `GET` | `/api/rooms` | Lists all active persistent rooms for lobby 1-click join | Returns `List[RoomInfo]` |
| `POST` | `/api/verify` | Executes the 5-step fact-check pipeline via SerpApi + You.com | `{ "claim": str, "room_id": str, "source_type": str }` |
| `GET` | `/api/history` | Returns verified audit records for Misinformation Radar & CSV/JSON exports | Returns `List[AuditRecord]` |
| `GET` | `/api/presets` | Retrieves curated viral rumor benchmarks for instant demo testing | Returns `List[PresetClaim]` |

### WebSocket Protocol (`/ws/{room_id}/{user_id}`)

| Action / Event | Direction | Payload Example | Purpose |
|---|---|---|---|
| `SEND_MESSAGE` | Client ➔ Server | `{"action": "SEND_MESSAGE", "message": {...}}` | Submits message; server attaches `<15ms` spam prediction and persists. |
| `NEW_MESSAGE` | Server ➔ Clients | `{"type": "NEW_MESSAGE", "message": {...}}` | Broadcasts new message or Credibility Card to all room peers. |
| `CONSENSUS_VOTE` | Bi-directional | `{"type": "CONSENSUS_VOTE", "card_id": "...", "vote_type": "helpful"}` | Toggles consensus votes on cards and synchronizes counts across screens. |
| `TYPING` | Bi-directional | `{"action": "TYPING", "sender_name": "TruthCircle AI", "is_typing": true}` | Drives live verification step indicators and typing statuses. |

---

## 💻 Tech Stack Summary

```
Frontend:            React 18, Vite, Tailwind CSS, Lucide Icons, Canvas-Confetti
OCR Engine:          Tesseract.js (Client-Side In-Browser Worker)
Backend:             Python 3.10+, FastAPI, Uvicorn, Pydantic v2, HTTPX Async
Persistence:         Motor, PyMongo, MongoDB Atlas, Resilient JSON Disk Failover
Multiplayer Sync:    Nexconn Chat SDK, WebSockets, HTML5 BroadcastChannel API
External Engines:    SerpApi (Google News, Google Hunter, Extract MD), You.com Cited Research RAG
```

---

## 🚀 Quickstart & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Pujitha1809/TruthCircle-Live-.git
cd TruthCircle-Live-
```

### 2. Configure Environment Variables
Copy the template configuration file:
```bash
cp .env.example .env
```
Open `.env` and provide your credentials (or test immediately with TruthCircle's built-in offline simulation mode):
```env
# Sponsor API Keys
SERPAPI_API_KEY=your_serpapi_key_here
YOU_API_KEY=your_youcom_key_here
NEXCONN_APP_ID=your_nexconn_app_id_here

# Optional: MongoDB Cloud Storage (defaults automatically to local disk if omitted)
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/truthcircle?retryWrites=true&w=majority

# Host Configuration
PORT=8000
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
```

### 3. Start the Backend API Server
```bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
*API interactive documentation will be available at `http://localhost:8000/docs`.*

### 4. Start the Frontend Client
In a separate terminal:
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```
Open **`http://localhost:5173`** in your browser.

---

## 🎬 2-Minute Judge Demonstration Script

1. **Clean Room Creation (0:00 – 0:25)**:
   - Open `http://localhost:5173`. Point out the clean room lobby without pre-seeded chat history.
   - Click **"Create New Group"**, type *"Beyond 9to5 VIP Judges"*, and click Create. Note your generated invite code (e.g. `TC-8492`).
   - Highlight the **`💾 Persistent Local Disk`** or **`🍃 MongoDB Atlas`** storage badge.

2. **Split-Screen Multiplayer Activation (0:25 – 0:45)**:
   - Click **"Split-Screen Multiplayer"** in the top navigation bar.
   - Watch Phone A (*Rohan*) and Phone B (*Maa*) instantly sync into the same live session with zero configuration.

3. **In-Flight Spam Detection & Screenshot OCR (0:45 – 1:15)**:
   - On Phone B, paste or type an urgent fake payment or power bill notice.
   - Point out the instant **`<15ms SPAM / SCAM ALERT`** badge highlighting red flags.
   - Attach or paste a viral forwarded screenshot: watch `Tesseract.js` scan the text client-side and trigger 5-step live fact-checking.

4. **Credibility Card & Community Notes Voting (1:15 – 1:40)**:
   - The verified **Credibility Card** renders simultaneously across both screens with high-contrast verdict banners and SerpApi outlet consensus.
   - On Phone B, click **`👍 Helpful`**: Phone A's screen updates in real time, elevating the card to **`✅ Verified by Group Consensus`**.
   - Show the **"Copy Polite Reply"** feature with instant toggle between English, हिन्दी, and Hinglish.

5. **Under-The-Hood Evidence Drawer & Radar Export (1:40 – 2:00)**:
   - Click **"Inspect Evidence & APIs"** to display live latency metrics, SerpApi clean Markdown extraction, and You.com citations.
   - Click **"Misinformation Radar"** in the header and download the complete compliance audit log via **`⬇️ Export Audit CSV`**.

---

## 📄 License
This project is open-source software licensed under the **[MIT License](LICENSE)**. Built for the Beyond 9to5 Buildathon.
