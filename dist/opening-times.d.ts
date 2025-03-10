interface Period {
    close: string;
    open: string;
}
interface DaySchedule {
    isClosed: boolean;
    isOpen24: boolean;
    periods: Period[];
}
export interface WeekSchedule {
    monday: DaySchedule;
    tuesday: DaySchedule;
    wednesday: DaySchedule;
    thursday: DaySchedule;
    friday: DaySchedule;
    saturday: DaySchedule;
    sunday: DaySchedule;
}
export {};
