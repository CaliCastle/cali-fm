import { defineType } from 'sanity'
import { z } from 'zod'

// iTunes Categories
const categories = [
  { value: 'Arts', title: 'Arts' },
  { value: 'Arts > Design', title: 'Arts > Design' },
  { value: 'Arts > Fashion & Beauty', title: 'Arts > Fashion & Beauty' },
  { value: 'Arts > Food', title: 'Arts > Food' },
  { value: 'Arts > Literature', title: 'Arts > Literature' },
  { value: 'Arts > Performing Arts', title: 'Arts > Performing Arts' },
  { value: 'Arts > Visual Arts', title: 'Arts > Visual Arts' },
  { value: 'Business', title: 'Business' },
  { value: 'Business > Business News', title: 'Business > Business News' },
  { value: 'Business > Careers', title: 'Business > Careers' },
  { value: 'Business > Investing', title: 'Business > Investing' },
  {
    value: 'Business > Management & Marketing',
    title: 'Business > Management & Marketing',
  },
  { value: 'Business > Shopping', title: 'Business > Shopping' },
  { value: 'Comedy', title: 'Comedy' },
  { value: 'Education', title: 'Education' },
  { value: 'Education > Education', title: 'Education > Education' },
  {
    value: 'Education > Education Technology',
    title: 'Education > Education Technology',
  },
  {
    value: 'Education > Higher Education',
    title: 'Education > Higher Education',
  },
  { value: 'Education > K-12', title: 'Education > K-12' },
  {
    value: 'Education > Language Courses',
    title: 'Education > Language Courses',
  },
  { value: 'Education > Training', title: 'Education > Training' },
  { value: 'Games & Hobbies', title: 'Games & Hobbies' },
  {
    value: 'Games & Hobbies > Automotive',
    title: 'Games & Hobbies > Automotive',
  },
  { value: 'Games & Hobbies > Aviation', title: 'Games & Hobbies > Aviation' },
  { value: 'Games & Hobbies > Hobbies', title: 'Games & Hobbies > Hobbies' },
  {
    value: 'Games & Hobbies > Other Games',
    title: 'Games & Hobbies > Other Games',
  },
  {
    value: 'Games & Hobbies > Video Games',
    title: 'Games & Hobbies > Video Games',
  },
  { value: 'Government & Organizations', title: 'Government & Organizations' },
  {
    value: 'Government & Organizations > Local',
    title: 'Government & Organizations > Local',
  },
  {
    value: 'Government & Organizations > National',
    title: 'Government & Organizations > National',
  },
  {
    value: 'Government & Organizations > Non-Profit',
    title: 'Government & Organizations > Non-Profit',
  },
  {
    value: 'Government & Organizations > Regional',
    title: 'Government & Organizations > Regional',
  },
  { value: 'Health', title: 'Health' },
  {
    value: 'Health > Alternative Health',
    title: 'Health > Alternative Health',
  },
  {
    value: 'Health > Fitness & Nutrition',
    title: 'Health > Fitness & Nutrition',
  },
  { value: 'Health > Self-Help', title: 'Health > Self-Help' },
  { value: 'Health > Sexuality', title: 'Health > Sexuality' },
  { value: 'Kids & Family', title: 'Kids & Family' },
  { value: 'Music', title: 'Music' },
  { value: 'News & Politics', title: 'News & Politics' },
  { value: 'Religion & Spirituality', title: 'Religion & Spirituality' },
  {
    value: 'Religion & Spirituality > Buddhism',
    title: 'Religion & Spirituality > Buddhism',
  },
  {
    value: 'Religion & Spirituality > Christianity',
    title: 'Religion & Spirituality > Christianity',
  },
  {
    value: 'Religion & Spirituality > Hinduism',
    title: 'Religion & Spirituality > Hinduism',
  },
  {
    value: 'Religion & Spirituality > Islam',
    title: 'Religion & Spirituality > Islam',
  },
  {
    value: 'Religion & Spirituality > Judaism',
    title: 'Religion & Spirituality > Judaism',
  },
  {
    value: 'Religion & Spirituality > Other',
    title: 'Religion & Spirituality > Other',
  },
  {
    value: 'Religion & Spirituality > Spirituality',
    title: 'Religion & Spirituality > Spirituality',
  },
  { value: 'Science & Medicine', title: 'Science & Medicine' },
  {
    value: 'Science & Medicine > Medicine',
    title: 'Science & Medicine > Medicine',
  },
  {
    value: 'Science & Medicine > Natural Sciences',
    title: 'Science & Medicine > Natural Sciences',
  },
  {
    value: 'Science & Medicine > Social Sciences',
    title: 'Science & Medicine > Social Sciences',
  },
  { value: 'Society & Culture', title: 'Society & Culture' },
  {
    value: 'Society & Culture > History',
    title: 'Society & Culture > History',
  },
  {
    value: 'Society & Culture > Personal Journals',
    title: 'Society & Culture > Personal Journals',
  },
  {
    value: 'Society & Culture > Philosophy',
    title: 'Society & Culture > Philosophy',
  },
  {
    value: 'Society & Culture > Places & Travel',
    title: 'Society & Culture > Places & Travel',
  },
  { value: 'Sports & Recreation', title: 'Sports & Recreation' },
  {
    value: 'Sports & Recreation > Amateur',
    title: 'Sports & Recreation > Amateur',
  },
  {
    value: 'Sports & Recreation > College & High School',
    title: 'Sports & Recreation > College & High School',
  },
  {
    value: 'Sports & Recreation > Outdoor',
    title: 'Sports & Recreation > Outdoor',
  },
  {
    value: 'Sports & Recreation > Professional',
    title: 'Sports & Recreation > Professional',
  },
  { value: 'Technology', title: 'Technology' },
  { value: 'Technology > Gadgets', title: 'Technology > Gadgets' },
  { value: 'Technology > Tech News', title: 'Technology > Tech News' },
  { value: 'Technology > Podcasting', title: 'Technology > Podcasting' },
  {
    value: 'Technology > Software How-To',
    title: 'Technology > Software How-To',
  },
  { value: 'TV & Film', title: 'TV & Film' },
]

export const Categories = z.object({
  first: z.string().optional(),
  secondary: z.string().optional(),
  tertiary: z.string().optional(),
})
export type Categories = z.infer<typeof Categories>

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'object',
  description:
    'Each podcast can belong to 3 separate categories, and will be ranked separately in each.',
  fieldsets: [
    {
      title: 'Optional categories',
      name: 'categories',
      options: {
        collapsible: true,
      },
    },
  ],
  fields: ['first', 'secondary', 'tertiary'].map((category, index) => ({
    name: `${category}Category`,
    type: 'string',
    description: 'Where should this podcast be organized in iTunes?',
    options: {
      list: categories,
    },
    fieldset: index ? 'categories' : undefined,
  })),
})
