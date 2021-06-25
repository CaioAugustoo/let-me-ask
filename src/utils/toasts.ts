import toast from "react-hot-toast";

export const copiedToast = () =>
  toast("Copiado com sucesso!", {
    icon: "👌",
  });

export const deleteQuestionToast = () =>
  toast("Pergunta excluída!", {
    icon: "🗑️",
  });

export const isNotAdminToast = () =>
  toast("Você não possui acesso de administrador para executar essa ação.", {
    icon: "🚫",
  });

export const roomNotFoundToast = () =>
  toast("A sala que você digitou não existe.", {
    icon: "😢",
  });

export const roomEndedToast = () =>
  toast("A sala informada já foi encerrada.", {
    icon: "😢",
  });

export const isNotAuthenticatedToast = () =>
  toast("Você precisa estar autenticado para enviar uma nova pergunta.", {
    icon: "🚫",
  });

export const questionSentToast = () =>
  toast("Sua pergunta foi enviada!", {
    icon: "🥳",
  });
