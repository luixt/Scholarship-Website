import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import mastercard from "./mastercardLogo.jpg";
import nbcu from "./NBCUniversal.jpg";
import deloitte from "./deloitte.jpg";
import microsoft from "./microsoft.jpg";
import linkedin from "./linkedin.png";
import duolingo from "./duolingo.jpg";
import grammarly from "./grammarly.png";
import oracle from "./oracle.webp";
import netflix from "./netflix.png";
import royalcg from "./royalcb.jpg";
import tesla from "./tesla.png";


const List = () => {

    return(
        <div className='container'>
            <ScholarshipCard img={mastercard} type="Software Engineer" time="Mastercard (Summer 2025)" dead="Unknown" link="https://careers.mastercard.com/us/en/job/R-228370/Software-Engineer-Intern-Summer-2025-United-States" />
            <ScholarshipCard img={deloitte} type="Software Engineer" time="Deloitte (Summer 2025)" dead="12/01/2024" link="https://apply.deloitte.com/careers/JobDetail/Deloitte-Consulting-Software-Engineering-Summer-Scholar-Summer-2025/185362" />
            <ScholarshipCard img={nbcu} type="Software Engineer" time="NBCUniversal (Summer 2025)" dead="10/04/2024" link="https://jobs.smartrecruiters.com/NBCUniversal3/744000014255828" />
            <ScholarshipCard img={linkedin} type="Software Engineer" time="LinkedIn (Summer 2025)" dead="Unknown" link="https://www.linkedin.com/jobs/view/4014178595/?alternateChannel=search&refId=zghskSbUlb%2B38wIgAUxbWA%3D%3D&trackingId=G98vY1F%2F4W1j1K7urJdroA%3D%3D" />
            <ScholarshipCard img={microsoft} type="Cloud Solution Architect" time="Microsoft (Summer 2025)" dead="Unknown" link="https://jobs.careers.microsoft.com/global/en/job/1761677/Cloud-Solution-Architect%3A-Internship-Opportunities" />
            <ScholarshipCard img={microsoft} type="Software Engineer AI/ML" time="Microsoft (Summer 2025)" dead="9/30/2024" link="https://jobs.careers.microsoft.com/global/en/job/1766916/Software-Engineer%3A-AI%2FML-Intern-Opportunities-for-University-Students%2C-Redmond" />
            <ScholarshipCard img={duolingo} type="Data Science" time="Duolingo (Summer 2025)" dead="Unknown" link="https://job-boards.greenhouse.io/duolingo/jobs/7643898002" />
            <ScholarshipCard img={grammarly} type="Software Engineer" time="Grammarly (Summer 2025)" dead="Unknown" link="https://job-boards.greenhouse.io/grammarly/jobs/6232386?gh_src=0bb770131" />
            <ScholarshipCard img={oracle} type="Software Engineer Architecture" time="Oracle (Summer 2025)" dead="Unknown" link="https://eeho.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/jobsearch/requisitions/preview/255793/?location=United+States&locationId=300000000149325&selectedFlexFieldsFacets=%22AttributeChar16%7CInternSoftware%22" />
            <ScholarshipCard img={netflix} type="Software Engineer" time="Netflix (Summer 2025)" dead="Unknown" link="https://explore.jobs.netflix.net/careers?query=intern&pid=790298739171&domain=netflix.com&sort_by=relevance&triggerGoButton=false" />
            <ScholarshipCard img={royalcg} type="IT Infrastructure & Operations" time="Royal Caribbean Group (Summer 2025)" dead="Unknown" link="https://jobs.royalcaribbeangroup.com/job/Miramar-2025-Summer-Internship-IT-Infrastructure-&-Operations-Intern-FL-33132/1211577800/" />
            <ScholarshipCard img={tesla} type="AI Engineer & Robotics" time="TESLA (Winter/Spring 2025)" dead="Unknown" link="https://www.tesla.com/careers/search/job/internship-ai-engineer-self-driving-winter-spring-2025-221939" />

        </div>
    )

};

export default List;