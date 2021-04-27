import React from "react";
import { useQuery } from "react-query";
import { useFormikContext } from "formik";
import { api } from "components/shared/api";
import { GenericError } from "components/partners/GenericError";
import { omit } from "lodash";

export const CampaignCreatorReach = ({ vaccinationCenter }) => {
  const { values, isValid } = useFormikContext();
  const reachParams = {
    campaign: omit(values, ["extraInfo"]),
  };
  const { isLoading, isError, data } = useQuery(
    ["reach", reachParams],
    () =>
      api.post(
        `/partners/vaccination_centers/${vaccinationCenter.id}/campaigns/simulate_reach.json`,
        reachParams
      ),
    {
      enabled: isValid,
    }
  );
  if (isError) return <GenericError />;
  return (
    <div className="CampaignCreatorReach">
      {isLoading && "LOADING"}
      {data && <p>{data.reach} volontaires trouvés</p>}
    </div>
  );
};
