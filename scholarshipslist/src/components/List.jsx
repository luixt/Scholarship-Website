import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import mastercard from "./mastercardLogo.jpg";
import nbcu from "./NBCUniversal.jpg";
import deloitte from "./deloitte.jpg";


const List = () => {

    return(
        <div className='container'>
            <ScholarshipCard img={mastercard} type="Software Engineer" time="Summer 2025" dead="10/2/2024" link="https://careers.mastercard.com/us/en/job/R-228370/Software-Engineer-Intern-Summer-2025-United-States" />
            <ScholarshipCard img={deloitte} type="Software Engineer" time="Summer 2025" dead="09/20/2024" link="https://apply.deloitte.com/careers/JobDetail/Deloitte-Consulting-Software-Engineering-Summer-Scholar-Summer-2025/185362" />
            <ScholarshipCard img={nbcu} type="Software Engineer" time="Summer 2025" dead="09/26/2024" link="https://jobs.smartrecruiters.com/NBCUniversal3/744000014255828" />

        </div>
    )

};

export default List;