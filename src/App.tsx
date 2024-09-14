import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Typography } from "@alfalab/core-components/typography";
import { useCallback, useState } from "react";

import alfa from "./assets/alfa-card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Radio } from "@alfalab/core-components/radio";
import { Collapse } from "@alfalab/core-components/collapse";
import { List } from "@alfalab/core-components/list";
import { Gap } from "@alfalab/core-components/gap";
import { SmartLayout } from "./smart/SmartLayout.tsx";

enum Product {
  Check = "alfa-check",
  Smart = "alfa-smart",
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedOption, setSelectedOption] = useState<Product>(Product.Check);
  const [showSmart, setShowSmart] = useState(false);

  const submit = useCallback(() => {
    setLoading(true);
    // sendDataToGA({})
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, []);

  const handleSelection = useCallback(() => {
    if (selectedOption === Product.Smart) {
      setShowSmart(true);
    }

    if (selectedOption === Product.Check) {
      submit();
    }
  }, [selectedOption]);

  const handleShowThx = useCallback(() => {
    setThx(true);
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  if (showSmart) {
    return <SmartLayout handleShowThx={handleShowThx} />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div  style={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
          <img
            alt="Картинка карты"
            src={alfa}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <Typography.Text
            style={{ maxWidth: "230px", marginLeft: "18px" }}
            view="primary-medium"
          >
            Альфа-карта
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: "1.5rem" }}
          tag="h3"
          view="xsmall"
          font="system"
          weight="semibold"
        >
          Способ уведомлений
        </Typography.TitleResponsive>

        <Radio
          className={appSt.radioCheck}
          size={24}
          onChange={() => setSelectedOption(Product.Check)}
          checked={selectedOption === Product.Check}
          label="Альфа чек — 99 руб. в месяц"
          disabled={false}
          hint="Присылаем пуш-уведомления, если не доходят — отправляем смс"
          block={true}
        />
        <Gap size={4} />
        <Radio
          className={appSt.radioSmart}
          size={24}
          onChange={() => setSelectedOption(Product.Smart)}
          checked={selectedOption === Product.Smart}
          label="Альфа Смарт — 299 руб. в месяц"
          disabled={false}
          hint="Дополнительные возможности, вместе с пуш-уведомлениями"
          block={true}
        />
        <Collapse
          collapsedLabel="Что входит"
          expandedLabel="Скрыть"
          className={appSt.collapse}
        >
          <List tag="ul" marker="•">
            <List.Item>+1 топовая категория кэшбэка</List.Item>
            <List.Item>+1 попытка крутить барабан суперкэшбэка</List.Item>
            <List.Item>Секретная подборка партнёров с кэшбэков</List.Item>
            <List.Item>Увеличенный лимит кэшбэка +1 % годовых</List.Item>
            <List.Item>Бесплатные уведомления</List.Item>
            <List.Item>Бесплатные переводы</List.Item>
            <List.Item>Бесплатное снятие наличных</List.Item>
            <List.Item>Скидка 20 % на комиссию на бирже</List.Item>
          </List>
        </Collapse>
      </div>

      <Gap size="7xl" />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={handleSelection}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
