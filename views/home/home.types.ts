interface ICommunityFields {
  title: string;
  content: string;
  postedAt: string;
  postedBy: string;
}

interface ICommunityPosts {
  fields: ICommunityFields;
}

interface IFeedBackgroundFields {
  file: { url: string };
}

interface IFeedBackground {
  fields: IFeedBackgroundFields;
}

interface IFeedFields {
  title: string;
  subtitle: string;
  mainPath: string;
  mainButton: string;
  description?: string;
  redirectPath: string;
  redirectButton: string;
  background?: IFeedBackground;
  type: 'tips' | 'info' | 'community' | 'trials';
  communityPosts: ReadonlyArray<ICommunityPosts>;
}

export interface IFeedPosts {
  fields: IFeedFields;
}

export interface HomeProps {
  posts: ReadonlyArray<IFeedPosts>;
}
