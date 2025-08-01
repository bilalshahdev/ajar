"use client";
import BxTabs from "../BxTabs";
import DamageLiabilityTerms from "../DamageLiabilityTerms";
import RentalDurationLimits from "../RentalDurationLimits";
import SecurityDepositRules from "../SecurityDepositRules";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const RentalPolicies = () => {
  const zones = useSelector((state: any) => state.zones);
  const [selectedZone, setSelectedZone] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="border rounded-md p-4 space-y-4">
      <div className="flex items-center justify-end gap-2">
        <Select value={selectedZone} onValueChange={setSelectedZone}>
          <SelectTrigger>
            <SelectValue placeholder="Select a zone" />
          </SelectTrigger>
          <SelectContent>
            {zones.map((zone: any) => (
              <SelectItem key={zone._id} value={zone._id}>
                {zone.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>{" "}
      <p className="text-sm bg-amber-100 text-black p-2 rounded-md">
        ⚠️ Policy changes will only apply to new rentals. Ongoing bookings are
        not affected.
      </p>
      <>
        {selectedZone && (
          <BxTabs
            defaultValue="security-deposit"
            tabs={[
              {
                label: "Security Deposit Rules",
                value: "security-deposit",
                content: <SecurityDepositRules zone={selectedZone} />,
              },
              {
                label: "Damage Liability Terms",
                value: "damage-liability",
                content: <DamageLiabilityTerms zone={selectedZone} />,
              },
              {
                label: "Rental Duration Limits",
                value: "rental-duration",
                content: <RentalDurationLimits zone={selectedZone} />,
              },
            ]}
          />
        )}
      </>
    </div>
  );
};

export default RentalPolicies;
