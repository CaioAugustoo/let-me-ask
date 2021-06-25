import { copiedToast } from "./toasts";

export function copyToClipboard(value: string): Promise<void> {
  copiedToast();
  return navigator.clipboard.writeText(value);
}
