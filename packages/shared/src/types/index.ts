export interface TooltipInfo {
  header: string;
  message: string;
}

export interface CustomizationOption {
  text: string;
  isTrue: boolean;
}

export interface TooltipsInfo {
  [key: string]: TooltipInfo;
}
