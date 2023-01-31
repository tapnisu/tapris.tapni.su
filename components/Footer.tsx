const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full ">
        <div className="flex flex-row flex-wrap justify-between p-8">
          <span className="uppercase">
            <a href="https://github.com/tapris-bot/tapris">Github</a> / {""}
            <a href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
              Invite
            </a>{" "}
            / {""}
            <a href="https://discord.gg/TwtSs7NY9t">Discord Server</a>
          </span>
          Copyright © 2023 Alexiy Rybin
        </div>
      </footer>
    </>
  );
};

export default Footer;
