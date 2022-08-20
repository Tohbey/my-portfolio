export interface WorkHistory{
  work: string;
  workDetails: WorkDetail;
}

export interface WorkDetail{
  position: string;
  timeSpent: string;
  workDone: Array<String>;
}
