import Layout from "../component/layout";
import { NavLocation } from "../models/nav_location";

export default function Projects() {
   return (
      <>
         <Layout location={NavLocation.Projects}>
            This will containt the projects page
         </Layout>
      </>
   )
}