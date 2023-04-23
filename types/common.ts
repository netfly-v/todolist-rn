export enum TYPE {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export type ItemType = {
  name: string;
  isCompleted: boolean;
  id: string;
};
