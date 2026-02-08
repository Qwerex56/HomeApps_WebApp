import type { AxiosResponse } from "axios";
import instance from "../instance";
import type { HouseholdResponse, HouseholdsResponse } from "../repsonseTypes/household.response";

export const getUserHouseholds = async () : Promise<AxiosResponse<HouseholdsResponse>> => {
  const data = instance.get('Household/GetUserHouseholds');

  return data;
};

export const getUserHousehold = async () : Promise<AxiosResponse<HouseholdResponse>> => {
  const data = instance.get('Household/GetUserHousehold');

  return data;
};

export const createHousehold = async (familyName: string) : Promise<AxiosResponse> => {
  const data = instance.post('Household/CreateHousehold', {
    FamilyName: familyName
  });

  return data;
}
