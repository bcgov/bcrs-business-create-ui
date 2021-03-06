export interface ShareStructureIF {
    valid: boolean;
    shareClasses: ShareClassIF[];
}

export interface ShareClassIF {
    id: string;
    type?: string; // Indicates whether class or series
    name: string;
    priority: number;
    hasMaximumShares?: boolean;
    maxNumberOfShares: number | null;
    hasParValue?: boolean;
    parValue?: number | null;
    currency?: string;
    hasRightsOrRestrictions: boolean;
    series?: ShareClassIF[];
}
