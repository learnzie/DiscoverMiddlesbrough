import React from "react";
import { AttractionCard } from "./attractionCard";

export const Inclusion = () => {
  return (
    <section className="attraction" id="included">
      <div className="grid-wrapper">
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
      </div>
    </section>
  );
};
