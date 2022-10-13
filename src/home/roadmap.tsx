import React, { useEffect, useState } from "react";

const Card = ({
  title,
  list,
}: {
  title: string;
  list: {
    tag: string;
    contents: string[];
  }[];
}) => {
  return (
    <div className="roadmap-card">
      <p className="title">{title}</p>
      <ul>
        {list.map(({ tag, contents }) => (
          <li key={tag}>
            <p className="tag">{tag}</p>
            <p className="content">
              {contents.map((content) => (
                <span key={content}>
                  {content} <br /> <br />
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Roadmap = () => {
  const [range, setRange] = useState(0);
  const roadmapDiv: Element | null = document.querySelector(".roadmaps");

  const scrollCards = (value: number) => {
    setRange(value);
    if (roadmapDiv) {
      roadmapDiv.scrollTo(value, 0);
    }
  };

  useEffect(() => {
    if (roadmapDiv) {
      roadmapDiv.addEventListener("scroll", () => {
        setRange(roadmapDiv.scrollLeft);
      });
      return () => {
        roadmapDiv.removeEventListener("scroll", () => {
          setRange(roadmapDiv.scrollLeft);
        });
      };
    }
  }, [roadmapDiv]);

  return (
    <div className="roadmap-wrapper">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3>Appehattan</h3>
          <h3 className="green">RoadMap</h3>
        </div>
        <div>
          <p className="text-end note">Swipe the knob to</p>
          <p className="text-end note">the left or right</p>
        </div>
      </div>
      <div className="slide-container">
        <input
          type="range"
          min="1"
          max={roadmapDiv?.scrollWidth ? roadmapDiv.scrollWidth : undefined}
          value={range}
          className="slider"
          id="myRange"
          onChange={({ target: { value } }: any) => {
            scrollCards(value);
          }}
        />
      </div>
      <div className="roadmaps">
        <Card
          title="2022"
          list={[
            {
              tag: "Q3",
              contents: [
                "Apehattan project announcement",
                "Small Raise For DEX Liquidity and Marketing",
              ],
            },
            {
              tag: "Q4",
              contents: ["Land NFTs Sales", "Metaverse Design & Development"],
            },
          ]}
        />
        <Card
          title="2023"
          list={[
            {
              tag: "Q1",
              contents: ["Apehattan 1.0 Released"],
            },
            {
              tag: "Q1 - Q4",
              contents: [
                "Social Interactions and Experiences.  Play-To-Earn Games Enabled",
              ],
            },
          ]}
        />
        <Card
          title="2024"
          list={[
            {
              tag: "Q3",
              contents: [
                "Apehattan project announcement",
                "Small Raise For DEX Liquidity and Marketing",
              ],
            },
            {
              tag: "Q4",
              contents: ["Land NFTs Sales", "Metaverse Design & Development"],
            },
          ]}
        />
        <Card
          title="2025"
          list={[
            {
              tag: "Q3",
              contents: [
                "Apehattan project announcement",
                "Small Raise For DEX Liquidity and Marketing",
              ],
            },
            {
              tag: "Q4",
              contents: ["Land NFTs Sales", "Metaverse Design & Development"],
            },
          ]}
        />
      </div>
    </div>
  );
};
