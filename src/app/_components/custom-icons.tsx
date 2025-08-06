import {
  CloudLightning,
  MailIcon,
  MessageCircleIcon,
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
  className,
}: {
  variant: "message" | "phone" | "mail" | "chat" | "thunder" | undefined;
  className?: string;
}) => {
  if (!variant) return null;
  const IconViews = {
    message: <MessageCircleIcon className={className} />,
    phone: <PhoneIcon className={className} />,
    mail: <MailIcon className={className} />,
    chat: <MessagesSquare className={className} />,
    thunder: <CloudLightning className={className} />,
  };

  return IconViews[variant];
};
