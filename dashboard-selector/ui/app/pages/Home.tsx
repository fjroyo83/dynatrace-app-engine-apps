/* eslint-disable no-secrets/no-secrets */
import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { Flex } from "@dynatrace/strato-components/layouts";
import { Heading, Paragraph} from "@dynatrace/strato-components/typography";
import { Link } from '@dynatrace/strato-components/typography';


import './Home.css';

interface Section {
  id: string;
  title: string;
  image: string;
}

const tenantURL = `https://dyb8308h.sprint.apps.dynatracelabs.com`;

const sections: Section[] = [
  { id: 'functional', title: 'Functional Observability: select this section if you want your dashboard to contain information about user experience . This includes KPIs such as User Satisfaction, Geolocation, Response Time or Errors amongst others:', image: './assets/functional.png' },
  { id: 'application', title: 'Application Observability: select this section if you want your dashboard to contain information about the health of your application and related services. This includes KPIs such as healt of services, applications and synthetic checks, Error Rates or Response Times:', image: './assets/application.png' },
  { id: 'platform', title: 'Platform Observability: select this section if you want your dashboard to contain information about the health of the plaform that support your applicaion. This includes information about the health of the kubernetes clusters or cloud services that your application is using:', image: './assets/platform.png' },
  { id: 'infrastructure', title: 'Infrastructure Observability: select this section if you want your dashboard to contain information about the health of the infrastructure that support your applicaion. This includes KPIs such as health of servers, CPU, Memory, Disk or Networkamongst others:', image: './assets/infrastructure.png' },
];

export const Home = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [link, setLink] = useState<string>('');

  const toggleSelection = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const confirmSelection = () => {
    if (selected.length === 0) {
      setLink('Please select at least one section.');
      return;
    }
    
    const combinationKey = selected.sort().join('-');


    switch (combinationKey) {
      case 'platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=617fb050-27f8-4bb1-9c5d-771470a6fa8c`);
        return;
      case 'infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=9d21a59b-c7db-4c74-a02c-8b1261e38aa3`);
        return;
      case 'infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=cc669d6d-bebc-43de-ab09-7bdfee23f8be`);
        return;
      case 'functional':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=1a057303-3f15-4ddd-8bfc-7e12d4a9d3bf`);
        return;
      case 'functional-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=056e5f20-f9a9-4fa1-8257-c2d4a0c1f114`);
        return;
      case 'functional-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=07e1be86-a7d6-4061-84b0-d745f2c3bebc`);
        return;
      case 'functional-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=d679f080-5b30-403c-94ee-0aa7af8fe905`);
        return;
      case 'application':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=eb2d6f21-701b-4990-9517-cd0bcff8c22e`);
        return;
      case 'application-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=ffd0a04c-4502-490b-a99b-dd6bd12c6811`);
        return;
      case 'application-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=e3d1b1df-6964-47bb-be1d-69e8c4004be1`);
        return;
      case 'application-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=1d310524-2999-4c16-a67f-c79bfeb43976`);
        return;
      case 'application-functional':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=adf5520c-1d99-4f8a-9d68-fb23395c55ee`);
        return;
      case 'application-functional-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=d4ef0b63-c8b9-4578-8ff1-56cf8f7e3e51`);
        return;
      case 'application-functional-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=e847edcd-a173-4bbf-a95c-f38a7fb0b773`);
        return;
      case 'application-functional-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=361fb872-207e-4b6d-b4cd-face89680b1f`);
        return;
      default:
        setLink('There was an error indentifying the selected sections');
        return;
    }
    };

  return (

    <Flex flexDirection="column" alignItems="center" padding={32}>
      <img
        src="./assets/scib-logo.svg"
        alt="SCIB logo"
        width={450}
        height={150}
      ></img>

      <Heading>Dashboard selector for Dynatrace SCIB users</Heading>
      <Paragraph>
        With this application, you will be able to compose a dashboard that shows the health 
        of your application at different levels.
      </Paragraph>

    <div className="App">
      <h2>Step1: Select your dashboard sections</h2>
      <div className="grid">
        {sections.map(section => (
          <SectionCard
            key={section.id}
            section={section}
            selected={selected.includes(section.id)}
            onToggle={() => toggleSelection(section.id)}
          />
        ))}
      </div>
      <button onClick={confirmSelection}>Generate dashboard</button>
      <div className="result">
      <h2>Step2: Open the dashboard with the line below</h2>
      

       {link && (
          <p>
            <Link href={link}>Your dashboard</Link>
          </p>
        )}
         <Paragraph>Application selection: You will be able to select the application inside the dashboard itself using the Management Zone selector in the top right corner as showng in the following example:</Paragraph> 
         <img 
            src="./assets/appSelector.png"
            alt="App Selector"
         ></img>

      </div>
    </div>

</Flex>
  );
}
