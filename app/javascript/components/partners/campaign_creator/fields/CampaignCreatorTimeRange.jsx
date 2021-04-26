import React from "react";
import { useFormikContext } from "formik";
import { CampaignCreatorFieldWrapper } from "components/partners/campaign_creator/fields/CampaignCreatorFieldWrapper";
import { range } from "lodash";

const RANGE_MINUTES = range(0, 55, 5);
const RANGE_HOURS = range(23);

export const CampaignCreatorTimeRange = () => {
  const { setFieldValue, values, getFieldMeta } = useFormikContext();
  return (
    <CampaignCreatorFieldWrapper
      label="Pendant quel créneau les volontaires doivent arriver ?"
      sublabel={
        <>
          À quelle heure <strong>aujourd’hui</strong> les volontaires
          doivent-ils se présenter ?
        </>
      }
      metas={[getFieldMeta("startsAt"), getFieldMeta("endsAt")]}
    >
      <span>Entre</span>
      <TimePicker
        value={values.startsAt}
        onChange={(newStartsAt) => setFieldValue("startsAt", newStartsAt)}
      />
      <span>et</span>
      <TimePicker
        value={values.endsAt}
        onChange={(newEndsAt) => setFieldValue("endsAt", newEndsAt)}
      />
    </CampaignCreatorFieldWrapper>
  );
};

function TimePicker({ onChange, value }) {
  return (
    <>
      <SelectRange
        range={RANGE_HOURS}
        value={value.hour()}
        onChange={(newHours) => onChange(value.hour(newHours))}
      />
      <span>:</span>
      <SelectRange
        range={RANGE_MINUTES}
        value={value.minute()}
        onChange={(newMinutes) => onChange(value.minute(newMinutes))}
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
