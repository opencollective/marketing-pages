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
          "Assign administrators to control spending in specific accounts. Add or transfer money into the accounts them and let them manage spending on their own.",
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
          "Activate a public profile to make yourself and your financials visible to the world and to invite broader engagement with  crowdfunding campaigns and payment requests.",
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
          "Direct public facing profiles to your own domain and rebrand the platform to make it your own.",
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
        title: "Add Funds",
        description:
          "When money shows up in your bank account or a check is received and processed, add it to an account and it is immediately available for disbursement.",
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
        title: "Contributions",
        description:
          "Setup crowdfunding campaigns to engage your community. Completed contributions are automatically recorded in the ledger and added to your account balances.",
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
          "Have you been awarded a grant and are now expecting payments to arrive? Document and track expected income until it arrives and is added to your accounts.",
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
          "A step-by-step payment request submission form will walk users through filing correct and complete payment requests. Include your own unique instructions on how to properly submit a payment request in order to get paid.",
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
        title: "Invitations",
        description:
          "Send payment request invitations to people who are not on the platform. They will receive an invitation that will guide them to create a new user, complete and submit the payment request.",
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
        title: "Approve Payment Requests",
        description:
          "Review payment requests that have been submitted. Approve the legitimate requests you wish to pay.",
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
        title: "Pay Disbursements",
        description:
          "One tool bring together all the information you need to quickly and effectively pay approved payment requests and other disbursements.",
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
        title: "Automatic Balance Protection",
        description:
          "Automatic balance protection guarantees that you only pay expenses that can be covered by current account balances.",
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
        title: "Integrated Payment",
        description:
          "Pay automatically using Wise & Paypal integrations or manually mark expenses that have been paid off-platform (for example: from your bank account) as paid.",
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
        title: "Antifraud Security Checks",
        description:
          "Real time security checks are integrated into the payment tool and will alert you if something is suspicious. A green fraud indicator means you can safely make a payment. A red fraud indicator means you should stop and review the request.",
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
        title: "Communicate",
        description:
          "Each expense is an automatic communication channel with all the people involved in its submission, review and payment. All communications are recorded for future reference. ",
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
        title: "Organize",
        description:
          "Mark payment requests as “incomplete” when they are sent back to submitters for correction. Mark them as “on hold” while you are looking into them with your accountant or lawyer.",
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
          "Collectives are mini-organizations within your organization. Each collective can setup their own accounts, crowdfunding campaigns and projects.",
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
          "Invite new groups to become hosted collectives within your organization. Create a new collective and invitations will be sent out to the team inviting them to join the platform and collaborate on their finances.",
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
        title: "Applications",
        description:
          "Accept applications from groups that are interested in being hosted by you. A conversation thread within each application documents the review and acceptance process until they are either accepted (and become hosted collectives) or rejected.",
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
        title: "Real-time Balance",
        description:
          "Collectives always have access to up-to-date balances in their accounts and can operate autonomously. ",
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
        title: "Approve Expenses",
        description:
          "Collectives can independently review and approve their own expenses. Approved expenses will await your review and payment.",
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
          "Payment requests approved by collectives are automatically checked against their balances. If the collective balance is not sufficient to pay the request you will not see it. It will be held until the collective balance is able to cover it.",
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
          "Automatically charge hosting fees from your hosted collectives Fees are automatically applied and tracked in the ledger and visible to both you and your hosted collectives.",
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
      "Create a variety of crowdfunding campaigns: simple tip-jar with one time contributions, one-time goals, monthly recurring goals and even yearly memberships for generating continuous income via crowdfunding.",
    tailwindColor: "yellow-600",
    items: [
      {
        title: "Flexible Tiers",
        description:
          "Flexible tiers enable you to create a diversity of crowdfunding campaigns. Design tiers that are appropriate for you and your audience. Collect tips, one time and recurring contributions.",
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
        title: "Goals",
        description:
          "Create one time goals for one time projects. Create recurring goals to ask your community for long term support.",
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
        title: "Spend Responsibly",
        description:
          "Use crowdfunding accounts for paying payment requests to demonstrate to your community that the money raised was spent in alignment with the purpose and goals of the crowdfunding campaign.",
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
      "Manage funds openly by showing where money came from, to whom it was granted and how it was spent.",
    tailwindColor: "orange-600",
    items: [
      {
        title: "On-platform Beneficiaries",
        description:
          "Invite beneficiaries to join the platform and transparently manage their grants as collectives. You and your funders can together observe how the grant money is actually spent.",
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
        title: "Off-platform Beneficiaries",
        description:
          "Use the disbursement tools to send money to beneficiaries who do not interact with the platform.",
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
        title: "Restricted Accounts",
        description:
          "Place grants that are given with agreed restrictions (for example, about purpose and desired outcomes into restricted accounts. This will keep the grants isolated from other funding sources making it possible to track how they are spent.",
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
      "Review & verify financial activities and provide your accountants with reliable information for your accounting processes.",
    tailwindColor: "teal-600",
    items: [
      {
        title: "Ledger",
        description:
          "At the heart of the platform is a transaction ledger. All financial activities on the platform generate ledger transactions.",
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
        title: "Immutability",
        description:
          "Once a transaction has been written to the ledger it cannot be changed. The ledger is the “source of truth” and the reason account balances can be trusted to indicate how much money is actually available to spend in any account at any given time. ",
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
        title: "Traceability",
        description:
          "All financial platform activities (payment requests, contributions, grants, etc.) can be traced to their related ledger transactions and vice versa.",
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
        title: "Transaction Statement",
        description:
          "A periodic (monthly, quarterly, yearly) transaction statement provides you an overview of ledger activity. Drill down into every number in the statement to review and verify the underlying ledger transactions.",
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
        title: "Ledger export",
        description:
          "The ledger accumulates a lot of detailed information. Your accountants will need this information in order to do your accounting. An elaborate export tool will let you setup and reliably export periodically the information your accountants need.",
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
          "Setup your chart of accounts and categorize your disbursements and added funds. Include this in your exports and reduce the time, effort and accounting costs. ",
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
        title: "Connected Accounts",
        description:
          "The platform is not bound to specific banks or financial services. Instead, connect your platform account to your banking services and reconcile off-platform transactions with on-platform financial activities. ",
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
        title: "Tax Forms",
        description:
          "Automatically collect USA tax forms from people who get paid through the platform. At the end of the fiscal year you can download all the relevant tax-forms, ready to submit to the authorities.",
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
        title: "Agreements",
        description:
          "Upload and track financial agreements. Link agreements to hosted collectives and reference them when paying disbursements.",
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
