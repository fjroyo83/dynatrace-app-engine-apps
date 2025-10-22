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
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000001`);
        return;
      case 'infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000002`);
        return;
      case 'infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000003`);
        return;
      case 'functional':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000004`);
        return;
      case 'functional-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000005`);
        return;
      case 'functional-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000006`);
        return;
      case 'functional-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000007`);
        return;
      case 'application':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000008`);
        return;
      case 'application-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000009`);
        return;
      case 'application-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000010`);
        return;
      case 'application-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000011`);
        return;
      case 'application-functional':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000012`);
        return;
      case 'application-functional-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000013`);
        return;
      case 'application-functional-infrastructure':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000014`);
        return;
      case 'application-functional-infrastructure-platform':
        setLink(`${tenantURL}/ui/apps/dynatrace.classic.dashboards/#dashboard;gtf=-2h;gf=all;id=00000000-0000-0000-0000-000000000015`);
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
