import React from "react";
import { Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorAvailableDoses = () => {
  return (
    <CampaignCreatorFieldWrapper label="Nombre de doses" name="availableDoses">
      <Field type="number" name="availableDoses" />
    </CampaignCreatorFieldWrapper>
  );
};
