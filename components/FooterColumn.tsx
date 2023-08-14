import Link from 'next/link';
import React from 'react'; // Make sure to import React

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href='/' key={link}>{link}</Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
