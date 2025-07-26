"use client";
import { useEffect, useState } from "react";

interface Ticker {
  price: string;
  symbol: string;
}

export function LiveTicker({ symbol = "btcusdt" }: { symbol?: string }) {
  const [price, setPrice] = useState<string>("0.00");

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.p).toFixed(2));
    };
    return () => ws.close();
  }, [symbol]);

  return (
    <div className="p-4 rounded-md border bg-background">
      <div className="text-sm text-muted-foreground">
        Live Price ({symbol.toUpperCase()})
      </div>
      <div className="text-xl font-bold">${price}</div>
    </div>
  );
}
