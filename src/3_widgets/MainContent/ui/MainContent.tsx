import MusicList from "@/5_entities/musicCard/ui/MusicList";
import React from "react";

const MainContent: React.FC = () => {
  const data = [
    {
      id: "d1",
      title: "Popular artists",
      link: "#!",
      variant: "artists" as const, // Явное указание типа
      items: [
        {
          id: "artist_1",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        },
        {
          id: "artist_2",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        },
        {
          id: "artist_3",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        },
        {
          id: "artist_4",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        },
        {
          id: "artist_5",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        },
        {
          id: "artist_6",
          image: "/src/6_shared/assets/songers/post-malone.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            artist: "Post Malone",
          },
        }
      ],
    },
    {
      id: "d2",
      title: "Popular radio",
      link: "#!",
      variant: "radio" as const,
      items: [
        {
          id: "radio_1",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        },
        {
          id: "radio_2",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        },
        {
          id: "radio_3",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        },
        {
          id: "radio_4",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        },
        {
          id: "radio_5",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        },
        {
          id: "radio_6",
          image: "/src/6_shared/assets/albums/abida-parvin.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            radioName: "Energy",
          },
        }
      ],
    },
    {
      id: "d3",
      title: "albums",
      link: "#!",
      variant: "albums" as const,
      items: [
        {
          id: "album_1",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        },
        {
          id: "album_2",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        },
        {
          id: "album_3",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        },
        {
          id: "album_4",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        },
        {
          id: "album_5",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        },
        {
          id: "album_6",
          image: "/src/6_shared/assets/albums/hit-me-hard.png",
          linkPage: "#!",
          linkPlay: "#!",
          description: {
            albumName: "Energy",
            artist: "Post Malone",
          },
        }
      ],
    },
  ];

  return (
    <div className="bg-gray-1100 rounded-2xl max-lg:px-3 max-lg:py-2 px-5 py-4  flex flex-col max-lg:gap-3 gap-10">
      {data.map(({ title, link, variant, items, id }) => (
        <MusicList
          key={id}
          items={items}
          link={link}
          title={title}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default MainContent;
