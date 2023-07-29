"use client";
import getReels from "../actions/getReels";
import Reels from "./Reels";

export default function Home() {
  const { data: fetchedReels, isLoading, mutate } = getReels();

  if (isLoading) return <div>Loading Reels...</div>;

  return (
    <Reels
      fetchedReels={fetchedReels}
      isLoading={isLoading}
      mutateReels={mutate}
    />
  );
}
