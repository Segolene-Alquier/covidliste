import React from "react";
import { Field } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";
import { vaccineTypes } from "components/partners/campaign_creator/vaccineTypes";

export const CampaignCreatorVaccineType = () => {
  return (
    <CampaignCreatorFieldWrapper
      label="Type de vaccin"
      name="vaccineType"
      className="CampaignCreatorVaccineType"
    >
      {vaccineTypes.map((vaccineType) => (
        <div key={vaccineType.value}>
          <Field
            type="radio"
            className="btn-check"
            name="vaccineType"
            value={vaccineType.value}
            id={vaccineType.value}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={vaccineType.value}
          >
            {vaccineType.label}
          </label>
        </div>
      ))}
    </CampaignCreatorFieldWrapper>
  );
};
