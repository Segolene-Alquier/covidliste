import React from "react";
import { useFormikContext } from "formik";

export const CampaignCreatorFieldWrapper = ({
  label,
  sublabel,
  name,
  names = [name],
  children,
}) => {
  const { getFieldMeta } = useFormikContext();
  return (
    <div className="CampaignCreatorField">
      <label htmlFor={name}>
        {label && <h3>{label}</h3>}
        {sublabel && <p>{sublabel}</p>}
        {children}
      </label>
      {names.map((name) => {
        const { error } = getFieldMeta(name);
        return (
          error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )
        );
      })}
    </div>
  );
};
