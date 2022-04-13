export type Comment = {
  pk: string;
  text: string;
  entry: string;
  timestamp_updated: Date;
  timestamp_created: Date;
};

export type Post = {
  pk: string;
  name: string;
  comments: [Comment];
  image: string;
  timestamp_updated: Date;
  timestamp_created: Date;
};
