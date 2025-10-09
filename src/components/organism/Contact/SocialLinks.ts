export type SocialAccount = {
  icon: string;
  name: "Email" | "LinkedIn" | "Messenger";
  data: string;
  url: string;
};
const socialAccounts: SocialAccount[] = [
  {
    icon: "uil uil-envelope-add",
    name: "Email",
    data: "ishak.hadj14@gmail.com",
    url: "",
  },
  {
    icon: "uil uil-linkedin",
    name: "LinkedIn",
    data: "H. Ishaq",
    url: "https://www.linkedin.com/in/h-ishaq-hk/",
  },

  {
    icon: "uil uil-facebook-messenger",
    name: "Messenger",
    data: "hk.ishaq",
    url: "https://www.messenger.com/e2ee/t/10027776657286032/",
  },
];
export default socialAccounts;
