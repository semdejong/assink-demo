import type { CSSProperties } from "react";

export function chipStyle(item: { fan: string; color: string; ink: string }): CSSProperties {
  return { "--fan": item.fan, "--chip": item.color, "--chip-ink": item.ink } as CSSProperties;
}
