export type Link = {
    href: string;
    copy: string;
    
}

export type AboutSectionTemplateProps = {
    links: ReadonlyArray<Link>;
}