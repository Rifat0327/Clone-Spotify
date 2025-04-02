export type ArtistItem = {
  id: string;
  image: string;
  description: { artist: string };
  linkPage: string;
  linkPlay: string;
};

export type RadioItem = {
  id: string;
  image: string;
  description: { radioName: string };
  linkPage: string;
  linkPlay: string;
};

export type AlbumItem = {
  id: string;
  image: string;
  description: { albumName: string; artist: string };
  linkPage: string;
  linkPlay: string;
};

export type IMusicItem = ArtistItem | RadioItem | AlbumItem;

export type MusicItemVariant = "artists" | "radio" | "albums";

export interface IMusicList {
  title: string;
  link: string;
  variant: MusicItemVariant;
  items: IMusicItem[];
}
