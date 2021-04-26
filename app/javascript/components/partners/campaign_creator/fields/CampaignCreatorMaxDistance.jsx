import React from "react";
import { useFormikContext, Field, Form } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

export const CampaignCreatorMaxDistance = () => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <CampaignCreatorFieldWrapper
      label="Localisation des volontaires"
      name="maxDistanceInMeters"
    >
      <span>À</span>
      <input
        name="maxDistanceInMeters"
        size="2"
        type="number"
        value={values.maxDistanceInMeters / 1000}
        onChange={(e) =>
          setFieldValue("maxDistanceInMeters", e.target.value * 1000)
        }
      />
      <span>km maximum de votre établissement</span>
    </CampaignCreatorFieldWrapper>
  );
};
