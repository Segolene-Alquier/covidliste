import React from "react";
import { Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorAgeRange = () => {
  return (
    <CampaignCreatorFieldWrapper
      label="Âge des volontaires"
      names={["minAge", "maxAge"]}
    >
      <span>Entre</span>
      <Field name="minAge" size="2" type="number" min="18" max="130" />
      <span>et</span>
      <Field name="maxAge" size="2" type="number" min="18" max="130" />
      <span>ans inclus</span>
    </CampaignCreatorFieldWrapper>
  );
};
