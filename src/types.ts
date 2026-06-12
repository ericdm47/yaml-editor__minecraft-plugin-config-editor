export interface GunPreset {
  recoil: number;
  firerate: number;
  damage: number;
  maxbullets?: number;
  maxBulletDistance?: number;
  setZoomLevel?: number;
  delayForShoot?: number;
}

export type PresetsMap = Record<string, Partial<GunPreset>>;

export type EditorTheme = "dark" | "light"; // dark = Create Industrial, light = Brass Workshop

export interface HistoryState {
  data: any;
  fileName: string;
}
