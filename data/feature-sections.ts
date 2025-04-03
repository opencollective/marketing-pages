import { FeatureSections } from "@/lib/schemas/feature-section-schema";

// Default feature sections data extracted from the Features.tsx component
export const featureSections: FeatureSections = [
  {
    title: "Financial Platform",
    description:
      "An integrated toolbox for collaboratively and transparently managing  your finances.",
    bgColor: "sky-100",
    fgColor: "sky-600",
    items: [
      {
        title: "Everything you need to know & do in one place",
        description:
          "Your dashboard brings together all the tools you need to collaboratively manage your finances and stay on top of financial transactions that require your attention.",
        media: {
          src: "/1.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Organize your money",
        description:
          "Organize your money and control your spending with accounts. Create accounts for holding reserves, for crowdfunding contributions and for spending.",
        media: {
          src: "/2.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Check your balance",
        description:
          "Money added to an account increases its balance and money spent (or transferred) will decrease its balance. You always know where you stand because the balance is always up-to-date and verifiable.",
        media: {
          src: "/3.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Move money between accounts",
        description:
          "Transfer money easily between accounts. Starting a new project? Transfer an allocated amount into a separate account in order to manage spending.",
        media: {
          src: "/4.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Give people control",
        description:
          "Assign administrators to control spending in specific accounts. Add or transfer money into the accounts them and let them manage spending on their own.",
        media: {
          src: "/5.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Tell the world your financial story",
        description:
          "Activate a public profile to make yourself and your financials visible to the world and to invite broader engagement with  crowdfunding campaigns and payment requests.",
        media: {
          src: "/6.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Integrate your story into your website",
        description:
          "Direct public facing profiles to your own domain and rebrand the platform to make it your own.",
        media: {
          src: "/7.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
  {
    title: "Money In",
    description: "Document & track all incoming money.",
    bgColor: "green-100",
    fgColor: "green-600",
    items: [
      {
        title: "Add money to your accounts",
        description:
          "When money shows up in your bank account or a check is received and processed, add it to an account and it is immediately available for disbursement.",
        media: {
          src: "/8.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Accept contributions",
        description:
          "Setup crowdfunding campaigns to engage your community. Completed contributions are automatically recorded in the ledger and added to your account balances.",
        media: {
          src: "/9.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Track promised funds",
        description:
          "Have you been awarded a grant and are now expecting payments to arrive? Document and track expected income until it arrives and is added to your accounts.",
        media: {
          src: "/10.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
  {
    title: "Money Out",
    description:
      "A comprehensive suite of tools for submitting, review, correcting, approving and paying out disbursements. A small team of administrators can efficiently support hundreds of projects and thousands of people requesting to get paid.",
    bgColor: "rose-50",
    fgColor: "rose-600",
    items: [
      {
        title: "Accept requests from people asking to get paid",
        description:
          "A step-by-step payment request submission form will walk users through filing correct and complete payment requests. Include your own unique instructions on how to properly submit a payment request in order to get paid.",
        media: {
          src: "/11.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Invite people to get paid",
        description:
          "Send payment request invitations to people who are not on the platform. They will receive an invitation that will guide them to create a new user, complete and submit the payment request.",
        media: {
          src: "/12.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Approve Payment Requests",
        description:
          "Review payment requests that have been submitted. Approve the legitimate requests you wish to pay. ",
        media: {
          src: "/13.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Pay approved payment requests",
        description:
          "One tool bring together all the information you need to quickly and effectively pay approved payment requests and other disbursements.",
        media: {
          src: "/14.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Spend within your balance",
        description:
          "Automatic balance protection guarantees that you only pay expenses that can be covered by current account balances.",
        media: {
          src: "/15.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Automatically send payments",
        description:
          "Pay automatically using Wise & Paypal integrations or manually mark expenses that have been paid off-platform (for example: from your bank account) as paid.",
        media: {
          src: "/16.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Automated security checks protect against fraud",
        description:
          "Real time security checks are integrated into the payment tool and will alert you if something is suspicious. A green fraud indicator means you can safely make a payment. A red fraud indicator means you should stop and review the request.",
        media: {
          src: "/17.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Quickly resolve issues",
        description:
          "Each expense is an automatic communication channel with all the people involved in its submission, review and payment. All communications are recorded for future reference.",
        media: {
          src: "/18.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Easily work your way through all payment requests",
        description:
          'Mark payment requests as "incomplete" when they are sent back to submitters for correction. Mark them as "on hold" while you are looking into them with your accountant or lawyer.',
        media: {
          src: "/19.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
  {
    title: "Hosting",
    description:
      "Invite other groups to operate under your financial and legal umbrella as Collectives. With a small team using the platform you can efficiently support thousands of groups and projects.",
    bgColor: "yellow-50",
    fgColor: "yellow-600",
    items: [
      {
        title: "Host other groups ",
        description:
          "Collectives are mini-organizations within your organization. Each collective can setup their own accounts, crowdfunding campaigns and projects.",
        media: {
          src: "/20.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Accept applications from groups looking for a host",
        description:
          "Accept applications from groups that are interested in being hosted by you. A conversation thread within each application documents the review and acceptance process until they are either accepted (and become hosted collectives) or rejected.",
        media: {
          src: "/21.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Collectives autonomously manage their finances",
        description:
          "Collectives always have access to up-to-date balances in their accounts and can operate autonomously.",
        media: {
          src: "/22.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Collectives decide which expenses to pay",
        description:
          "Collectives can independently review and approve their own expenses. Approved expenses will await your review and payment.",
        media: {
          src: "/23.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Efficiently process payment requests",
        description:
          "All approved payment requests are checked against collective balances. When the balance is sufficient they show up in your queue of ready-to-pay expenses. ",
        media: {
          src: "/24.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Charge hosting fees",
        description:
          "Automatically charge hosting fees from your hosted collectives Fees are automatically applied and tracked in the ledger and visible to both you and your hosted collectives.",
        media: {
          src: "/25.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
  {
    title: "Crowdfunding",
    description:
      "Create a variety of crowdfunding campaigns: simple tip-jar with one time contributions, one-time goals, monthly recurring goals and even yearly memberships for generating continuous income via crowdfunding.",
    bgColor: "purple-100",
    fgColor: "purple-600",
    items: [
      {
        title: "Different ways to contribute",
        description:
          "FFlexible tiers enable you to create a diversity of crowdfunding campaigns. Design tiers that are appropriate for you and your audience. Collect tips, one time contributions and recurring contributions.",
        media: {
          src: "/26.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Set & commit to funding goals",
        description:
          "Create one time goals for one time projects. Create recurring goals to ask your community for long term support.",
        media: {
          src: "/27.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
  {
    title: "Accounting & Accountability",
    description:
      "Review & verify financial activities and provide your accountants with reliable information for your accounting processes.",
    bgColor: "orange-100",
    fgColor: "orange-600",
    items: [
      {
        title: "All financial activities are recorded",
        description:
          "At the heart of the platform is a transaction ledger. All financial activities on the platform generate ledger transactions.",
        media: {
          src: "/28.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Trace and verify all financial activities",
        description:
          "All financial platform activities (payment requests, contributions, grants, etc.) can be traced to their related ledger transactions and vice versa.",
        media: {
          src: "/29.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Legible financial summaries ",
        description:
          "A periodic (monthly, quarterly, yearly) transaction statement provides you an overview of ledger activity. Drill down into every number in the statement to review and verify the underlying ledger transactions.",
        media: {
          src: "/30.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Export ledger data for your accountants",
        description:
          "Provide your accountants with periodic exports of detailed ledger transactions.",
        media: {
          src: "/31.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Categorize financial activities for accounting",
        description:
          "Setup your chart of accounts and categorize your disbursements and added funds. Include this in your exports and reduce the time, effort and accounting costs.",
        media: {
          src: "/32.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Connect your bank accounts",
        description:
          "Connect your platform account to your preferred banking services and reconcile off-platform transactions with on-platform financial activities.",
        media: {
          src: "/33.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Collect tax forms",
        description:
          "Automatically collect USA tax forms from people who get paid through the platform. At the end of the fiscal year  download all the relevant tax-forms, ready to submit to the authorities.",
        media: {
          src: "/34.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
      {
        title: "Document financial agreements",
        description:
          "Upload and track financial agreements. Link agreements to hosted collectives and reference them when paying disbursements.",
        media: {
          src: "/35.png",
          srcWidth: 1400,
          srcHeight: 1400,
        },
      },
    ],
  },
];
