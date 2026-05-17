import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",

    activities: [
      {
        name: "𝜗ৎ LOVE MY COMMUNITY .✦ ݁˖",
        type: 2,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      {
        question: "𝜗ৎ What is your name .✦",
        required: true,
      },

      {
        question: "‧₊˚♪ How old are you .𖥔",
        required: true,
      },

      {
        question: "૮₍ ˃ ⤙ ˂ ₎ა Why do you want to join .✦",
        required: true,
      },
    ],

    statusColors: {
      pending: "#42eaff",
      approved: "#74efff",
      denied: "#aff6ff",
    },

    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,

    managerRoles: [],
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#42eaff",
      secondary: "#74efff",

      success: "#7DD3FC",
      error: "#2563EB",
      warning: "#60A5FA",
      info: "#3B82F6",

      light: "#EFF6FF",
      dark: "#0F172A",
      gray: "#93C5FD",

      blurple: "#3B82F6",
      green: "#7DD3FC",
      yellow: "#60A5FA",
      fuchsia: "#38BDF8",
      red: "#2563EB",
      black: "#020617",

      giveaway: {
        active: "#7DD3FC",
        ended: "#2563EB",
      },

      ticket: {
        open: "#7DD3FC",
        claimed: "#38BDF8",
        closed: "#2563EB",
        pending: "#93C5FD",
      },

      economy: "#60A5FA",
      birthday: "#0EA5E9",
      moderation: "#1D4ED8",

      priority: {
        none: "#BFDBFE",
        low: "#7DD3FC",
        medium: "#38BDF8",
        high: "#3B82F6",
        urgent: "#1D4ED8",
      },
    },

    footer: {
      text: "𝜗ৎ Titan Bot .✦",
      icon: null,
    },

    thumbnail: null,

    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      name: "stars",
      namePlural: "stars",
      symbol: "✦",
    },

    startingBalance: 0,
    baseBankCapacity: 100000,

    dailyAmount: 100,

    workMin: 10,
    workMax: 100,

    begMin: 5,
    begMax: 50,

    robSuccessRate: 0.4,

    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  shop: {},

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    defaultCategory: null,

    supportRoles: [],

    priorities: {
      none: {
        emoji: "𖦹",
        color: "#BFDBFE",
        label: "Dreamy",
      },

      low: {
        emoji: ".✦",
        color: "#7DD3FC",
        label: "Soft",
      },

      medium: {
        emoji: "‧₊˚♪",
        color: "#38BDF8",
        label: "Ocean",
      },

      high: {
        emoji: "𝜗ৎ",
        color: "#3B82F6",
        label: "Blue Sky",
      },

      urgent: {
        emoji: "𝄞₊˚⊹",
        color: "#1D4ED8",
        label: "Galaxy",
      },
    },

    defaultPriority: "none",

    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000,

    minimumWinners: 1,
    maximumWinners: 10,

    minimumDuration: 300000,
    maximumDuration: 2592000000,

    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    defaultMessage:
      "𝜗ৎ Click the button below to verify yourself and unlock the server .✦",

    defaultButtonText:
      "‧₊˚♪ Verify Me",

    autoVerify: {
      defaultCriteria: "none",

      defaultAccountAgeDays: 7,

      serverSizeThreshold: 1000,

      minAccountAge: 1,
      maxAccountAge: 365,

      sendDMNotification: true,

      criteria: {
        account_age:
          "Account must be older than specified days",

        server_size:
          "All users if server has less than 1000 members",

        none:
          "All users immediately",
      },
    },

    verificationCooldown: 5000,

    maxVerificationAttempts: 3,

    attemptWindow: 60000,

    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,

    cooldownCleanupInterval: 300000,

    maxAuditMetadataBytes: 4096,

    maxInMemoryAuditEntries: 1000,

    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE
  // =========================
  welcome: {
    defaultWelcomeMessage:
      "𝜗ৎ Welcome {user} to {server} .✦ ݁˖ We now have {memberCount} members .𖥔",

    defaultGoodbyeMessage:
      "૮₍˶Ó﹏Ò ⑅₎ა {user} left the server .𖦹 We now have {memberCount} members .",

    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      name: "{name} Counter",

      description:
        "Server {name} counter",

      type: "voice",

      channelName:
        "{name}-{count}",
    },

    permissions: {
      deny: ["VIEW_CHANNEL"],

      allow: [
        "VIEW_CHANNEL",
        "CONNECT",
        "SPEAK",
      ],
    },

    messages: {
      created:
        "𝜗ৎ Created counter **{name}** .✦ ݁˖",

      deleted:
        "૮₍˶Ó﹏Ò ⑅₎ა Deleted counter **{name}** .𖦹",

      updated:
        "‧₊˚♪ Updated counter **{name}** .✦",
    },

    types: {
      members: {
        name: "𝜗ৎ Members",

        description:
          "Total members in the server .✦",

        getCount: (guild) =>
          guild.memberCount.toString(),
      },

      bots: {
        name: "𝄞₊˚⊹ Bots",

        description:
          "Total bot accounts in the server .𖥔",

        getCount: (guild) =>
          guild.members.cache
            .filter((m) => m.user.bot)
            .size.toString(),
      },

      members_only: {
        name: "‧₊˚♪ Humans",

        description:
          "Total human members .✦",

        getCount: (guild) =>
          guild.members.cache
            .filter((m) => !m.user.bot)
            .size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission:
      "૮₍ ˃ ⤙ ˂ ₎ა You don't have permission to use this command .✦",

    cooldownActive:
      "‧₊˚♪ Please wait {time} before using this command again .𖥔",

    errorOccurred:
      "૮₍˶Ó﹏Ò ⑅₎ა Something went wrong while executing this command .✦",

    missingPermissions:
      "૮₍ ˃ ⤙ ˂ ₎ა I'm missing permissions for this action .𖦹",

    commandDisabled:
      "˙ . ꒷ This command is currently disabled .✦",

    maintenanceMode:
      "𝜗ৎ Titan Bot is currently in maintenance mode .𖥔",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push(
      "Bot token is required (DISCORD_TOKEN or TOKEN environment variable)"
    );
  }

  if (!process.env.CLIENT_ID) {
    errors.push(
      "Client ID is required (CLIENT_ID environment variable)"
    );
  }

  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push(
        "PostgreSQL host is required in production (POSTGRES_HOST environment variable)"
      );
    }

    if (!process.env.POSTGRES_USER) {
      errors.push(
        "PostgreSQL user is required in production (POSTGRES_USER environment variable)"
      );
    }

    if (!process.env.POSTGRES_PASSWORD) {
      errors.push(
        "PostgreSQL password is required in production (POSTGRES_PASSWORD environment variable)"
      );
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);

if (configErrors.length > 0) {
  logger.error(
    "Bot configuration errors:",
    configErrors.join("\n")
  );

  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;

  if (
    typeof path === "string" &&
    path.startsWith("#")
  ) {
    return parseInt(
      path.replace("#", ""),
      16
    );
  }

  const result = path
    .split(".")
    .reduce(
      (obj, key) =>
        (obj && obj[key] !== undefined
          ? obj[key]
          : fallback),
      botConfig.embeds.colors,
    );

  if (
    typeof result === "string" &&
    result.startsWith("#")
  ) {
    return parseInt(
      result.replace("#", ""),
      16
    );
  }

  return result;
}

export function getRandomColor() {
  const colors = Object.values(
    botConfig.embeds.colors
  ).flatMap((color) =>
    typeof color === "string"
      ? color
      : Object.values(color),
  );

  return colors[
    Math.floor(Math.random() * colors.length)
  ];
}

export default botConfig;
