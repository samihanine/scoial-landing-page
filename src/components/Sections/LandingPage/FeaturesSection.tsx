import FeatureCard from "@/components/Cards/FeatureCard";
import { HighQuality, PaperPlane } from "@/components/SVGs/SVGs";
import {
  AiOutlineCheck,
  AiOutlineSetting,
  AiOutlineSchedule,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

const bg1 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(at 98% 98%, hsla(308,100%,70%,0.05) 0px, transparent 50%),
    radial-gradient(at 3% 10%, hsla(343,100%,76%,0.05) 0px, transparent 50%)   `,
};

const bg2 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
  radial-gradient(at 16% 100%, hsla(308,100%,70%,0.05) 0px, transparent 50%),
radial-gradient(at 88% 15%, hsla(27,100%,50%,0.05) 0px, transparent 50%)`,
};

const bg3 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(at 97% 3%, hsla(285,100%,50%,0.05) 0px, transparent 50%),
radial-gradient(at 13% 90%, hsla(343,100%,76%,0.05) 0px, transparent 50%)
    `,
};

const bg4 = {
  backgroundColor: "hsla(0, 0%, 100%, 1)",
  backgroundImage: `
        radial-gradient(at 7% 8%, hsla(287,83%,47%,0.05) 0px, transparent 50%),
radial-gradient(at 86% 84%, hsla(239,94%,50%,0.05) 0px, transparent 50%)
`,
};

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center bg-center w-full box-border gap-y-10 gap-x-10 p-25 md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Why choose us ?</span>
        <span className="text-lg md:text-2xl font-normal">
          What do we provide ?
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-10 md:w-[700px]">
        <FeatureCard
          title="AI-driven Tailored Content"
          description={
            "Content is king, but not all content is created equal. Our intelligent AI doesn't just churn out generic posts – it crafts tailor-made content designed to resonate with your specific audience. By scanning your website and creating content that speaks your brand's language, we enhance your brand's voice and engage your followers in a meaningful way."
          }
          icon={<AiOutlineCheck />}
          bg={bg1}
        />
        <FeatureCard
          title="Master Social Media"
          description={
            "Time is money. In today's digital world, curating and scheduling social media content can be a full-time job. We aim to gift that time back to you. Whether it's Facebook, Instagram, LinkedIn, or Twitter, our easy-to-use analytics and automatic posting feature ensure your content reaches your audience where they are most engaged, freeing up valuable hours that you can reinvest in other crucial aspects of your business."
          }
          icon={<AiOutlineSetting />}
          bg={bg2}
        />
        <FeatureCard
          title="Stay Ahead with AI"
          description={
            "Our user-friendly platform adapts to the latest trends, ensuring your content is always fresh and engaging. What's more? Our intuitive content calendar lets you review, edit, and schedule posts with just a few clicks. We're continuously improving our features - from integrating Canva for image creation to using AI for image suggestions, we're committed to keeping you ahead of the curve."
          }
          icon={<AiOutlineSchedule />}
          bg={bg3}
        />
        <FeatureCard
          title="Secure and Time-Saving"
          description={
            "User privacy is our top priority. We use Auth0 to manage user authentication, ensuring we never store any of your passwords on our servers. But that's not all. With our platform, you save precious time on content creation and management, freeing you up to focus on your core business. And as we grow and learn from our users, we keep refining our features to make your journey even smoother."
          }
          icon={<AiOutlineAppstoreAdd />}
          bg={bg4}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
