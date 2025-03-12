"use client";
import React, { useState, useEffect, useRef } from "react";
import FeatureSection, { TFeatureSection } from "./FeatureSection";
import Image from "next/image";
import { cn } from "@/lib/utils";

const featureSections: TFeatureSection[] = [
  {
    title: "Financial Platform",
    description:
      "An integrated toolbox for collaboratively and transparently managing  your finances.",
    colorVariable: "--color-blue-600",
    items: [
      {
        title: "Dashboard",
        description:
          "Your dashboard brings together all the tools you need to collaboratively manage your finances and stay on top of financial transactions that require your attention.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Accounts",
        description:
          "Organize your money and control your spending with accounts. Create accounts for holding reserves, for crowdfunding contributions and for spending.",
        media: {
          src: "/accounts.png",
          srcWidth: 2248,
          srcHeight: 2178,
          alt: "Accounts Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Real Time Balance",
        description:
          "Money added to an account increases its balance and money spent (or transferred) will decrease its balance. You always know where you stand because the balance is always up-to-date and verifiable.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Internal Transfers",
        description:
          "Transfer money easily between accounts. Starting a new project? Transfer an allocated amount into a separate account in order to manage spending. ",
      },
      {
        title: "Account Permissions",
        description:
          "Give selected individuals admin access to accounts with transparent balance tracking.",
      },
      {
        title: "Public Profile",
        description:
          "Increase transparency by making financial activities visible for crowdfunding and payments.",
      },
      {
        title: "Custom Domains",
        description:
          "Integrate your public profile directly into your website.",
      },
    ],
  },
  {
    title: "Track & Manage Incoming Money",
    description: "Document & track all incoming money.",
    colorVariable: "--color-green-600",
    items: [
      {
        title: "Record Received Payments",
        description:
          "Record received payments to make funds immediately available for disbursement.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Collect Community Contributions",
        description:
          "Track crowdfunding with automatic recording of contributions and fees.",
      },
      {
        title: "Expected Funds",
        description:
          "Document expected payments until they arrive, without affecting your ledger until received.",
      },
    ],
  },
  {
    title: "Money Out",
    description:
      "A comprehensive suite of tools for submitting, review, correcting, approving and paying out disbursements. A small team of administrators can efficiently support hundreds of projects and thousands of people requesting to get paid.",
    colorVariable: "--color-red-600",
    items: [
      {
        title: "Payment Requests",
        description:
          "Guide users through submitting complete payment requests with customizable instructions.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Payment Request Invitations",
        description:
          "Pay non-users by inviting them to complete payment requests with their information.",
      },
      {
        title: "Review & Approve Expenses",
        description:
          "Review submitted payment requests and approve legitimate ones for payment.",
      },
      {
        title: "Process Payments Efficiently",
        description:
          "Process payments with balance protection, coordination, and tracking for efficient management.",
      },
      {
        title: "Prevent Fraud & Mistakes",
        description:
          "Protect finances with real-time security checks that flag suspicious payment requests.",
      },
    ],
  },
  {
    title: "Hosting",
    description:
      "Invite other groups to operate under your financial and legal umbrella as Collectives. With a small team using the platform you can efficiently support thousands of groups and projects.",
    colorVariable: "--color-indigo-600",
    items: [
      {
        title: "Hosted Collectives",
        description:
          "Host groups that manage their own funds while you handle the payments.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Invite Collectives",
        description:
          "Bring new groups under your organization with invitations to collaborate on finances.",
      },
      {
        title: "Hosting Applications",
        description:
          "Review applications from groups seeking to be hosted under your organization.",
      },
      {
        title: "Review & Pay Hosted Collective Expenses",
        description:
          "Process payments with automatic balance checks to ensure funds are available.",
      },
      {
        title: "Charge Hosting Fees",
        description:
          "Fund operations with automated hosting fees that transparently track fee collection.",
      },
    ],
  },
  {
    title: "Crowdfunding",
    //  title: "Launch Successful Crowdfunding",
    description:
      "Create diverse campaigns with flexible tiers, goals, and transparent spending to build sustainable community funding.",
    colorVariable: "--color-yellow-600",
    items: [
      {
        title: "Create Custom Contribution Tiers",
        description:
          "Create diverse campaigns with tiers for one-time and recurring contributions.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Set Funding Goals & Milestones",
        description:
          "Set one-time or recurring goals to communicate needs and encourage sustainable funding.",
      },
      {
        title: "Transparent Spending",
        description:
          "Show contributors how their money is used by tracking expenses against crowdfunding.",
      },
    ],
  },
  {
    title: "Funds & Grants",
    description:
      "Manage grants transparently by tracking allocation, restrictions, and spending.",
    colorVariable: "--color-orange-600",
    items: [
      {
        title: "Pay External Beneficiaries",
        description:
          "Send money to external beneficiaries who don't use the platform.",

        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Onboard Grant Recipients",
        description:
          "Invite beneficiaries to join as collectives to track how grant money is spent.",
      },
      {
        title: "Manage Restricted Funds",
        description:
          "Isolate grants with restrictions in dedicated accounts for proper tracking.",
      },
    ],
  },
  {
    title: "Accounting & Accountability",
    description:
      "Powerful tools for financial tracking, reporting, and compliance to simplify accounting and tax management.",
    colorVariable: "--color-teal-600",
    items: [
      {
        title: "Track Every Transaction",
        description:
          "The immutable transaction log that ensures account balances are accurate and verifiable.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          containerClasses: "p-4",
          mediaClasses: "rounded-md w-full",
        },
      },
      {
        title: "Ledger",
        description:
          "Review periodic summaries with the ability to verify every transaction in the ledger.",
      },
      {
        title: "Ledger Export",
        description:
          "Export financial data in formats your accountants need for bookkeeping and reporting.",
      },
      {
        title: "Chart of Accounts",
        description:
          "Categorize transactions to simplify exports and reduce accounting costs.",
      },
      {
        title: "Integrate Banking Data",
        description:
          "Link bank accounts to automatically import transactions for easier reconciliation.",
      },
      {
        title: "Automate Tax Compliance",
        description:
          "Collect tax forms from payees and download ready-to-submit forms at year-end.",
      },
      {
        title: "Manage Financial Agreements",
        description:
          "Store financial agreements and link them to relevant disbursements.",
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
    featureSections.map(() => 0) // Initialize with index 0 for each section
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
        {featureSections.map((section, sectionIndex) => (
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
            {featureSections.map((section, sectionIndex) => (
              <React.Fragment key={section.title}>
                {section.items.map((item, itemIndex) => {
                  const img = item.media || section.items[0].media;
                  const isActive =
                    activeIndex === sectionIndex &&
                    activeSectionItems[sectionIndex] === itemIndex;
                  const sectionStyle = section.colorVariable
                    ? ({
                        "--primary": section.colorVariable.startsWith("--")
                          ? `var(${section.colorVariable})`
                          : section.colorVariable,
                      } as React.CSSProperties)
                    : undefined;
                  return (
                    <div
                      key={item.title}
                      className="flex justify-center items-center h-full absolute inset-[0%]"
                      style={sectionStyle}
                    >
                      <div
                        className={cn(
                          "rounded-4xl border overflow-clip aspect-square transition-opacity",
                          "bg-gradient-to-b from-primary/80 to-primary/100",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {img && (
                          <div
                            className={cn(
                              "w-full h-full flex items-center justify-center",
                              img?.containerClasses
                            )}
                          >
                            <Image
                              src={img.src}
                              width={img.srcWidth}
                              height={img.srcHeight}
                              alt={img.alt ?? item.title}
                              className={img.mediaClasses}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
