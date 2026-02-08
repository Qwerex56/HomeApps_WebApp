export interface HouseholdResponse {
  id: string;
  familyName: string;
  created: string;
  usersCount: number;
}

export type HouseholdsResponse = HouseholdResponse[];
