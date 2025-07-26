"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function OrderForm({ type = "buy" }: { type: "buy" | "sell" }) {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${type.toUpperCase()} ORDER\nPrice: ${price}\nAmount: ${amount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <Button
        type="submit"
        className={type === "buy" ? "bg-green-600" : "bg-red-600"}
      >
        {type === "buy" ? "Buy" : "Sell"}
      </Button>
    </form>
  );
}
