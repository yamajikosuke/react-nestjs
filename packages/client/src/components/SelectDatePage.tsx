import React, { useState, useEffect } from "react";
import { DateSelectorCustom } from "./DateSelectorCustom";

type DateProps = {
  year?: string;
  month?: string;
  day?: string;
};

export const SelectDatePage: React.FC = () => {
  const [param, setParam] = useState<DateProps>();
  const [, setParam_1] = useState<DateProps>();
  const [isDisabledManufacturedOn] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>();
  const [isSelected, setIsSelected] = useState<boolean>();

  useEffect(() => {
    if (!isSelected) {
      // setParam({
      //   year: "2020",
      //   month: "12",
      //   day: "31",
      // });
      setParam_1({
        year: undefined,
        month: undefined,
        day: undefined,
      });
    }
    setIsSelected(true);
  }, [isSelected]);

  useEffect(() => {
    console.log(param);
  }, [param]);

  return (
    <>
      <h1>Hello date selector</h1>
      <DateSelectorCustom
        disabled={isDisabledManufacturedOn}
        param={param}
        startYear={2016}
        setParam={setParam}
        setDate={setDate}
        setIsSelected={setIsSelected}
      />
      {/* <DateSelector
        startYear={2016}
        setDate={setDate}
      /> */}
      <div>{`date : ${date?.toString()}`}</div>
      <div>{`year : ${date?.getFullYear()}`}</div>
      <div>{`month : ${date ? date.getMonth() + 1 : undefined}`}</div>
      <div>{`day : ${date?.getDate()}`}</div>
      <hr />
      {/* <DateSelectorCustom
        startYear={2016}
        setDate={setDate}
        disabled={isDisabledManufacturedOn}
        param={param}
        setParam={setParam}
      /> */}

      {/* <label className="checkbox">
        <input
          type="checkbox"
          checked={isDisabledManufacturedOn}
          onChange={(): void => {
            setIsDisabledManufacturedOn(!isDisabledManufacturedOn);
          }}
        />
        不明
      </label>
      <SelectDate
        disabled={isDisabledManufacturedOn}
        param={param}
        setParam={setParam}
      />
      <label className="checkbox">
        <input
          type="checkbox"
          checked={isDisabledOrderIssuedOn}
          onChange={(): void => {
            setIsDisabledOrderIssuedOn(!isDisabledOrderIssuedOn);
          }}
        />
        不明
      </label>
      <SelectDate
        disabled={isDisabledOrderIssuedOn}
        param={param_1}
        setParam={setParam_1}
      /> */}
    </>
  );
};
