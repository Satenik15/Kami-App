import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ICard {
    name: string;
    url: string;
    count?: number;
    description?: string;
    icon: IconDefinition;
}