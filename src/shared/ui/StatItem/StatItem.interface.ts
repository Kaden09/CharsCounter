import { StatColors } from "../../config/stat-colors.type.ts";

export interface IStatItem {
  statValue?: number;
  statLabel: string;
  background: StatColors;
	icon: React.ReactNode;
  className?: string;
}
