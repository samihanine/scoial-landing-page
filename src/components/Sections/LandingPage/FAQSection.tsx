import Accordion from "@/components/Accordion/Accordion";

const bgStyle = {
  backgroundColor: "hsla(0,0%,100%,1)",
  backgroundImage: `radial-gradient(at 89% 93%, hsla(308,100%,70%,0.2) 0px, transparent 50%),
    radial-gradient(at 10% 100%, hsla(343,100%,76%,0.2) 0px, transparent 50%)`,
  backgroundSize: "",
};

const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      style={bgStyle}
      className="flex flex-col items-center justify-center bg-center w-full min-h-full box-border gap-y-10 gap-x-10 p-25 px-10 !pb-[120px] md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Frequently asked questions</span>
      </h1>
      <div className="flex flex-col items-start justify-start w-full md:w-[700px] space-y-10 rounded-lg border shadow-lg p-10 bg-white mb-5">
        <Accordion title="Who is the ideal user for your application?">
          <p className="text-sm md:text-base font-thin">
            Our application is ideally suited for small businesses,
            solopreneurs, social media managers, creators and larger enterprises
            looking to streamline their social media content creation and
            management process.
          </p>
        </Accordion>
        <Accordion title="How does the AI assistant help save time on social media management?">
          <p className="text-sm md:text-base font-thin">
            With our AI assistant, you'll no longer need to spend countless
            hours brainstorming, drafting, and scheduling your social media
            posts. It will automatically generate engaging and personalized
            content for your accounts, line them up in a convenient posting
            calendar, and even post them for you at the optimal times. Our AI
            assistant is not just an automation tool; it's a smart content
            creator that tailors each post to your brand's voice, industry
            trends, SEO practices, and your specific audience's preferences. It
            also takes into account the context of current trends and
            incorporates relevant hashtags to ensure your content is both timely
            and resonant.
          </p>
        </Accordion>
        <Accordion title="How does the AI assistant integrate with my existing social media platforms?">
          <p className="text-sm md:text-base font-thin">
            Your AI assistant effortlessly connects with multiple popular social
            media platforms including Facebook, Instagram, LinkedIn, and
            Twitter. For our premium users, you can even manage multiple
            accounts from the same platform, ensuring a seamless content
            management experience across all your social media presence.
          </p>
        </Accordion>
        <Accordion title="How does post-timing work?">
          <p className="text-sm md:text-base font-thin">
            Can I specify when I want my posts to go out? Absolutely, you can
            specify the timing for your posts. Our intelligent AI will also
            provide recommended times based on factors such as your industry and
            timezone, ensuring optimal engagement.
          </p>
        </Accordion>
        <Accordion title="How does the AI assistant respect and protect my privacy?">
          <p className="text-sm md:text-base font-thin">
            Your privacy is our top priority. We employ Auth0 for user
            authentication, which means we never store any of your passwords on
            our servers. Auth0 is a globally trusted platform recognized for its
            high-security standards, ensuring your login credentials are safe
            and secure.
          </p>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
