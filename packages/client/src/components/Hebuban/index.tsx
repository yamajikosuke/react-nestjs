import React, { useEffect, useState, useCallback } from "react";
import { Member } from "./Member";
import { CounterContext } from "./context";
import { members } from "./data/members";

const Child1 = React.memo(() => {
  console.log("render Child1");
  return <p>Child1</p>;
});

const Child2 = React.memo((props: { count: number[] }) => {
  console.log("render Child2");
  return <p>Child2: {props.count}</p>;
});

export const Hebuban: React.FC = () => {
  const [count, setCount] = useState<number[]>(new Array(4).fill(0));
  const counterContext = { count, setCount };
  const [totalCount, setTotalCount] = useState<number>(0);
  const [selectMember, setSelectMember] = useState<string>("");
  const [checkedMember, setCheckedMember] = useState<string[]>([]);

  useEffect(() => {
    const res = count.reduce((sum, element) => {
      return sum + element;
    }, 0);
    setTotalCount(res);
  }, [count]);

  useEffect(() => {
    console.log("checkedMember:", checkedMember);
  }, [checkedMember]);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMember(e.currentTarget.value);
  };

  const func = () => {
    console.log("func");
    return count;
  };
  const handleOnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const buffer = checkedMember.concat();
    if (e.currentTarget.checked) {
      buffer.push(value);
    } else {
      const delIndex = checkedMember.indexOf(value);
      buffer.splice(delIndex, 1);
    }
    setCheckedMember(buffer);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ヘブバン</h1>
        <Child2 count={count} />
        <CounterContext.Provider value={counterContext}>
          <div className="content">
            {/* Check box */}
            <div className="field">
              <div className="control">
                {members.map((member) => (
                  <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="members"
                        value={member.name}
                        onChange={handleOnChangeCheckbox}
                      />
                      {member.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select">
                  <select onChange={handleOnChange}>
                    <option>Select dropdown</option>
                    {members.map((member) => (
                      <option value={member.name}>{member.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div>Total Count:{totalCount}</div>
            {members.map((member, i) => {
              return (
                <>
                  <Member
                    idx={i}
                    name={member.name}
                    profession={member.profession}
                  />
                </>
              );
            })}
          </div>
        </CounterContext.Provider>
      </div>
    </section>
  );
};
