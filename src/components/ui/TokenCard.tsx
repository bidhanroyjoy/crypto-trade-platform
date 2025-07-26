import { Card, CardContent } from "@/components/ui/card";

interface TokenCardProps {
  symbol: string;
  price: string;
  change: string;
}

export function TokenCard({ symbol, price, change }: TokenCardProps) {
  const isPositive = change.startsWith("+");
  return (
    <Card>
      <CardContent className="p-4 space-y-1">
        <div className="text-lg font-bold">{symbol}</div>
        <div className="text-xl">${price}</div>
        <div className={isPositive ? "text-green-600" : "text-red-600"}>
          {change}
        </div>
      </CardContent>
    </Card>
  );
}
