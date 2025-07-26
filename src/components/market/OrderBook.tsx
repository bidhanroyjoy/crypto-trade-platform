"use client";
import { useEffect, useState } from "react";

interface OrderBookEntry {
  price: string;
  quantity: string;
}

export function OrderBook({ symbol = "btcusdt" }: { symbol?: string }) {
  const [bids, setBids] = useState<OrderBookEntry[]>([]);
  const [asks, setAsks] = useState<OrderBookEntry[]>([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@depth`
    );
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setBids(data.bids.slice(0, 5));
      setAsks(data.asks.slice(0, 5));
    };
    return () => ws.close();
  }, [symbol]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold mb-2">Bids</h4>
        {bids.map(([price, qty], idx) => (
          <div key={idx} className="text-green-600">
            {price} ({qty})
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-semibold mb-2">Asks</h4>
        {asks.map(([price, qty], idx) => (
          <div key={idx} className="text-red-600">
            {price} ({qty})
          </div>
        ))}
      </div>
    </div>
  );
}
