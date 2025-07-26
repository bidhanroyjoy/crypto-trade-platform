import { Card, CardContent } from "@/components/ui/card";

interface WalletBalanceCardProps {
  token: string;
  amount: string;
}

export function WalletBalanceCard({ token, amount }: WalletBalanceCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-md font-semibold">{token}</div>
        <div className="text-lg">Balance: {amount}</div>
      </CardContent>
    </Card>
  );
}
