import { useRouter } from "next/router";
import PrincingCard from "../../Cards/PricingCard";
import {
  AiOutlineCodeSandbox,
  AiOutlineRocket,
  AiOutlineBell,
} from "react-icons/ai";

const PrincingSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center bg-center w-full mx-auto box-border gap-y-10 gap-x-10 p-25 md:pt-24 md:p-10"
    >
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black text-center flex-col flex md:space-y-5 px-16">
        <span>Choose the pricing plan</span>
        <span className="text-lg md:text-2xl font-normal">
          We believe in affordable and transparent pricing. Choose a plan that
          suits your needs the best, and remember - no hidden fees, no
          surprises. Just straight-up value for your business.
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-stretch md:space-x-9 gap-y-10 gap-x-10 px-10">
        <PrincingCard
          onClick={() => router.push("join")}
          title={"Basic"}
          description={
            "For solo entrepreneurs and creators just starting their social media journey. Professional: For growing businesses ready to amplify their social media presence."
          }
          price={"$89.99"}
          enhance={false}
        >
          <ul className="text-gray-600">
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineCodeSandbox color="black" />
              <span>1 workspace</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineRocket color="black" />
              <span>3+ team members</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineBell color="black" />
              <span>Standard support</span>
            </li>
          </ul>
        </PrincingCard>
        <PrincingCard
          onClick={() => router.push("join")}
          title={"Pro"}
          description={
            "For established brands seeking to optimize and scale their social media strategy. (contact us for pricing) "
          }
          price={"$129.99"}
          enhance={true}
        >
          {" "}
          <ul className="text-gray-600">
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineCodeSandbox color="black" />
              <span>9+ workspaces</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineRocket color="black" />
              <span>Unlimied team members</span>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <AiOutlineBell color="black" />
              <span>Priority support</span>
            </li>
          </ul>
        </PrincingCard>
      </div>
    </section>
  );
};

export default PrincingSection;
