import Services from "constants/Services";

const ServicePaths = Object.keys(Services) as (keyof typeof Services)[];

export default ServicePaths;
