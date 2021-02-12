import { Thumbnail } from "./thumbnail";

export interface Page { 
  pictures: Thumbnail[];
  page: number,
  pageCount: number,
  hasMore: boolean
}