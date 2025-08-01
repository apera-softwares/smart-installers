import { ReactNode } from "react";

export interface FAQItemType {
  id: string;
  title: string;
  content: ReactNode;
}

export const faqs: FAQItemType[] = [
  {
    id: "101",
    title: "How to Change my Photo from Admin Dashboard?",
    content: (
      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
  {
    id: "102",
    title: "How to Change my Password easily?",
    content: (
      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
  {
    id: "103",
    title: "How to Change my Subscription Plan using PayPal",
    content: (
      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
];
