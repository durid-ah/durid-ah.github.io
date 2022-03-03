 
type Job = {
   position: string;
   company:string;
   startDate: Date;
   endDate?: Date;
   current: boolean;
   logoUrl?: string;
   descriptions: string[];
}

export const toJobType = (json: any): Job => ({
   position: json.position,
   company: json.company,
   startDate: json.startDate,
   endDate: json.endDate ?? null,
   current: json.current,
   logoUrl: json.logoUrl,
   descriptions: json.descriptions 
});

export default Job;
