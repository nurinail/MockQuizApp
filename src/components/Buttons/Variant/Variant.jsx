import React from "react";
import classNames from "classnames";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import style from "./variant.module.scss";

const Variant = ({
  variant,
  correct,
  text,
  setSelectedVariantIndex,
  selected,
  isOnSubmit,
  index,
}) => {
  const isSelected = selected === index;

  const handleClick = () => {
    if (!isOnSubmit) {
      setSelectedVariantIndex(index);
    }
  };

  const showCorrectIcon = isOnSubmit && correct;
  const showIncorrectIcon = isOnSubmit && isSelected && !correct;

  const buttonClass = classNames(style.variantComp, {
    [style.variantComp_true]: isOnSubmit && correct,
    [style.variantComp_false]: isOnSubmit && isSelected && !correct,
  });

  return (
    <button onClick={handleClick} className={buttonClass}>
      <div className={style.variantComp_wrapper}>
        <span
          className={classNames(style.variantComp_wrapper_variant, {
            [style.variantComp_wrapper_variant_active]: isSelected,
          })}
        >
          {variant}
        </span>
        <p className={style.variantComp_wrapper_answer}>{text}</p>
      </div>
      {showCorrectIcon && (
        <IoIosCheckmarkCircleOutline className={style.variantComp_iconCheck} />
      )}
      {showIncorrectIcon && (
        <IoIosCloseCircleOutline className={style.variantComp_iconClose} />
      )}

    </button>
  );
};

export default Variant;
