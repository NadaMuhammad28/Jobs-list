export interface Job {
  id: string;
  cover: string;
  minimum_years_of_experience: number;
  title: string;
  description: string | null;
  basic_salary_to: number;
  basic_salary_from: number;
  salary_to: number;
  salary_from: number;
  number_of_vacancies: number;
  incremental_id: number;
  type: string;
  priority: string;
  duration_end: string | null;
  duration_start: string | null;
  job_duration_end: string | null;
  job_duration_start: string | null;
  date_closed: string | null;
  date_rejected: string | null;
  date_published: string;
  preferred_applicant_countries_sources: any[]; // Define the type of this array according to your needs
}
