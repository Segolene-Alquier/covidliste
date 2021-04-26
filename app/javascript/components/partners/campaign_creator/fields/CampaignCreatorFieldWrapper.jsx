import React from "react";

export const CampaignCreatorFieldWrapper = ({
  label,
  sublabel,
  name,
  meta,
  metas,
  children,
}) => {
  return (
    <div className="CampaignCreatorField">
      <label htmlFor={name}>
        {label && <h3>{label}</h3>}
        {sublabel && <p>{sublabel}</p>}
        {children}
      </label>
      {meta?.error && (
        <div className="alert alert-danger" role="alert">
          {meta.error}
        </div>
      )}
      {metas?.map(
        (meta) =>
          meta.error && (
            <div className="alert alert-danger" role="alert">
              {meta.error}
            </div>
          )
      )}
    </div>
  );
};
