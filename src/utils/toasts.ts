import toast from "react-hot-toast";

const TOAST_STYLES = {
  background: "var(--toast-bg)",
  color: "var(--toast-color)",
};

export const copiedToast = () =>
  toast("Copiado com sucesso!", {
    icon: "👌",
    style: TOAST_STYLES,
  });

export const deleteQuestionToast = () =>
  toast("Pergunta excluída!", {
    icon: "🗑️",
    style: TOAST_STYLES,
  });

export const isNotAdminToast = () =>
  toast("Você não possui acesso de administrador para executar essa ação.", {
    icon: "🚫",
    style: TOAST_STYLES,
  });

export const roomNotFoundToast = () =>
  toast("A sala que você digitou não existe.", {
    icon: "😢",
    style: TOAST_STYLES,
  });

export const roomEndedToast = () =>
  toast("A sala informada já foi encerrada.", {
    icon: "😢",
    style: TOAST_STYLES,
  });

export const isNotAuthenticatedToast = () =>
  toast("Você precisa estar autenticado para enviar uma nova pergunta.", {
    icon: "🚫",
    style: TOAST_STYLES,
  });

export const questionSentToast = () =>
  toast("Sua pergunta foi enviada!", {
    icon: "🥳",
    style: TOAST_STYLES,
  });
