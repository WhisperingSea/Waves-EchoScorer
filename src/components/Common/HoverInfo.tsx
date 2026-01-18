import React, { useState } from 'react';
import './HoverInfo.css';

interface HoverInfoProps {
  children: React.ReactNode;
  header: string;
  tooltipContent: string;
}

const HoverInfo: React.FC<HoverInfoProps> = ({ children, header, tooltipContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="hover-info-trigger"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="hover-info-popover">
          <div className="hover-info-header" dangerouslySetInnerHTML={{ __html: header }} />
          <div dangerouslySetInnerHTML={{ __html: tooltipContent }} />
        </div>
      )}
    </span>
  );
};

export default HoverInfo;