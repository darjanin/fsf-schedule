const q = (el, selector) => el.querySelector(selector);
const qT = (el, selector) =>
  q(el, selector) ? q(el, selector).innerText : null;

const parseScheduleDay = () =>
  JSON.stringify(
    Array.from(document.querySelectorAll(".slot")).map(slot => ({
      time: qT(slot, ".slot-time"),
      title: qT(slot, ".slot__title"),
      href: q(slot, ".slot__title a")
        ? q(slot, ".slot__title a").getAttribute("href")
        : null,
      speaker: qT(slot, ".talk-title-by a"),
      description: qT(slot, ".talk-description")
    }))
  );

const schedule = {
  "04": [
    {
      time: "8:00 — 9:15",
      title: "🎟 Registration & ☕️ coffee",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:30 — 9:45",
      title: "Welcome!",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:45 — 10:25",
      title: "We're gunna program like it's 1999",
      href: "/speakers/lee-byron",
      speaker: "Lee Byron",
      description:
        "The mental model for building for the web largely hasn’t changed in the last 20 years, but we’ve incorporated complexity, richness, grown our community a thousand fold, and scaled to billions. This year the web turns 30, and we look back at the steady march forward of better abstractions, better syntax, and better mental models that brought us here."
    },
    {
      time: "10:25 — 11:10",
      title: "Talk TBA. Topic: Building tools for web developers",
      href: "/speakers/ashley-williams",
      speaker: "Ashley Williams",
      description: ""
    },
    {
      time: "11:10 — 11:40",
      title: "🍌 Break",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "11:40 — 12:20",
      title: "Spreading the JAM throughout your CI workflow",
      href: "/speakers/brian-douglas",
      speaker: "Brian Douglas",
      description:
        "The JAMStack is empowering the Microservice and distributed architectures in ways that we had not previously conceived. Join Brian in walking through how you can leverage this new tool in creating action packed workflows to supercharge your repos on GitHub by building your containers to run arbitrary code, publish packages to registries, and even automate welcoming new users to your projects."
    },
    {
      time: "12:20 — 13:00",
      title: "How to build a social network entirely on serverless",
      href: "/speakers/yan-cui",
      speaker: "Yan Cui",
      description:
        "In this talk, Yan will discuss the strategies he employed in migrating a social network, Yubl, from a monolith to serverless: How to identify service boundaries, and migrate features off the monolith without downtime, implementing search, user recommendation, news feeds, push notifications, business intelligence and so on."
    },
    {
      time: "13:00 — 14:30",
      title: "🌮 Lunch",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "14:30 — 15:10",
      title: "A programming language for a continuous delivery world.",
      href: "/speakers/ellen-chisa",
      speaker: "Ellen Chisa",
      description:
        "What would it look like to build a modern language so we could still code live, but do it safely?"
    },
    {
      time: "15:10 — 15:50",
      title:
        "Applied Accessibility: Practical Tips for Building More Accessible Front-Ends",
      href: "/speakers/sara-soueidan",
      speaker: "Sara Soueidan",
      description: ""
    },
    {
      time: "15:50 — 16:00",
      title: "First day closing",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "17:00 — 20:00",
      title: "👥 Get Together",
      href: null,
      speaker: null,
      description: null
    }
  ],
  "05": [
    {
      time: "9:00 — 9:25",
      title: "☕️ Coffee",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:30 — 9:45",
      title: "Welcome!",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:45 — 10:25",
      title: "CSS Houdini Today",
      href: "/speakers/una-kravets",
      speaker: "Una Kravets",
      description: ""
    },
    {
      time: "10:25 — 11:10",
      title: "Your Tests Lack Vision: Adding Eyes to Your Automation Framework",
      href: "/speakers/angie-jones",
      speaker: "Angie Jones",
      description:
        "In this talk, you'll learn how visual validation works, see a live integration into an existing test code base, and discuss the pros and cons of using various visual validation techniques."
    },
    {
      time: "11:10 — 11:40",
      title: "🍇 Break",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "11:40 — 12:20",
      title: "Why p2p deserves another chance",
      href: "/speakers/paul-frazee",
      speaker: "Paul Frazee",
      description:
        "May of us remember peer-to-peer networking from the days of Napster, file-sharing, and Metallica lawsuits. Was that all that p2p was good for? What if we used it to host Websites instead? In this talk, we'll look at how p2p can be applied to the Web and what benefits we can gain from it: from sharing costs, to data privacy, to open source, and beyond."
    },
    {
      time: "12:20 — 13:00",
      title: "Bringing WebAssembly outside the web with WASI",
      href: "/speakers/lin-clark",
      speaker: "Lin Clark",
      description:
        "The appearance of WASI has taken the web by storm. As Solomon Hykes, co-founder of Docker, said, \"If WASM+WASI existed in 2008, we wouldn't have needed to create Docker. That's how important it is. Webassembly on the server is the future of computing.\""
    },
    {
      time: "13:00 — 14:30",
      title: "🌮 Lunch",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "14:30 — 15:10",
      title:
        "(Programming Languages) in Agda = Programming (Languages in Agda)",
      href: "/speakers/philip-wadler",
      speaker: "Philip Wadler",
      description:
        "Join Philip in his introduction of the Agda Programming language, while he explains the most profound connection between logic and computation, which is purely a pun."
    },
    {
      time: "15:10 — 15:50",
      title: "The Future of Web Animation",
      href: "/speakers/sarah-drasner",
      speaker: "Sarah Drasner",
      description:
        "We talk a lot about how to animate on the web, and what’s possible in browsers today, but where is animation heading? In this talk, we'll find the intersection of health and animation with biofeedback sensors and Vue, the future of 3d in the browser complete with interviews with people who are writing these specs."
    },
    {
      time: "15:50 — 16:00",
      title: "Second day closing",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "18:00 — 22:00",
      title: "🏖 Beach Party 🎉",
      href: null,
      speaker: null,
      description: null
    }
  ],
  "06": [
    {
      time: "9:00 — 9:25",
      title: "☕️ Coffee",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:30 — 9:45",
      title: "Welcome!",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "9:45 — 10:25",
      title: "It’s Probably Fine",
      href: "/speakers/cate-huston",
      speaker: "Cate Huston",
      description:
        "What's the difference between a functional team and a failing team? How do we make a failing team functional, and a functional team great? Let's talk about layers of communication, why outcomes are more important than process, and how to figure out where to begin - and whether you should."
    },
    {
      time: "10:25 — 11:10",
      title:
        "Breaking [not so] Bad: What's new in webpack 5 and how you can prepare!!",
      href: "/speakers/sean-larkin",
      speaker: "Sean Larkin",
      description:
        "Sean will talk about what amazing features are in store for webpack 5, the rational behind its breaking changes, and how you can prepare for upgrading from 4 to 5."
    },
    {
      time: "11:10 — 11:40",
      title: "🥝 Break",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "11:40 — 12:20",
      title: "HTTP/3 - HTTP over QUIC is the next generation",
      href: "/speakers/daniel-stenberg",
      speaker: "Daniel Stenberg",
      description:
        "HTTP/3 is the designated name for the coming next version of the protocol that is currently under development within the QUIC working group in the IETF. Learn how HTTP/3 improve upon HTTP/2 and how that's relevant today."
    },
    {
      time: "12:20 — 13:00",
      title: "Rust, WebAssembly, and the future of Serverless",
      href: "/speakers/steve-klabnik",
      speaker: "Steve Klabnik",
      description:
        "A lot of things have been said about WebAssembly inside of the browser; after all, that's why it was originally created. But a new case is emerging as well, and that's WebAssembly on the server. More specifically, we're seeing a rise of support for WebAssembly in serverless application platforms, combining two brand-new technologies together. We're also seeing a lot of growth of the Rust programming language, and its close alignment with WebAssembly. In this talk, Steve will talk about Rust, WebAssembly, serverless technologies, and how it all fits together."
    },
    {
      time: "13:00 — 14:30",
      title: "🌮 Lunch",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "14:30 — 15:10",
      title: "⚡️ Lightning Talks",
      href: null,
      speaker: null,
      description: null
    },
    {
      time: "15:10 — 15:50",
      title: "Closing talk",
      href: "/speakers/sara-vieira",
      speaker: "Sara Vieira",
      description: ""
    },
    {
      time: "16:00 — 17:30",
      title: "👋 Farewell with friends",
      href: null,
      speaker: null,
      description: null
    }
  ]
};

const ical = require("ical-generator");
const dayjs = require("dayjs");

const URL = "https://2019.fullstackfest.com";
const cal = ical({
  name: "FullStack"
});

const generateEvent = (day = "04", start, end, title, description, url) => ({
  start: dayjs(`2019-09-${day}T${start}`).format(),
  end: dayjs(`2019-09-${day}T${end}`).format(),
  summary: title || "",
  description: description || "",
  url: url || ""
});

const events = ["04", "05", "06"].reduce(
  (acc, day) => [
    ...acc,
    ...schedule[day].map(slot =>
      generateEvent(
        day,
        slot.time.split(" — ")[0],
        slot.time.split(" — ")[1],
        slot.speaker ? `${slot.title} by ${slot.speaker}` : slot.title,
        slot.description,
        slot.href ? URL + slot.href : ""
      )
    )
  ],
  []
);

console.info(`🗓  Generated ${events.length} events.`);
cal.events(events);

const FILE_NAME = "schedule.ics";
cal.save(FILE_NAME, () => {
  console.info(`💾  Saved to ${FILE_NAME}.`);
});
