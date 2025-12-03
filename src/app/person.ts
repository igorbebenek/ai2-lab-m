export interface Address {
  city?: string;
  street?: string;
  postCode?: string;
}

export interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
  address?: Address;
}
