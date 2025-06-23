export interface Post{
    _id:string;
    title:string | null;
    slug: Slug | null;
}

type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};