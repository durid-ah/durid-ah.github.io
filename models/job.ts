
export class Job {
   position: string;
   company:string;
   startDate: Date;
   endDate?: Date;
   current: boolean;
   logoUrl?: string;
   descriptions: string[];

   constructor(json: any) {
      this.position = json.position;
      this.company = json.company;
      this.startDate = new Date(json.startDate);
      this.endDate = json.endDate ?? null;

      this.descriptions = json.descriptions;
   }
}
