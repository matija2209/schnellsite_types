export interface OpeningPeriod {
    open: string;
    close: string;
}
export interface DailyOperationHours {
    periods: OpeningPeriod[];
    isClosed?: boolean;
    isOpen24?: boolean;
}
export interface OpeningHours {
    monday?: DailyOperationHours;
    tuesday?: DailyOperationHours;
    wednesday?: DailyOperationHours;
    thursday?: DailyOperationHours;
    friday?: DailyOperationHours;
    saturday?: DailyOperationHours;
    sunday?: DailyOperationHours;
}
export interface OpeningTimesCustom {
    active: boolean;
    message?: string;
}
export type OpeningTimes = "openingTimes" | "emergencyOpeningTimes";
//# sourceMappingURL=opening-times.d.ts.map