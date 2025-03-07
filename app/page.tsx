import { Button } from "@/components/ui/button";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import Image from "next/image";

import FeatureSection, { TFeatureSection } from "@/components/FeatureSection";
import { Logo } from "@/components/Logo";

const features: TFeatureSection[] = [
  {
    title: "Build Your Financial Foundation",
    description:
      "Essential tools for organizing, managing, and collaborating on your financial activities with transparency and control.",
    items: [
      {
        title: "Dashboard",
        description:
          "A central hub with tools for collaborative financial management in one place.",
        longDescription:
          "Your dashboard brings together all the tools you need to collaboratively manage your finances.",
      },
      {
        title: "Accounts",
        description:
          "Organize funds with real-time balance tracking for reserves, crowdfunding, and expenses.",
        longDescription:
          "It all starts with accounts. Organize your money and control your spending with accounts. Create accounts for holding reserves, for crowdfunding contributions and for spending (or any combination of these functions). Money added to an account will increase its balance and any money spent (or transferred) will decrease its balance. You always know where you stand because the balance is always up-to-date and verifiable.",
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
    items: [
      {
        title: "Record Received Payments",
        description:
          "Record received payments to make funds immediately available for disbursement.",
        longDescription:
          "When money shows up in your bank account or a check is received and processed, add it to an account and it is immediately available for disbursement.",
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
    items: [
      {
        title: "Payment Requests",
        description:
          "Guide users through submitting complete payment requests with customizable instructions.",
        longDescription: `Are you struggling to deal with people asking to get paid but don't understand what is an invoice and how is it different from receipts? 

A step-by-step payment request submission form will walk users through filing correct and complete payment requests. Optionally add your own instructions to guide people on how to properly submit a payment request in order to get paid. `,
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
    items: [
      {
        title: "Hosted Collectives",
        description:
          "Host groups that manage their own funds while you handle the payments.",
        longDescription:
          "Collectives are like mini-organizations within your organization. Each collective can setup their own accounts, crowdfunding campaigns and projects. Contributions from crowdfunding campaigns are automatically attributed to the collective account balances. Collectives always know their current balance and can operate autonomously. They review and approve their own expenses and you handle the payments for them.",
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
    items: [
      {
        title: "Create Custom Contribution Tiers",
        description:
          "Create diverse campaigns with tiers for one-time and recurring contributions.",
        longDescription:
          "Flexible tiers enable you to create a diversity of crowdfunding campaigns. Design tiers that are appropriate for you and your audience. Collect tips, one time and recurring contributions.",
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
    items: [
      {
        title: "Pay External Beneficiaries",
        description:
          "Send money to external beneficiaries who don't use the platform.",
        longDescription:
          "Use the disbursement tools to send money to beneficiaries who do not interact with the platform.",
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
    items: [
      {
        title: "Track Every Transaction",
        description:
          "The immutable transaction log that ensures account balances are accurate and verifiable.",
        longDescription: `At the heart of the platform is a transaction ledger. All financial activities on the platform generate ledger transactions.

Once a transaction has been written to the ledger it cannot be changed. The ledger is the "source of truth" and the reason account balances can be trusted to indicate how much money is actually available to spend in any account at any given time. 

Trace all financial platform activities (payment requests, contributions, grants, etc.) to their related ledger transactions.`,
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

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto flex flex-col">
      {/* Hero Section */}
      <div className="px-4 py-4">
        <Logo />
      </div>
      <section className="w-full pt-48">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-5xl font-bold mb-6 text-left max-w-prose">
            Manage money together, <br />
            without the complexity of <br />{" "}
            <TextLoop
              className=""
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span>incorporation</span>
              <span>accounting</span>
              <span>spreadsheets</span>
              <span>bank accounts</span>
            </TextLoop>
          </h1>
          <div className="text-gray-600 space-y-8 max-w-prose text-lg">
            <p>
              Make your finances visible to your team, your community and the
              world. Discover how financial transparency can transform the way
              you think about and relate to money in your organization, group
              and community.
            </p>
            {/* <p>
              Money is a sensitive and powerful medium. We are practically
              required to have an intimate, and sometimes sensitive,
              relationship with it. Almost all aspects of our shared existence
              are deeply dependent on money. Yet, in our collective constructs,
              money is usually handled in the shadows by a few people who speak
              a language most other people do not understand. The rest of the
              people are forced to interact with a money-medium they don't quite
              understand and over which they have little agency.
            </p>

            <p>
              Open Collective was created to support groups that want to explore
              an alternative approach to money. We set out to explore what would
              happen if finances could be clearly communicated and made openly
              accessible to everyone interested. If you are such a group, we are
              excited to have you with us.
            </p>

            <p>
              Transform your finances from a private and hidden affair visible
              to only a few that understand its convoluted language into an
              open, accessible and collaborative experience in which many can
              participate. Make your finances visible to your team, your
              community and the world. Discover how financial transparency can
              transform the way you think about and relate to money in your
              organization, group and community.
            </p> */}
          </div>
        </div>
      </section>

      {/* Feature Section with Fixed Screenshot */}
      <section className="pb-24 px-4 flex gap-18">
        <div className="flex-1">
          {features.map((section) => (
            <FeatureSection key={section.title} section={section} />
          ))}
        </div>
        {/* sticky features visuals */}
        <div className="max-w-3xl grow-4">
          {/* Sticky container with proper height and centering */}
          <div className="sticky top-0 h-screen flex items-center">
            {/* sticky features box */}
            <div className="border rounded-xl overflow-clip">
              <Image
                src="/screenshot.png"
                width={2529}
                height={1759}
                alt="Screenshot of features"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface IconProps {
  className?: string;
}

// Social Media Icons
function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function GithubIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
