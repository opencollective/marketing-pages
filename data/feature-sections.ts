import { FeatureSections } from "@/lib/schemas/feature-section-schema";

// Default feature sections data extracted from the Features.tsx component
export const featureSections: FeatureSections = [
  {
    title: "Financial Platform",
    description:
      "An integrated toolbox for collaboratively and transparently managing your finances.",
    tailwindColor: "blue-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Internal Transfers",
        description:
          "Transfer money easily between accounts. Starting a new project? Transfer an allocated amount into a separate account in order to manage spending. ",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Account Permissions",
        description:
          "Give selected individuals admin access to accounts with transparent balance tracking.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Public Profile",
        description:
          "Increase transparency by making financial activities visible for crowdfunding and payments.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Custom Domains",
        description:
          "Integrate your public profile directly into your website.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Money In",
    description: "Document & track all incoming money.",
    tailwindColor: "green-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Collect Community Contributions",
        description:
          "Track crowdfunding with automatic recording of contributions and fees.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Expected Funds",
        description:
          "Document expected payments until they arrive, without affecting your ledger until received.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Money Out",
    description:
      "A comprehensive suite of tools for submitting, review, correcting, approving and paying out disbursements. A small team of administrators can efficiently support hundreds of projects and thousands of people requesting to get paid.",
    tailwindColor: "red-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Payment Request Invitations",
        description:
          "Pay non-users by inviting them to complete payment requests with their information.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Review & Approve Expenses",
        description:
          "Review submitted payment requests and approve legitimate ones for payment.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Process Payments Efficiently",
        description:
          "Process payments with balance protection, coordination, and tracking for efficient management.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Prevent Fraud & Mistakes",
        description:
          "Protect finances with real-time security checks that flag suspicious payment requests.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Hosting",
    description:
      "Invite other groups to operate under your financial and legal umbrella as Collectives. With a small team using the platform you can efficiently support thousands of groups and projects.",
    tailwindColor: "indigo-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Invite Collectives",
        description:
          "Bring new groups under your organization with invitations to collaborate on finances.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Hosting Applications",
        description:
          "Review applications from groups seeking to be hosted under your organization.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Review & Pay Hosted Collective Expenses",
        description:
          "Process payments with automatic balance checks to ensure funds are available.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Charge Hosting Fees",
        description:
          "Fund operations with automated hosting fees that transparently track fee collection.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Crowdfunding",
    description:
      "Create diverse campaigns with flexible tiers, goals, and transparent spending to build sustainable community funding.",
    tailwindColor: "yellow-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Set Funding Goals & Milestones",
        description:
          "Set one-time or recurring goals to communicate needs and encourage sustainable funding.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Transparent Spending",
        description:
          "Show contributors how their money is used by tracking expenses against crowdfunding.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Funds & Grants",
    description:
      "Manage grants transparently by tracking allocation, restrictions, and spending.",
    tailwindColor: "orange-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Onboard Grant Recipients",
        description:
          "Invite beneficiaries to join as collectives to track how grant money is spent.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Manage Restricted Funds",
        description:
          "Isolate grants with restrictions in dedicated accounts for proper tracking.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
  {
    title: "Accounting & Accountability",
    description:
      "Powerful tools for financial tracking, reporting, and compliance to simplify accounting and tax management.",
    tailwindColor: "teal-600",
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
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Ledger",
        description:
          "Review periodic summaries with the ability to verify every transaction in the ledger.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Ledger Export",
        description:
          "Export financial data in formats your accountants need for bookkeeping and reporting.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Chart of Accounts",
        description:
          "Categorize transactions to simplify exports and reduce accounting costs.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Integrate Banking Data",
        description:
          "Link bank accounts to automatically import transactions for easier reconciliation.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Automate Tax Compliance",
        description:
          "Collect tax forms from payees and download ready-to-submit forms at year-end.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
      {
        title: "Manage Financial Agreements",
        description:
          "Store financial agreements and link them to relevant disbursements.",
        media: {
          src: "/dashboard.png",
          srcWidth: 2529,
          srcHeight: 1759,
          alt: "Dashboard",
          style: {
            borderRadius: "4px",
          },
          containerStyle: {
            padding: "16px",
          },
        },
      },
    ],
  },
];
