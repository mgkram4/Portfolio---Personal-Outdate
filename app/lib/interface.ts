export interface Post {
  title: string;
  overview: string;
  content: any;
  _id: string;
  image: {
    asset: string; // Assuming 'asset' is a string representing the path to the image
  };
  slug: {
    current: string;
  };
  _createdAt: string;
}
