// Centralized API and WebSocket resolution for local development and cloud production (Render / Vercel)
export const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

// Secure WebSocket URL resolution:
// If VITE_WS_URL is provided, use it.
// Otherwise, dynamically convert http:// -> ws:// and https:// -> wss:// based on API_BASE_URL.
export const WS_BASE_URL = (
  import.meta.env.VITE_WS_URL ||
  API_BASE_URL.replace(/^http:/, 'ws:').replace(/^https:/, 'wss:')
).replace(/\/$/, '');
