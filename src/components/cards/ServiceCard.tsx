import type { Service } from "@/data/services";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full p-0">
      <div className="border-b border-slate-200 p-6">
        <Badge>{service.title}</Badge>
        <p className="mt-4 text-lg font-semibold leading-7 text-slate-950">
          {service.subtitle}
        </p>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        <InfoBlock title="适合客户" items={service.suitableClients} />
        <InfoBlock title="核心功能" items={service.features} />
        <InfoBlock title="解决问题" items={service.problems} />
        <InfoBlock title="交付内容" items={service.deliverables} />
      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-6">
        <h3 className="text-sm font-semibold text-slate-950">适合报价方式</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.pricingMode}</p>
      </div>
    </Card>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
