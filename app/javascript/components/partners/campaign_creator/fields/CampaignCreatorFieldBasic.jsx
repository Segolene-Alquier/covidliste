import React from "react";
import { Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorFieldBasic = ({ label, sublabel, ...props }) => {
  return (
    <CampaignCreatorFieldWrapper
      label={label}
      sublabel={sublabel}
      name={props.name}
    >
      <Field {...props} />
    </CampaignCreatorFieldWrapper>
  );
};
