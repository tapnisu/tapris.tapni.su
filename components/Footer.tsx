const Footer = () => (
  <footer className="text-gray-400 bg-gradient-to-b from-transparent to-gray-900 p-8">
    <div className="mx-auto w-24 h-1 my-12 bg-white rounded-full"></div>

    <div className="flex flex-row flex-wrap items-center justify-around">
      <div>
        <h2 className="text-xl">Links</h2>
        <ul className="p-4 list-disc">
          {[
            {
              name: "Invite",
              url:
                "https://discord.com/api/oauth2/authorize?client_id=869088074758520832&permissions=1393753648390&scope=bot%20applications.commands",
            },
            {
              name: "Github",
              url: "https://github.com/tapris-bot/tapris",
            },
            {
              name: "Core developer",
              url: "https://tapni.su",
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
        © 2023 Tapris Bot. All rights reserved.
        <br />
        <a
          href="https://github.com/tapris-bot/website"
          className="font-mono italic hover:text-indigo-400 transition-colors"
        >
          Check website{"'"}s source code {"<-"}
        </a>
      </h3>
    </div>
  </footer>
);

export default Footer;
