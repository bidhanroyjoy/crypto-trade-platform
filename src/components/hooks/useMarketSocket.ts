import { useEffect, useRef } from "react";

export function useMarketSocket(symbol: string, onMessage: (data: any) => void) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const url = `wss://stream.binance.com:9443/ws/${symbol}@trade`;
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    return () => ws.close();
  }, [symbol]);
}