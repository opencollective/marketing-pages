"use client";
import React, { useState, useEffect, useRef } from "react";
import FeatureSection, { TFeatureSection } from "./FeatureSection";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features: TFeatureSection[] = [
  {
    title: "Build Your Financial Foundation",
    description:
      "Essential tools for organizing, managing, and collaborating on your financial activities with transparency and control.",
    mediaContentClassName: "bg-gradient-to-br from-blue-500 to-blue-700",
    items: [
      {
        title: "Dashboard",
        description:
          "A central hub with tools for collaborative financial management in one place.",
        longDescription:
          "Your dashboard brings together all the tools you need to collaboratively manage your finances.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Accounts",
        description:
          "Organize funds with real-time balance tracking for reserves, crowdfunding, and expenses.",
        longDescription:
          "It all starts with accounts. Organize your money and control your spending with accounts. Create accounts for holding reserves, for crowdfunding contributions and for spending (or any combination of these functions). Money added to an account will increase its balance and any money spent (or transferred) will decrease its balance. You always know where you stand because the balance is always up-to-date and verifiable.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/accounts.png"
              width={2248}
              height={2178}
              alt="Screenshot of accounts dashboard"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Internal Transfers",
        description:
          "Move funds between accounts to allocate budgets and reallocate remaining funds.",
        longDescription:
          "Transfer money easily between accounts. Starting a new project? Transfer an allocated amount into a separate account in order to manage spending. Money left over at the end of the project? Transfer the remaining funds to another account and archive the project account.",
      },
      {
        title: "Account Permissions",
        description:
          "Give selected individuals admin access to accounts with transparent balance tracking.",
        longDescription:
          "Invite more people to partake in financial operations. Jane and John are managing a project? Create an account, transfer the allocated budget into it and make them administrators of the account. Now Jane and John can independently spend project funds and you (and everyone else) can see the balance at any given time and track how the money has been disbursed.",
      },
      {
        title: "Public Profile",
        description:
          "Increase transparency by making financial activities visible for crowdfunding and payments.",
        longDescription:
          "Activate a public profile to make yourself and your financials visible to the world and to invite broader engagement with  crowdfunding campaigns and payment requests.",
      },
      {
        title: "Custom Domains",
        description:
          "Integrate your public profile directly into your website.",
        longDescription:
          "Seamlessly integrate your public profile into your website.",
      },
    ],
  },
  {
    title: "Track & Manage Incoming Money",
    description:
      "Track all incoming funds from various sources with clarity and precision.",
    mediaContentClassName: "bg-gradient-to-br from-green-500 to-green-700",

    items: [
      {
        title: "Record Received Payments",
        description:
          "Record received payments to make funds immediately available for disbursement.",
        longDescription:
          "When money shows up in your bank account or a check is received and processed, add it to an account and it is immediately available for disbursement.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Collect Community Contributions",
        description:
          "Track crowdfunding with automatic recording of contributions and fees.",
        longDescription:
          "Setup crowdfunding campaigns to engage your community. Crowdfunding contributions are automatically recorded. Separate transactions are created for contributions and payment processor fees. Account balances always reflect the net contribution in order to clearly communicate what is truly available for spending.",
      },
      {
        title: "Expected Funds",
        description:
          "Document expected payments until they arrive, without affecting your ledger until received.",
        longDescription:
          "Have you been awarded a grant and are now expecting payments to arrive? Document and track expected income until it arrives and is added to your accounts. Transactions will not be added to the ledger until the money arrives and is added to an account.",
      },
    ],
  },
  {
    title: "Process & Control Spending",
    description:
      "Streamline payment requests and approvals with tools that support collaboration across hundreds of projects.",
    mediaContentClassName: "bg-gradient-to-br from-red-500 to-red-700",

    items: [
      {
        title: "Payment Requests",
        description:
          "Guide users through submitting complete payment requests with customizable instructions.",
        longDescription: `Are you struggling to deal with people asking to get paid but don't understand what is an invoice and how is it different from receipts? 
  
  A step-by-step payment request submission form will walk users through filing correct and complete payment requests. Optionally add your own instructions to guide people on how to properly submit a payment request in order to get paid. `,
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Payment Request Invitations",
        description:
          "Pay non-users by inviting them to complete payment requests with their information.",
        longDescription:
          "Do you want to pay someone who is not a user of the platform? Initiate a payment requests and invite them to complete it. They will receive an invitation that will guide them to create a new user, complete the payment request with their private information (legal name and payment method) and submit it for payment.",
      },
      {
        title: "Review & Approve Expenses",
        description:
          "Review submitted payment requests and approve legitimate ones for payment.",
        longDescription:
          "Review payment requests that have been submitted. Approve the legitimate requests you wish to pay.",
      },
      {
        title: "Process Payments Efficiently",
        description:
          "Process payments with balance protection, coordination, and tracking for efficient management.",
        longDescription: `All the information you need to quickly and effectively pay approved payment requests is at your finger tips.
  
  Automatic balance protection guarantees that you only pay expenses that can be covered by current account balances. Payment requests that cannot be covered will wait in the background and will surface only when there is enough balance to cover them.
  
  A payment request usually involve numerous people. One person submits an expense, another approves, and another pays it and when an invite it sent, someone else actually gets paid. A comment thread lets you communicate together to make sure the payment request is successfully handled. 
  
  Don't get stuck with problematic payment requests. Mark payment requests as "incomplete" when they are sent back to submitters for correction. Mark them as "on hold" while you are looking into them with your accountant or lawyer. 
  
  Pay automatically using one of the integrated payment processors (Wise, Paypal, Stripe) or process the payment off-platform (eg: from your bank account) and manually mark it as paid. `,
      },
      {
        title: "Prevent Fraud & Mistakes",
        description:
          "Protect finances with real-time security checks that flag suspicious payment requests.",
        longDescription:
          "Real time security checks are integrated into the payment tool and will alert you if something is suspicious. A green fraud indicator means you can safely make a payment. A red fraud indicator means you should stop and review the request.",
      },
    ],
  },
  {
    title: "Host & Support Groups",
    description:
      "Support multiple groups under your legal umbrella with tools that enable efficient financial management at scale.",
    mediaContentClassName: "bg-gradient-to-br from-indigo-500 to-indigo-700",

    items: [
      {
        title: "Hosted Collectives",
        description:
          "Host groups that manage their own funds while you handle the payments.",
        longDescription:
          "Collectives are like mini-organizations within your organization. Each collective can setup their own accounts, crowdfunding campaigns and projects. Contributions from crowdfunding campaigns are automatically attributed to the collective account balances. Collectives always know their current balance and can operate autonomously. They review and approve their own expenses and you handle the payments for them.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Invite Collectives",
        description:
          "Bring new groups under your organization with invitations to collaborate on finances.",
        longDescription:
          "Invite new groups to become hosted collectives within your organization. Create a new collective and invitations will be sent out to the team inviting them to join the platform and collaborate on their finances.",
      },
      {
        title: "Hosting Applications",
        description:
          "Review applications from groups seeking to be hosted under your organization.",
        longDescription:
          "Accept applications from groups that are interested in being hosted by you. A conversation thread within each application documents the review and acceptance process until they are either accepted (and become hosted collectives) or rejected.",
      },
      {
        title: "Review & Pay Hosted Collective Expenses",
        description:
          "Process payments with automatic balance checks to ensure funds are available.",
        longDescription: `The collective is responsible for reviewing and approving payment requests submitted to them. Payment requests approved by hosted collectives will show up in your list of disbursements that need to be paid. 
  
  Payment requests approved by collectives are automatically checked against their balances. If the collective balance is not sufficient to pay the request you will not see it. It will be held until the collective balance is able to cover it.`,
      },
      {
        title: "Charge Hosting Fees",
        description:
          "Fund operations with automated hosting fees that transparently track fee collection.",
        longDescription:
          "Charge hosting fees from your hosted collectives to fund your operational costs. Hosting fees are automatically applied and tracked in the ledger and visible to both you and your hosted collectives. When fees are collected, your balance will increase and the collective balance will decrease, all automatically.",
      },
    ],
  },
  {
    title: "Launch Successful Crowdfunding",
    description:
      "Create diverse campaigns with flexible tiers, goals, and transparent spending to build sustainable community funding.",
    mediaContentClassName: "bg-gradient-to-br from-yellow-500 to-yellow-700",

    items: [
      {
        title: "Create Custom Contribution Tiers",
        description:
          "Create diverse campaigns with tiers for one-time and recurring contributions.",
        longDescription:
          "Flexible tiers enable you to create a diversity of crowdfunding campaigns. Design tiers that are appropriate for you and your audience. Collect tips, one time and recurring contributions.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Set Funding Goals & Milestones",
        description:
          "Set one-time or recurring goals to communicate needs and encourage sustainable funding.",
        longDescription:
          "If you are crowdfunding for a one time project use one time goals. If, however, you are looking to form a sustainable, long term funding relationship with your contributors, consider using recurring goals to clearly communicate your financial needs and to encourage recurring contributions that can sustain you in the long term.",
      },
      {
        title: "Transparent Spending",
        description:
          "Show contributors how their money is used by tracking expenses against crowdfunding.",
        longDescription:
          "Use crowdfunding accounts for paying payment requests to demonstrate to your community that the money raised was spent in alignment with the purpose and goals of the crowdfunding campaign.",
      },
    ],
  },
  {
    title: "Distribute & Track Grants",
    description:
      "Manage grants transparently by tracking allocation, restrictions, and spending.",
    mediaContentClassName: "bg-gradient-to-br from-orange-500 to-orange-700",

    items: [
      {
        title: "Pay External Beneficiaries",
        description:
          "Send money to external beneficiaries who don't use the platform.",

        longDescription:
          "Use the disbursement tools to send money to beneficiaries who do not interact with the platform.",
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Onboard Grant Recipients",
        description:
          "Invite beneficiaries to join as collectives to track how grant money is spent.",
        longDescription:
          "Invite beneficiaries to join the platform and transparently manage their grants as collectives. You and your funders can together observe how the grant money is actually spent.",
      },
      {
        title: "Manage Restricted Funds",
        description:
          "Isolate grants with restrictions in dedicated accounts for proper tracking.",
        longDescription:
          "Place grants that are given with agreed restrictions (for example, about purpose and desired outcomes into restricted accounts. This will keep the grants isolated from other funding sources making it possible to track how they are spent.",
      },
    ],
  },
  {
    title: "Simplify Accounting",
    description:
      "Powerful tools for financial tracking, reporting, and compliance to simplify accounting and tax management.",
    mediaContentClassName: "bg-gradient-to-br from-teal-500 to-teal-700",

    items: [
      {
        title: "Track Every Transaction",
        description:
          "The immutable transaction log that ensures account balances are accurate and verifiable.",
        longDescription: `At the heart of the platform is a transaction ledger. All financial activities on the platform generate ledger transactions.
  
  Once a transaction has been written to the ledger it cannot be changed. The ledger is the "source of truth" and the reason account balances can be trusted to indicate how much money is actually available to spend in any account at any given time. 
  
  Trace all financial platform activities (payment requests, contributions, grants, etc.) to their related ledger transactions.`,
        media: (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <Image
              src="/screenshot.png"
              width={2529}
              height={1759}
              alt="Screenshot of features"
              className="rounded-md w-full"
            />
          </div>
        ),
      },
      {
        title: "Ledger",
        description:
          "Review periodic summaries with the ability to verify every transaction in the ledger.",
        longDescription:
          "A periodic (monthly, quarterly, yearly) transaction statement provides you an overview of ledger activity. Drill down into every number in the statement to review and verify the underlying ledger transactions.",
      },
      {
        title: "Ledger Export",
        description:
          "Export financial data in formats your accountants need for bookkeeping and reporting.",
        longDescription:
          "The ledger accumulates a lot of detailed information. Your accountants will need this information in order to do your accounting. An elaborate export tool will let you setup and reliably export periodically the information your accountants need.",
      },
      {
        title: "Chart of Accounts",
        description:
          "Categorize transactions to simplify exports and reduce accounting costs.",
        longDescription:
          "Setup your chart of accounts and categorize your disbursements and added funds. Include this in your exports and reduce the time, effort and accounting costs.",
      },
      {
        title: "Integrate Banking Data",
        description:
          "Link bank accounts to automatically import transactions for easier reconciliation.",
        longDescription:
          "The platform works independently and is not bound to any specific banks or other financial service providers. Connect your platform account to your banking services and your transactions automatically show up on the platform. Then, with a few clicks transform (or match) your debit transactions into disbursements and your credit transactions into contributions or added funds.",
      },
      {
        title: "Automate Tax Compliance",
        description:
          "Collect tax forms from payees and download ready-to-submit forms at year-end.",
        longDescription:
          "Automatically collect USA tax forms from people who get paid through the platform. At the end of the fiscal year you can download all the relevant tax-forms, ready to submit to the authorities.",
      },
      {
        title: "Manage Financial Agreements",
        description:
          "Store financial agreements and link them to relevant disbursements.",
        longDescription:
          "Upload and track financial agreements. Link agreements to hosted collectives and reference them when paying disbursements.",
      },
    ],
  },
];

export default function Features({}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Create refs for each feature section
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Track active sub-items for each section
  const [activeSectionItems, setActiveSectionItems] = useState<number[]>(
    features.map(() => 0) // Initialize with index 0 for each section
  );

  // Check if each section is in view
  useEffect(() => {
    // Create IntersectionObserver instances for each section
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // If the section is entering the viewport and is more than 20% visible
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
              setActiveIndex(index);
            }
          });
        },
        {
          // Options: trigger when 20% of the element is visible
          // Adjust this threshold for earlier/later activation
          threshold: 0.2,
          // Add rootMargin for additional padding/offset
          rootMargin: "-20% 0px -60% 0px", // Trigger earlier (top offset)
        }
      );

      observer.observe(ref);
      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Handle sub-item selection
  const handleItemSelect = (sectionIndex: number, itemIndex: number) => {
    setActiveSectionItems((prev) => {
      const newActiveSectionItems = [...prev];
      newActiveSectionItems[sectionIndex] = itemIndex;
      return newActiveSectionItems;
    });
  };

  return (
    <section className="py-24 px-4 flex gap-18 relative" ref={containerRef}>
      <div className="w-4/10 py-40">
        {features.map((section, sectionIndex) => (
          <FeatureSection
            key={section.title}
            section={section}
            sectionIndex={sectionIndex}
            onItemSelect={(itemIndex) =>
              handleItemSelect(sectionIndex, itemIndex)
            }
            isActive={activeIndex === sectionIndex}
            sectionRef={(el: HTMLDivElement | null) => {
              sectionRefs.current[sectionIndex] = el;
            }}
          />
        ))}
      </div>
      {/* sticky features visuals */}
      <div className="self-stretch w-6/10 relative">
        {/* Sticky container with proper height and centering */}
        <div className="sticky top-[16vh] pt-[74vh] flex justify-start items-center flex-col">
          {/* sticky features box */}
          <div className="absolute inset-[0%] h-full">
            {features.map((section, sectionIndex) => (
              <div
                key={section.title}
                className="flex justify-center items-center h-full absolute inset-[0%]"
              >
                <div
                  className={cn(
                    "rounded-4xl border overflow-clip aspect-square transition-opacity",
                    section.mediaContentClassName,
                    activeIndex === sectionIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  {/* Display media for the active item in the active section */}
                  {section.items[activeSectionItems[sectionIndex]]?.media ||
                    section.items[0]?.media}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
