import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc)
{
  _id,
  _createdAt, 
  views, 
  image, 
  author -> {
    _id, name, image, bio
  }, 
  description,
  category, 
  slug, 
  title
}
`)