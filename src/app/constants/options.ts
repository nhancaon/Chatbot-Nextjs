interface LinkOption {
  name: string;
  link?: string;
}

interface DataOptions {
  marketplace: LinkOption[];
  categories: LinkOption[];
  solutions: LinkOption[];
  model: LinkOption[];
  business: LinkOption[];
}

const getMarketLink = (
  industryNumber?: number,
  solutionNumber?: number,
  collabModel?: number,
  businessProblem?: number
): string => {
  const baseUrl = "https://bambuup.com/en/marketplace?sort_by=changed&sort_order=DESC&page=&keyword=&location=";
  const industry = industryNumber ? `&industry=${industryNumber}` : "&industry=";
  const solutionType = solutionNumber ? `&solution_type=${solutionNumber}` : "&solution_type=";
  const collab = collabModel ? `&collab_model=${collabModel}` : "&collab_model=";
  const business = businessProblem ? `&business_problem=${businessProblem}` : "&business_problem=";
  return `${baseUrl}${industry}${solutionType}${collab}${business}`;
};

const data_options: DataOptions = {
  marketplace: [
    { name: "Categories" },
    { name: "Solution" },
    { name: "Potential collaboration model" },
    { name: "Business problems" },
  ],
  categories: [
    { name: "Agriculture & Marine Resources", link: getMarketLink(689) },
    { name: "Agrofood Industry", link: getMarketLink(693) },
    { name: "Biological Sciences", link: getMarketLink(697) },
    { name: "Communications", link: getMarketLink(705) },
    { name: "Computer related", link: getMarketLink(711) },
    { name: "Consumer related", link: getMarketLink(719) },
    { name: "Digitalization", link: getMarketLink(726) },
    { name: "Electronics Related Market", link: getMarketLink(728) },
    { name: "Electronics, IT and Telecomms", link: getMarketLink(737) },
    { name: "Energy Market", link: getMarketLink(746) },
    { name: "Energy Technology", link: getMarketLink(759) },
    { name: "Industrial manufacturing, Material and Transport Technologies", link: getMarketLink(785) },
    { name: "Industrial Products", link: getMarketLink(767) },
    { name: "Industrial Technologies", link: getMarketLink(774) },
    { name: "Measurements and Standards", link: getMarketLink(797) },
    { name: "Medical Health", link: getMarketLink(804) },
    { name: "Protecting Man and Environment", link: getMarketLink(815) },
    { name: "Social and Economics concerns", link: getMarketLink(820) },
    { name: "Sustainability", link: getMarketLink(831) },
  ],
  solutions: [
    { name: "Ready Product/ Solution", link: getMarketLink(undefined, 382) },
    { name: "Platform", link: getMarketLink(undefined, 383) },
    { name: "Patent", link: getMarketLink(undefined, 384) },
    { name: "App/ Add-on/ Component", link: getMarketLink(undefined, 385) },
    { name: "Research Work", link: getMarketLink(undefined, 386) },
    { name: "Others", link: getMarketLink(undefined, 416) },
  ],
  model: [
    { name: "Business Collaboration (Joint Venture)", link: getMarketLink(undefined, undefined, 387) },
    { name: "IP Acquisition", link: getMarketLink(undefined, undefined, 388) },
    { name: "Licensing", link: getMarketLink(undefined, undefined, 389) },
    { name: "R&D Collaboration", link: getMarketLink(undefined, undefined, 390) },
    { name: "Marketing", link: getMarketLink(undefined, undefined, 391) },
    { name: "Others", link: getMarketLink(undefined, undefined, 415) },
  ],
  business: [
    { name: "Digital Transformation", link: getMarketLink(undefined, undefined, undefined, 417) },
    { name: "Customer Experience", link: getMarketLink(undefined, undefined, undefined, 418) },
    { name: "Omni-Channel Growth", link: getMarketLink(undefined, undefined, undefined, 419) },
    { name: "Smart Factory", link: getMarketLink(undefined, undefined, undefined, 420) },
    { name: "Employee Engagement", link: getMarketLink(undefined, undefined, undefined, 421) },
    { name: "Marketing Effectiveness", link: getMarketLink(undefined, undefined, undefined, 422) },
    { name: "Route to Market (Channel)", link: getMarketLink(undefined, undefined, undefined, 423) },
    { name: "Supply Chain Finance", link: getMarketLink(undefined, undefined, undefined, 424) },
    { name: "Others", link: getMarketLink(undefined, undefined, undefined, 425) },
  ],
};

export default data_options;
