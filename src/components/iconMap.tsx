import { Settings2, Layers, Wrench, Paintbrush, Sparkles, Box } from "lucide-react";
import type { SkillItem } from "../data";

export const ICON_MAP: Record<SkillItem["icon"], typeof Settings2> = {
  management: Settings2,
  glass: Layers,
  structural: Wrench,
  design: Paintbrush,
  restoration: Sparkles,
  printing: Box,
};
