import { forwardRef, useState, useEffect } from "react";
import innerText from "react-innertext";
import copy from "copy-to-clipboard";
import { ClipboardOcticon, CheckOcticon } from "../Icons";
import { styled, theme } from "../../lib/styles/stitches.config";
import type { ReactNode, Ref, ComponentPropsWithoutRef, MouseEventHandler } from "react";

const Button = styled("button", {
  lineHeight: 1,
  cursor: "pointer",

  variants: {
    copied: {
      true: {
        color: theme.colors.success,
      },
      false: {
        color: theme.colors.mediumDark,

        "&:hover, &:focus-visible": {
          color: theme.colors.link,
        },
      },
    },
  },
});

const Icon = styled("svg", {
  width: "1.25em",
  height: "1.25em",
  verticalAlign: "-0.3em",
  fill: "currentColor",
});

export type CopyButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  source: string | ReactNode;
  timeout?: number;
};

const CopyButton = ({ source, timeout = 2000, ...rest }: CopyButtonProps, ref: Ref<HTMLButtonElement>) => {
  const [copied, setCopied] = useState(false);

  const handleCopy: MouseEventHandler<HTMLButtonElement> = (e) => {
    // prevent unintentional double-clicks by unfocusing button
    e.currentTarget.blur();

    // send plaintext to the clipboard
    const didCopy = copy(innerText(source));

    // indicate success
    setCopied(didCopy);
  };

  useEffect(() => {
    if (!copied) {
      return;
    }

    // reset to original icon after given ms (defaults to 2 seconds)
    const reset = setTimeout(() => {
      setCopied(false);
    }, timeout);

    // cancel timeout to avoid memory leaks if unmounted in the middle of this
    return () => {
      clearTimeout(reset);
    };
  }, [timeout, copied]);

  return (
    <Button
      ref={ref}
      title="Copy to clipboard"
      aria-label="Copy to clipboard"
      onClick={handleCopy}
      disabled={copied}
      copied={copied}
      {...rest}
    >
      <Icon as={copied ? CheckOcticon : ClipboardOcticon} />
    </Button>
  );
};

export default forwardRef(CopyButton);
