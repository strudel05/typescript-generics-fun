export default interface IArticle {
  title: string;
  id: string;
  likes: number;
  dislikes: number;
  created: Date;
  updated: Date;
  isBookmarked: boolean;
}
