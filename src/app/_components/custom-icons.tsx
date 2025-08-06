import {
  Bolt,
  CloudLightning,
  MailIcon,
  MessageCircleIcon,
  MessageSquare,
  MessagesSquare,
  PhoneIcon,
} from "lucide-react";

export type CustomIconVariant =
  | "message"
  | "phone"
  | "mail"
  | "chat"
  | "thunder"
  | undefined;

export const CustomIcons = ({
  variant,
}: {
  variant: "message" | "phone" | "mail" | "chat" | "thunder" | undefined;
}) => {
  if (!variant) return null;
  const IconViews = {
    message: <MessageCircleIcon />,
    phone: <PhoneIcon />,
    mail: <MailIcon />,
    chat: <MessagesSquare />,
    thunder: <CloudLightning />,
  };

  return IconViews[variant];
};
