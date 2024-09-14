import { Typography } from "@alfalab/core-components/typography";
import { smartSt } from "./style.css";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { FC, useCallback, useState } from "react";
import { LS, LSKeys } from "../ls";

interface ISmartLayoutProps {
  handleShowThx: () => void;
}

export const SmartLayout: FC<ISmartLayoutProps> = ({ handleShowThx }) => {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(() => {
    setLoading(true);
    // sendDataToGA({})
    Promise.resolve().then(() => {
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
