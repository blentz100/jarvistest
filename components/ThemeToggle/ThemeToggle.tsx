import { useEffect, useState, memo } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

import styles from "./ThemeToggle.module.css";

type Props = {
  className?: string;
};

// modified from Twemoji lightbulb:
const BulbIcon = ({ on = false, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className={className}>
    <g fill="none">
      <path
        d="m30 11.376c0 6.6229714-5.2272727 7.6515429-5.2272727 13.824 0 3.1865143-3.2649546 3.4549714-5.75 3.4549714-2.1463182 0-6.8853637-.8012571-6.8853637-3.4570285 0-6.1693715-5.1373636-7.1979429-5.1373636-13.8219429 0-6.20331429 5.5252273-11.232 11.5867727-11.232 6.0636364 0 11.4132273 5.02868571 11.4132273 11.232z"
        fill={on ? "#ffd983" : "#cccbcb"}
      />
      <path
        d="m22.8564091 33.4285714c0 .8516572-2.3355455 2.5714286-4.3564091 2.5714286s-4.3564091-1.7197714-4.3564091-2.5714286c0-.8516571 2.3345-.5142857 4.3564091-.5142857 2.0208636 0 4.3564091-.3373714 4.3564091.5142857z"
        fill={on ? "#b9c9d9" : "#ccd6dd"}
      />
      <path
        d="m23.4209545 10.5870857c-.4087727-.4021714-1.0695-.4021714-1.4782727 0l-3.4426818 3.3870857-3.4426818-3.3870857c-.4087727-.4021714-1.0695-.4021714-1.4782727 0-.4087728.4021714-.4087728 1.0522286 0 1.4544l3.8755 3.8129143v10.8884571c0 .5688.4683636 1.0285715 1.0454545 1.0285715s1.0454545-.4597715 1.0454545-1.0285715v-10.8884571l3.8755-3.8129143c.4087728-.4021714.4087728-1.0522286 0-1.4544z"
        fill={on ? "#ffcc4d" : "#7d7a72"}
      />
      <path
        d="m24.7727273 31.8857143c0 1.1355428-.9367273 2.0571428-2.0909091 2.0571428h-8.3636364c-1.1541818 0-2.0909091-.9216-2.0909091-2.0571428v-6.1714286h12.5454546z"
        fill="#99aab5"
      />
      <path
        d="m12.2262273 32.9142857c-.5018182 0-.9450909-.3569143-1.0297728-.8598857-.0951363-.5595429.289591-1.0902857.8593637-1.1828571l12.5454545-2.0571429c.5687273-.1008 1.1081818.2849143 1.2022728.8454857.0951363.5595429-.289591 1.0902857-.8593637 1.1828572l-12.5454545 2.0571428c-.0575.0102857-.1160455.0144-.1725.0144zm0-4.1142857c-.5018182 0-.9450909-.3569143-1.0297728-.8598857-.0951363-.5595429.289591-1.0902857.8593637-1.1828572l12.5454545-2.0571428c.5687273-.0997714 1.1081818.2849143 1.2022728.8454857.0951363.5595429-.289591 1.0902857-.8593637 1.1828571l-12.5454545 2.0571429c-.0575.0102857-.1160455.0144-.1725.0144z"
        fill="#ccd6dd"
      />
    </g>
  </svg>
);

const ThemeToggle = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // render a dummy bulb until we're fully mounted and self-aware
  useEffect(() => setMounted(true), []);
  if (!mounted) return <BulbIcon on={false} className={classNames("icon", className)} />;

  return (
    <button
      className={styles.button}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      title={resolvedTheme === "light" ? "Toggle Dark Mode" : "Toggle Light Mode"}
      aria-hidden={true}
    >
      <BulbIcon on={resolvedTheme === "light"} className={classNames("icon", className)} />
    </button>
  );
};

export default memo(ThemeToggle);
