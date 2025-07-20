import React from "react";
import Link from "next/link";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Link href={link.url} className="link-list-item-url">
        {link.text}
      </Link>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;