import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {
  disabled: boolean;
  param?: DateProps;
  setParam: (param: DateProps) => void;
};

type DateProps = {
  year?: string;
  month?: string;
  day?: string;
};

export const SelectDate: React.FC<Props> = ({ disabled, param, setParam }) => {
  useEffect(() => {
    if (disabled) {
      setParam({
        year: "0",
        month: "0",
        day: "0",
      });
    }
  }, [disabled]);
  return (
    <div className="field is-grouped">
      <div
        className="control"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="select">
          <select
            disabled={disabled}
            value={param?.year}
            onChange={(e) => {
              setParam({
                year: e.target.value,
                month: param?.month,
                day: param?.day,
              });
            }}
          >
            <CreateOption start={1958} end={2020} />
          </select>
        </div>
        <DateItem>年</DateItem>
        <div className="select">
          <select
            disabled={disabled}
            value={param?.month}
            onChange={(e) => {
              setParam({
                year: param?.year,
                month: e.target.value,
                day: param?.day,
              });
            }}
          >
            <CreateOption start={1} end={12} />
          </select>
        </div>
        <DateItem>月</DateItem>
        <div className="select">
          <select
            disabled={disabled}
            value={param?.day}
            onChange={(e) => {
              setParam({
                year: param?.year,
                month: param?.month,
                day: e.target.value,
              });
            }}
          >
            <CreateOption start={1} end={31} />
          </select>
        </div>
        <DateItem>日</DateItem>
      </div>
    </div>
  );
};

const CreateOption: React.FC<{ start: number; end: number }> = ({
  start,
  end,
}) => {
  const nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return (
    <>
      <option></option>
      {nums.map((num) => {
        return <option key={num}>{num}</option>;
      })}
    </>
  );
};

const DateItem = styled.div`
  margin: 0.5rem;
`;
