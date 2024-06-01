import { Sort } from "../../models/sort.enum"

export const sortParams = [
    {
      id: 0,
      name: 'Title',
      value: Sort.DESC,
    },
    {
      id: 1,
      name: 'Title',
      value: Sort.ASC
    },
    {
      id: 2,
      name: 'Body',
      value: Sort.DESC,
      key: 'Description'
    },
    {
      id: 3,
      name: 'Body',
      value: Sort.ASC,
      key: 'Description'
    },
    {
      id: 4,
      name: 'User',
      value: Sort.DESC,
    },
    {
      id: 5,
      name: 'User',
      value: Sort.ASC
    },
  ]