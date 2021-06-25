import toast from "react-hot-toast";

export function copyToClipboard(value: string): Promise<void> {
  toast("Copiado com sucesso!", {
    icon: "👌",
  });
  return navigator.clipboard.writeText(value);
}
