import React from "react";
import { useField } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorFieldBasic = ({
  label,
  sublabel,
  name,
  validate,
  type,
}) => {
  const [field, meta] = useField({ name, validate, type });
  return (
    <CampaignCreatorFieldWrapper
      label={label}
      sublabel={sublabel}
      name={name}
      meta={meta}
    >
      <input {...field} />
    </CampaignCreatorFieldWrapper>
  );
};
