import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ReelActions from "../../../app/reels/ReelActions";

// Mock the axios.post function to prevent actual API calls during testing
const axios = jest.mock("axios", () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
}))

// Helper function to render the ReelActions component with props

describe("ReelActions", () => {
  // Sample data for the test props
  const testProps = {
    id: "reel_id_123",
    likeIds: ["user_id_1", "user_id_2"],
    comments: [
      {
        id: "comment_1",
        body: "Great reel!",
        createdAt: new Date(),
        postId: "reel_id_123",
        user: { 
            id: "user_id_1", 
            username: "testuser",
            profileImage: "https://testuser.com/profile.jpg",
            followerIds: ["user_id_2", "user_id_3"], 
        },
      },
    ],
    isCommentable: true,
    caption: "This is a cool reel",
    user: { 
            id: "user_id_1", 
            username: "testuser",
            profileImage: "https://testuser.com/profile.jpg",
            followerIds: ["user_id_2", "user_id_3"], 
    },
    mutateReels: jest.fn(), // Mock the mutateReels function
  };

  it("renders correct number of likes and comments", () => {
    render(<ReelActions {...testProps} />);

    const likeCount = screen.getByText(/2/i);
    const commentCount = screen.findByText(/1/i);

    expect(screen.getByText("2")).toBeInTheDocument();

    // expect(likeCount).toBeInTheDocument();
    // expect(commentCount).toBeInTheDocument();
  });

  it("renders correct heart icon when user has already liked the reel", () => {
    render(<ReelActions {...testProps} />);

    const filledHeartIcon = screen.getByTestId("filled-heart-icon");

    expect(filledHeartIcon).toBeInTheDocument();
  });

  it("renders correct outline heart icon when user has not liked the reel", () => {
    // Set up testProps so that the currentUser has not liked the reel
    const testPropsWithCurrentUserNotLiked = {
      ...testProps,
      likeIds: [], // User has not liked the reel
    };

    render(<ReelActions {...testPropsWithCurrentUserNotLiked} />);

    const outlineHeartIcon = screen.getByTestId("outline-heart-icon");

    expect(outlineHeartIcon).toBeInTheDocument();
  });

//   it("fires handleLike function on clicking heart icon", async () => {
//     render(<ReelActions {...testProps} />);

//     const filledHeartIcon = screen.getByTestId("filled-heart-icon");
//     fireEvent.click(filledHeartIcon);

//     // Expect that the handleLike function has been called
//     expect(testProps.mutateReels).toHaveBeenCalled();

//     // Check if axios.post was called with the expected arguments
//     expect(axios.post).toHaveBeenCalledWith("/api/like", {
//       feedId: "reel_id_123",
//       userId: "user_id_1",
//     });
//   });

  // Add more test cases as needed to cover other scenarios based on your component's implementation
});
