import { Typography } from "@alfalab/core-components/typography";
import { smartSt } from "./style.css";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { FC, useCallback, useState } from "react";
import { LS, LSKeys } from "../ls";
import { sendDataToGA } from "../utils/events.ts";

interface ISmartLayoutProps {
  handleShowThx: () => void;
  selectedOption: "AlfaSmart" | "AlfaCheck" | null;
  expanded: boolean;
}

export const SmartLayout: FC<ISmartLayoutProps> = ({
  handleShowThx,
  selectedOption,
  expanded,
}) => {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(() => {
    setLoading(true);
    sendDataToGA({
      sub_choice: selectedOption,
      sub_hidden: expanded ? "Yes" : "No",
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setLoading(false);
      handleShowThx();
    });
  }, []);

  return (
    <div className={smartSt.container}>
      <Typography.TitleResponsive
        className={smartSt.title}
        font="system"
        tag="h1"
        view="small"
        weight="semibold"
      >
        Вы действительно хотите подключить Альфа Смарт?
      </Typography.TitleResponsive>
      <ButtonMobile view="primary" onClick={submit} loading={loading}>
        Да, подключить
      </ButtonMobile>
    </div>
  );
};
