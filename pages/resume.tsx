import Layout from "../component/layout";
import { NavLocation } from "../models/nav_location";

export default function Resume() {
   return (
      <Layout location={NavLocation.Resume}>
         <div>This is where we will have the resume</div>
      </Layout>
   )
}