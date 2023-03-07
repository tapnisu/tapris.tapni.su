const Footer = () => (
  <footer className="text-gray-400 bg-gradient-to-b from-transparent to-gray-900 p-8">
    <div className="flex flex-row flex-wrap items-center justify-around">
      <div>
        <h2 className="text-xl">Social media</h2>
        <ul className="p-4 list-disc">
          {[
            {
              name: "Github: tapnisu",
              url: "https://github.com/tapnisu",
            },
            {
              name: "Discord: (tapnisu#7384)",
              url: "https://discord.com/users/586128640136445964",
            },
            {
              name: "Twitter: @tapnisu",
              url: "https://twitter.com/tapnisu",
            },
            {
              name: "Telegram: @tapnisu",
              url: "https://t.me/tapnisu",
            },
          ]?.map((info: { name: string; url: string }) => (
            <li key={info.name}>
              <a
                href={info.url}
                className="hover:text-indigo-400 transition-colors flex flex-row items-center"
              >
                {info.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="p-4">
        © 2023 Alexiy Rybin. All rights reserved.
        <br />
        <a
          href="https://github.com/tapnisu/website"
          className="font-mono italic hover:text-indigo-400 transition-colors"
        >
          Check website{"'"}s source code {"<-"}
        </a>
      </h3>
    </div>
  </footer>
);

export default Footer;
