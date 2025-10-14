import React from 'react';
import { Paragraph} from "@dynatrace/strato-components/typography";
import './SectionCard.css';

interface Section {
  id: string;
  title: string;
  image: string;
}

interface Props {
  section: Section;
  selected: boolean;
  onToggle: () => void;
}

const SectionCard: React.FC<Props> = ({ section, selected, onToggle }) => {
  return (
      <div className={`section ${selected ? 'selected' : ''}`} onClick={onToggle}>
      <input type="checkbox" checked={selected} readOnly />
      {section.title}
      <img src={section.image} alt={section.title} />
    </div>
  );
};

export default SectionCard;
