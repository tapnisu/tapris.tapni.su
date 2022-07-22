import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row flex-wrap justify-between p-8">
        <span className="uppercase">
          <Link href="https://github.com/tapnisu/tapris">Github</Link> / {""}
          <Link href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
            Invite
          </Link>{" "}
          / {""}
          <Link href="https://discord.gg/TwtSs7NY9t">Discord Server</Link>
        </span>
        Copyright © 2022 Alexiy Rybin.
      </footer>
    </>
  );
};

export default Footer;
