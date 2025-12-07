
import { Metadata } from "next";
import { Slider } from "@/components/slider/slider";
import { MainReviews } from "@/components/reviews/main";
import { Trends } from "@/components/trend/trends";
import { MainPosts } from "@/components/posts/mainposts";
export const metadata: Metadata = {
  title: "FineTech-Home",
  description: " NEWS & Review for Technologies",
};

export default function Home() {
  return (
    <div >
      
       <Slider></Slider>
       <MainReviews></MainReviews>
      <Trends></Trends>
      <MainPosts></MainPosts>
    </div>
  );
}
