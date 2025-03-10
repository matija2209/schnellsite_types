export interface FAQRepository {
    items: FaqItem[];
}
export interface FaqItem {
    id: string;
    question: string;
    isActive: boolean;
    answer: string;
    order: number;
}
