export interface PracticeService {
  id: string;
  title: string;
  description?: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  services: PracticeService[];
}
export interface Advocate {
  id: number;
  name: string;
  experience: number;
  coreArea: string;
  practiceAreas: string[];
}