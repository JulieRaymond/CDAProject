export interface Course {
  courseID: number;
  title: string;
  description: string;
  date: Date;
  available_hours: string[];
  level: string;
  kilometer: string;
  time: string;
  kmbyhour: string;
  pace: string;
  image?: string;
}
