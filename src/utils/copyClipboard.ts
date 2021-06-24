import toast from "react-hot-toast";

export function copyToClipboard(value: string): Promise<void> {
  toast("The code has been copied.", {
    icon: "👌",
  });
  return navigator.clipboard.writeText(value);
}
