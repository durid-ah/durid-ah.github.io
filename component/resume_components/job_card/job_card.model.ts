import Job from "../../../models/job";

export class TimeDiff {
   years: number;
   months: number;

   constructor(startDate: Date, endDate: Date) {
      const absolute = new Date(0);
      const diff = Number(endDate) - Number(startDate);
      const diffDate = new Date(diff);
      this.years = diffDate.getFullYear() - absolute.getUTCFullYear();
      this.months = (diffDate.getMonth() - absolute.getUTCMonth());  
   }

   toString(): string {
      const yearString = this.years == 0? "": `${this.years} year(s)`;
      const monthString =  this.months == 0? "": `${this.months} month(s)`;
      const connect = monthString != "" && yearString != ""? ", ": ""; 
      return `${yearString}${connect}${monthString}`;
   }
}