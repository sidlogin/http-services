export class Employee {
  employee: EmployeeData[];
}
interface EmployeeData {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: State;
  orders: Order[];
  latitude: number;
  longitude: number;
}

interface Order {
  productName: string;
  itemCost: number;
}

interface State {
  abbreviation: string;
  name: string;
}

export interface BroadcastEvent {
  key: any;
  data?: any;
}
