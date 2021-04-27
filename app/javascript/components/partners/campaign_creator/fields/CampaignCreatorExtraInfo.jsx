import React from "react";
import { Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorExtraInfo = () => {
  return (
    <CampaignCreatorFieldWrapper
      label="Informations supplémentaires"
      sublabel="Accès, modalités... Les volontaires ne verront cette information qu’après avoir confirmé leur rendez-vous."
      name="extraInfo"
    >
      <Field as="textarea" name="extraInfo" />
    </CampaignCreatorFieldWrapper>
  );
};
