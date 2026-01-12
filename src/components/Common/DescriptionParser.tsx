import React from 'react';
import HoverInfo from './HoverInfo';
import { tooltips } from '../../data/Tooltips';

interface DescriptionParserProps {
  description: string;
}

const DescriptionParser: React.FC<DescriptionParserProps> = ({ description }) => {
  const parts = [];
  let lastIndex = 0;

  const regex = /<Info key="([^"]+)">([\s\S]*?)<\/Info>/g;
  let match;

  while ((match = regex.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span
          key={`text-${lastIndex}`}
          dangerouslySetInnerHTML={{ __html: description.substring(lastIndex, match.index) }}
        />
      );
    }

    const [fullMatch, key, text] = match;
    const tooltipData = tooltips[key] || { header: 'Error', description: 'Tooltip not found.' };

    parts.push(
      <HoverInfo key={`info-${match.index}`} header={tooltipData.header} tooltipContent={tooltipData.description}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </HoverInfo>
    );

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < description.length) {
    parts.push(
      <span
        key={`text-${lastIndex}`}
        dangerouslySetInnerHTML={{ __html: description.substring(lastIndex) }}
      />
    );
  }

  return <>{parts}</>;
};

export default DescriptionParser;
