export type Link = {
  href: string;
  copy: string;
  ariaLabel?: string;
};

export type AboutTemplateProps = {
  links: ReadonlyArray<Link>;
};
