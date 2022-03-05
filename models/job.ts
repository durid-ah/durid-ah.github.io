 
type Job = {
   position: string;
   company:string;
   location: string;
   startDate: string;
   endDate?: string;
   current: boolean;
   logoUrl?: string;
   descriptions: string[];
}

export const toJobType = (json: any): Job => ({
   position: json.position,
   company: json.company,
   location: json.location,
   startDate: json.startDate,
   endDate: json.endDate ?? null,
   current: json.current,
   logoUrl: json.logoUrl,
   descriptions: json.descriptions 
});

export default Job;
