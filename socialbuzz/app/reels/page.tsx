"use client";
import getReels from "../actions/getReels";
import Reels from "./Reels";
import { FadeLoader } from "react-spinners";

export default function Home() {
  const { data: fetchedReels, isLoading, mutate } = getReels();

  if (isLoading) return <FadeLoader color="white" loading={isLoading} />;

  return (
    <Reels
      fetchedReels={fetchedReels}
      isLoading={isLoading}
      mutateReels={mutate}
    />
  );
}
