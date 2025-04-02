import React from "react";
import classNames from "classnames";

const Icon: React.FC<{ icon: string; classes?: string }> = ({
  icon,
  classes,
}) => {
  const elStyle = {
    mask: `url('${icon}') center / contain no-repeat`,
  } as React.CSSProperties;

  return (
    <span
      style={elStyle}
      className={classNames(
        "bg-current min-w-4 min-h-4 inline-block",
        classes
      )}
    ></span>
  );
};

export default Icon;
