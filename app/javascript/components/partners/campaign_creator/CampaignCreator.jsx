import React from "react";
import { pick } from "lodash";
import { useMutation } from "react-query";
import { Formik, Field, Form } from "formik";
import { api } from "components/shared/api";
import { RootWrapper } from "components/shared/RootWrapper";
import { CampaignCreatorReach } from "components/partners/campaign_creator/CampaignCreatorReach";
import { CampaignCreatorFieldBasic } from "components/partners/campaign_creator/fields/CampaignCreatorFieldBasic";
import { CampaignCreatorTimeRange } from "components/partners/campaign_creator/fields/CampaignCreatorTimeRange";
import { CampaignCreatorAgeRange } from "components/partners/campaign_creator/fields/CampaignCreatorAgeRange";
import { CampaignCreatorMaxDistance } from "components/partners/campaign_creator/fields/CampaignCreatorMaxDistance";
import { GenericError } from "components/partners/GenericError";
import dayjs from "dayjs";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";

const _CampaignCreator = ({ initialCampaign, vaccinationCenter }) => {
  const createCampaign = useCreateCampaignMutation(vaccinationCenter);
  return (
    <div className="CampaignCreator">
      {createCampaign.isError && <GenericError />}
      <Formik
        initialValues={{
          ...pick(initialCampaign, [
            "availableDoses",
            "vaccineType",
            "minAge",
            "maxAge",
            "maxDistanceInMeters",
          ]),
          startsAt: dayjs(initialCampaign.startsAt),
          endsAt: dayjs(initialCampaign.endsAt),
          extraInfo: "",
        }}
        onSubmit={console.log /*createCampaign.mutate*/}
      >
        <Form>
          <h2>Doses et disponibilité</h2>
          <CampaignCreatorFieldBasic
            label="Nombre de doses"
            name="availableDoses"
            type="number"
          />

          <label htmlFor="vaccineType">Type</label>
          <Field as="select" name="vaccineType">
            <option value="astrazeneca">AstraZeneca</option>
            <option value="pfizer">Pfizer</option>
            <option value="moderna">Moderna</option>
            <option value="janssen">Janssen / Johnson & Johnson</option>
          </Field>

          <CampaignCreatorTimeRange />

          <h2>Sélection des volontaires</h2>

          <label htmlFor="extraInfo">Extra Info</label>
          <Field name="extraInfo" as="textarea" />

          <CampaignCreatorAgeRange />
          <CampaignCreatorMaxDistance />

          <h2>Lancer la campagne</h2>
          <CampaignCreatorReach vaccinationCenter={vaccinationCenter} />
          <button className="btn btn-danger btn-lg" type="submit">
            Lancer la campagne
          </button>
        </Form>
      </Formik>
    </div>
  );
};

function useCreateCampaignMutation(vaccinationCenter) {
  return useMutation(
    (campaign) =>
      api.post(
        `/partners/vaccination_centers/${vaccinationCenter.id}/campaigns.json`,
        { campaign }
      ),
    { onSuccess: (data) => window.location.assign(data.redirectTo) }
  );
}

export const CampaignCreator = RootWrapper(_CampaignCreator);
