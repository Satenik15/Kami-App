import { faFolderOpen, faImages, faLayerGroup, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { ICard } from "../../models/card";

export const items: ICard[] = [
    {
      name: 'Dashboard',
      url: '/',
      icon: faLayerGroup
    },
    {
      name: 'Albums',
      url: '/album-list',
      icon: faFolderOpen
    },
    {
      name: 'Photos',
      url: '/photo-list',
      icon: faImages
    },
    {
      name: 'Posts',
      url: '/post-list',
      icon: faSignsPost
    }
  ]