declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: "event", action: string) => void;
  }
}

type Payload = {
  sub_choice: "AlfaSmart" | "AlfaCheck" | null;
  sub_hidden: "Yes" | "No";
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbx5EKHBtfmrQmjwTo_fk7uj4KfK9UTV7oq7gFotdgVUPNjPjCzHcNqPc2NrBDIraqvr/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload, variant: "ghk_3339_3" }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
