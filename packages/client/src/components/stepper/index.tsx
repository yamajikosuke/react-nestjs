import React, { useState } from "react";
import styled from "styled-components";

const SelectArea = styled.div`
  margin-bottom: 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const GrayLine = styled.div`
  margin-right: 4px;
  background: #ccc;
  flex: 1;
  height: 3px;
`;

const BlueLine = styled.div`
  margin-right: 4px;
  background: skyblue;
  flex: 1;
  height: 3px;
`;

const StepItem = styled.div`
  position: relative;
  margin-right: 4px;
`;
const StepLabel = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
`;

const GrayCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
`;

const ActiveCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: skyblue;
`;

const CompleteCheck = styled.div`
  color: skyblue;
  font-weight: 700;
  font-size: 14px;
  line-height: 8px;
  width: 12px;
`;

type SampleProps = {
  labels: string[];
  currentIndex: number;
};

type StepStatus = "inActive" | "Active" | "Complete";

const stepMarkMap = {
  inActive: <GrayCircle />,
  Active: <ActiveCircle />,
  Complete: <CompleteCheck>&#10003;</CompleteCheck>,
};

const getStepStatus = (idx: number, currentIndex: number): StepStatus => {
  return idx === currentIndex - 1
    ? "Active"
    : idx < currentIndex - 1
    ? "Complete"
    : "inActive";
};

const Sample: React.FC<SampleProps> = ({ labels, currentIndex }) => {
  const items = labels.map((label, idx) => {
    return (
      <React.Fragment key={idx}>
        {idx !== 0 && (idx > currentIndex - 1 ? <GrayLine /> : <BlueLine />)}
        <StepItem>
          {stepMarkMap[getStepStatus(idx, currentIndex)]}
          <StepLabel>{label}</StepLabel>
        </StepItem>
      </React.Fragment>
    );
  });
  return <Content>{items}</Content>;
};

export const Stepper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const labels = ["label_1", "label_2aaaaaaaaa", "label_3", "label_4"];
  const props = {
    labels,
    currentIndex,
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentIndex(Number(e.currentTarget.value));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Stepper</h1>
        <div className="content">
          <SelectArea>
            <div>current index</div>
            <select onChange={handleChange} autoFocus defaultValue={1}>
              {labels.map((_, idx) => {
                return (
                  <option key={idx} value={idx + 1}>
                    {idx + 1}
                  </option>
                );
              })}
            </select>
          </SelectArea>
          <Sample {...props} />
        </div>
      </div>
    </section>
  );
};
