"use client";
import { useEffect, useState } from "react";

interface Trade {
  price: string;
  qty: string;
  time: number;
  isBuyerMaker: boolean;
}

export function TradeHistory({ symbol = "btcusdt" }: { symbol?: string }) {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );
    ws.onmessage = (event) => {
      const trade = JSON.parse(event.data);
      setTrades((prev) => [trade, ...prev.slice(0, 9)]);
    };
    return () => ws.close();
  }, [symbol]);

  return (
    <div>
      <h4 className="font-semibold mb-2">Recent Trades</h4>
      <div className="space-y-1">
        {trades.map((t, idx) => (
          <div
            key={idx}
            className={t.isBuyerMaker ? "text-red-600" : "text-green-600"}
          >
            {parseFloat(t.qty).toFixed(4)} @ ${parseFloat(t.price).toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}
