import React from "react";
import { useFormikContext, Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorAgeRange = () => {
  const { getFieldMeta } = useFormikContext();
  return (
    <CampaignCreatorFieldWrapper
      label="Âge des volontaires"
      metas={[getFieldMeta("minAge"), getFieldMeta("maxAge")]}
    >
      <span>Entre</span>
      <Field name="minAge" size="2" type="number" />
      <span>et</span>
      <Field name="maxAge" size="2" type="number" />
      <span>ans inclus</span>
    </CampaignCreatorFieldWrapper>
  );
};
