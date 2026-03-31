import type { ToolHubSection } from "@/lib/tools/config";

interface ToolCardLeadIconProps {
  hubSection: ToolHubSection;
  iconEmoji: string;
}

export function ToolCardLeadIcon({ hubSection, iconEmoji }: ToolCardLeadIconProps) {
  return (
    <span className="tool-card-icon-wrap" data-hub-section={hubSection} aria-hidden="true">
      <span className="tool-card-emoji">{iconEmoji}</span>
    </span>
  );
}
