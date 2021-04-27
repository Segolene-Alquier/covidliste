import React from "react";
import { useFormikContext } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";
import { range } from "lodash";
import dayjs from "dayjs";

const RANGE_MINUTES = range(0, 60, 5);
const RANGE_HOURS = range(23);

export const CampaignCreatorTimeRange = () => {
  const { values } = useFormikContext();
  return (
    <CampaignCreatorFieldWrapper
      label="Pendant quel créneau les volontaires doivent arriver ?"
      sublabel={
        <>
          À quelle heure <strong>aujourd’hui</strong> les volontaires
          doivent-ils se présenter ?
        </>
      }
      names={["startsAt", "endsAt"]}
      warning={timeRangeWarning(values)}
    >
      <span>Entre</span>
      <TimePicker name="startsAt" />
      <span>et</span>
      <TimePicker name="endsAt" />
    </CampaignCreatorFieldWrapper>
  );
};

function TimePicker({ name }) {
  const { setFieldValue, values } = useFormikContext();
  const value = values[name];
  return (
    <>
      <SelectRange
        range={RANGE_HOURS}
        value={value.hour()}
        onChange={(newHours) => setFieldValue(name, value.hour(newHours))}
      />
      <span>:</span>
      <SelectRange
        range={RANGE_MINUTES}
        value={value.minute()}
        onChange={(newMinutes) => setFieldValue(name, value.minute(newMinutes))}
      />
    </>
  );
}

function SelectRange({ range, onChange, value }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      {range.map((value) => (
        <option value={value} key={value}>
          {value.toString().padStart(2, "0")}
        </option>
      ))}
    </select>
  );
}

function timeRangeWarning(values) {
  if (values.endsAt?.isBefore?.(dayjs().add(2, "hours"))) {
    return (
      <>
        Pour laisser le temps aux volontaires de répondre,{" "}
        <strong>
          nous vous recommandons de lancer les campagnes au moins 2 heures avant
          la fin du créneau.
        </strong>
      </>
    );
  }
}
