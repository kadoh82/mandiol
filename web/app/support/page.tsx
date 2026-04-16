import { getSupportAgencies } from "@/lib/data";
import { getAllOffences } from "@/lib/offences";
import SupportDirectory from "./SupportDirectory";

export const metadata = { title: "Find Support | Mandiol" };

export default function SupportPage() {
  const agencies = getSupportAgencies();
  const offences = getAllOffences();

  // Collect unique regions and offence types for filters
  const regions = Array.from(
    new Set(agencies.flatMap((a) => a.regions))
  ).sort();
  const offenceTypes = offences.map((o) => ({ id: o.id, title: o.title }));

  return (
    <SupportDirectory
      agencies={agencies}
      regions={regions}
      offenceTypes={offenceTypes}
    />
  );
}
