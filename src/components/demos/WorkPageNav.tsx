import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type WorkPageNavProps = {
  caseHref: string;
  links: {
    label: string;
    href: string;
  }[];
};

export function WorkPageNav({ caseHref, links }: WorkPageNavProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <Container className="py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Badge>已上线样板</Badge>
            <span className="text-sm font-medium text-slate-700">作品页面预览</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button href="/projects" variant="ghost">
              返回作品集
            </Button>
            {links.map((link) => (
              <Button href={link.href} key={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
            <Button href={caseHref} variant="ghost">
              案例说明
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
