export type Analytics = {
  onload: { url: string };
  onclick: { url: string };
  onsent: { url: string };
};

export type UserDetail = {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
};

export type ImageDefinition = {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
};

export type ImageDetail = {
  original: ImageDefinition;
  downsized: ImageDefinition;
  downsized_large: ImageDefinition;
  downsized_medium: ImageDefinition;
  downsized_small: ImageDefinition;
  downsized_still: ImageDefinition;
  fixed_height: ImageDefinition;
  fixed_height_downsampled: ImageDefinition;
  fixed_height_small: ImageDefinition;
  fixed_height_small_still: ImageDefinition;
  fixed_height_still: ImageDefinition;
  fixed_width: ImageDefinition;
  fixed_width_downsampled: ImageDefinition;
  fixed_width_small: ImageDefinition;
  fixed_width_small_still: ImageDefinition;
  fixed_width_still: ImageDefinition;
  looping: ImageDefinition;
  original_still: ImageDefinition;
  original_mp4: ImageDefinition;
  preview: ImageDefinition;
  preview_gif: ImageDefinition;
  preview_webp: ImageDefinition;
  "480w_still": ImageDefinition;
};

export type GifDetail = {
  type: "gif";
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: ImageDetail;
  user: UserDetail;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
};
