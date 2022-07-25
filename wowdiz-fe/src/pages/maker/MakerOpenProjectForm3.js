import React, { useState, useRef } from "react";
import RegReward from "./RegReward";
import RewardOption from "./RewardOption";

const MakerOpenProjectForm3 = ({ form, setForm, handleProject }) => {
    const [possibility, setPossibility] = useState("무제한");
    const [necessity, setNecessity] = useState("Y");
    const [rewardOptionType, setRewardOptionType] = useState(["선택형0"]);

    const [subjectLengthChecker, setSubjectLengthChecker] = useState(0);
    const [contentLengthChecker, setContentLengthChecker] = useState(0);
    const [rewardOption, setRewardOption] = useState([]);
    const [rewardOptionArr, setRewardOptionArr] = useState([]);

    const [rewardOptionKeywordArr, setRewardOptionKeywordArr] = useState([]);
    const [rewardOptionKeyword, setRewardOptionKeyword] = useState("");
    const [rewardOptionKeywordArrs, setRewardOptionKeywordArrs] = useState([""]);

    const [isHovering, setIsHovering] = useState(0);

    const today = new Date().toISOString().substring(0, 10);

    const [reward, setReward] = useState({
        rewardPossibility: "무제한", //단지 초기값이고 백에 넘기진 않을것.
        purchase_limit: "",
        deliveryDate: today, //예약배송일이없다 테이블에 추가하자
        reward_info: "", //reward_info
        reward_price: "", //reward_price
        rewardOptions: "",
        reward_title: "", //reward_title
        require_parcel: "Y", //배송필요유무
    });

    const [rewardArr, setRewardArr] = useState([]);

    const rewardRef = useRef([]);
    const rewardOptionRef = useRef([]);

    const handleReward = (e) => {
        setReward({
        ...reward,
        [e.target.name]: e.target.value,
        });
        console.log("reward", reward);
    };

    const handleRewardSubjectLength = (e) => {
        setSubjectLengthChecker(e.target.value.length);
        setReward({
            ...reward,
            [e.target.name]: e.target.value,
        });
    };

    const handleRewardContentLength = (e) => {
        setContentLengthChecker(e.target.value.length);
        setReward({
            ...reward,
            [e.target.name]: e.target.value,
        });
    };

    const handleRadioPossibility = (e) => {
        setPossibility(e.target.value);
        setReward({
            ...reward,
            [e.target.name]: e.target.value,
        });
    };
    const handleRadioNecessity = (e) => {
        setNecessity(e.target.value);
        setReward({
            ...reward,
            [e.target.name]: e.target.value,
        });
    };

    const addReward = () => {
        if(
            rewardRef.current[0].value === '' ||
            rewardRef.current[3].value === '' ||
            rewardRef.current[4].value === '' ||
            rewardRef.current[5].value === ''
        ) {
            alert('아직 작성되지 않은 정보가 있습니다. 다시 확인해 주세요.');
            return;
        }
        setRewardArr(rewardArr.concat(reward));
        console.log("rewardArr", rewardArr);
        onResetReward();
        onBlurResetReward();
    };

    const addForm = () => {
        setForm({
            ...form,
            reward: rewardArr,
        });
    };

    const delReward = (idx) => {
        setRewardArr(rewardArr.filter((data, index) => idx !== index));
    };

    const addRewardOption = () => {
        setRewardOptionArr(rewardOptionArr.concat([rewardOption]));
        setRewardOptionType(
            rewardOptionType.concat([`선택형${rewardOptionType.length}`])
        );
    };

    const delRewardOption = (idx) => {
        setRewardOptionArr(rewardOptionArr.filter((data, index) => idx !== index));
    };

    //아직 미구현...
    const onResetReward = () => {
        rewardRef.current[0].value = null;
        rewardRef.current[3].value = null;
        rewardRef.current[4].value = null;
        rewardRef.current[5].value = today;
        setRewardOptionArr([]);
    };

    const onBlurResetReward = () => {
        setReward([]);
    }

    const titleLengthChecker = () => {
        if(rewardRef.current[3].value === '') {
            return 0;
        } else {
            return rewardRef.current[3].value.length;
        }
    }

    return (
        <div className="maker_open_project_form">
            <div>
                <h3>프로젝트 리워드를 구성해주세요</h3>
                <p style={{ color: "gray" }}>
                프로젝트 시작을 위해서는
                <span className="target_money">
                최소 1개 이상의 리워드가 있어야 합니다.
                </span>
                배송이 필요한 리워드는 배송비가 포함된 가격을 적어주세요.
                </p>
                <div className="reward_wrap">
                    <table>
                        <tbody>
                            <tr>
                                <th>리워드 금액</th>
                                <td>
                                <input
                                className="project_input"
                                name="reward_price"
                                type="number"
                                defaultValue={reward.reward_price}
                                onChange={handleReward}
                                ref={(el) => (rewardRef.current[0] = el)}
                                />
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 제공 가능수</th>
                                <td>
                                <label
                                className={
                                possibility === "무제한"
                                    ? "reward_label_radio_checked"
                                    : "reward_label_radio"
                                }
                                htmlFor="id_reward_radio1"
                                >
                                <input
                                className="reward_radio"
                                name="rewardPossibility"
                                type="radio"
                                value="무제한"
                                id="id_reward_radio1"
                                checked={possibility === "무제한"}
                                onChange={handleRadioPossibility}
                                ref={(el) => (rewardRef.current[1] = el)}
                                />
                                무제한
                                </label>
                                <label
                                className={
                                possibility === "제한"
                                    ? "reward_label_radio_checked"
                                    : "reward_label_radio"
                                }
                                htmlFor="id_reward_radio2"
                                >
                                <input
                                className="reward_radio"
                                name="rewardPossibility"
                                type="radio"
                                value="제한"
                                id="id_reward_radio2"
                                checked={possibility === "제한"}
                                onChange={handleRadioPossibility}
                                />
                                제한
                                </label>
                                <input
                                className="select_reward_quantity"
                                name="purchase_limit"
                                type={possibility === "제한" ? "number" : "hidden"}
                                defaultValue={reward.purchase_limit}
                                onChange={handleReward}
                                ref={(el) => (rewardRef.current[2] = el)}
                                />
                                {possibility === "제한" ? (
                                <span style={{ color: "gray" }}>&nbsp;개</span>
                                ) : (
                                ""
                                )}
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 제목</th>
                                <td>
                                <input
                                className="project_input"
                                name="reward_title"
                                type="text"
                                maxLength={30}
                                onChange={handleRewardSubjectLength}
                                defaultValue={reward.reward_title}
                                ref={(el) => (rewardRef.current[3] = el)}
                                />
                                <span style={{ color: "gray" }}>&nbsp;{subjectLengthChecker}/30</span>
                                {/* <span style={{ color: "gray" }}>
                                    &nbsp;{rewardRef.current[3].value===null?'0':rewardRef.current.value.length}/30</span> */}
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 내용</th>
                                <td>
                                <textarea
                                className="reward_content"
                                name="reward_info"
                                maxLength={70}
                                type="text"
                                placeholder="준비된 리워드와 설명을 적어주세요"
                                onChange={handleRewardContentLength}
                                defaultValue={reward.reward_info}
                                ref={(el) => (rewardRef.current[4] = el)}
                                />
                                <span style={{ color: "gray" }}>&nbsp;{contentLengthChecker}/70</span>
                                </td>
                            </tr>
                            <tr>
                                <th>예상 배송일</th>
                                <td>
                                <input
                                className="project_input"
                                name="deliveryDate"
                                type="date"
                                onChange={handleReward}
                                defaultValue={reward.deliveryDate}
                                ref={(el) => (rewardRef.current[5] = el)}
                                />
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 옵션</th>
                                <td>
                                {rewardOptionArr.length === 0 ? (
                                <div
                                className="project_input reward_option_btn"
                                type="button"
                                style={{ marginBottom: "0px" }}
                                onClick={addRewardOption}
                                >
                                리워드 옵션 추가하기
                                </div>
                                ) : (
                                ""
                                )}

                                {rewardOptionArr &&
                                rewardOptionArr.map((item, idx) => (
                                <RewardOption
                                    key={idx}
                                    item={item}
                                    i={idx}
                                    rewardOptionRef={rewardOptionRef}
                                    rewardOptionArr={rewardOptionArr}
                                    rewardOptionType={rewardOptionType}
                                    rewardOption={rewardOption}
                                    setRewardOption={setRewardOption}
                                    setRewardOptionType={setRewardOptionType}
                                    rewardRef={rewardRef}
                                    addRewardOption={addRewardOption}
                                    handleReward={handleReward}
                                    delRewardOption={delRewardOption}
                                    setRewardOptionArr={setRewardOptionArr}
                                    setReward={setReward}
                                    reward={reward}
                                    rewardOptionKeywordArr={rewardOptionKeywordArr}
                                    setRewardOptionKeywordArr={setRewardOptionKeywordArr}
                                    rewardOptionKeyword={rewardOptionKeyword}
                                    setRewardOptionKeyword={setRewardOptionKeyword}
                                    isHovering={isHovering}
                                    setIsHovering={setIsHovering}
                                    rewardOptionKeywordArrs={rewardOptionKeywordArrs}
                                    setRewardOptionKeywordArrs={setRewardOptionKeywordArrs}
                                />
                                ))}
                                </td>
                            </tr>
                            <tr>
                                <th>배송지 필요여부</th>
                                <td>
                                <label
                                className={
                                necessity === "Y"
                                    ? "reward_label_radio_checked"
                                    : "reward_label_radio"
                                }
                                htmlFor="id_reward_radio3"
                                >
                                <input
                                className="reward_radio"
                                name="require_parcel"
                                type="radio"
                                value="Y"
                                id="id_reward_radio3"
                                checked={necessity === "Y"}
                                onChange={handleRadioNecessity}
                                ref={(el) => (rewardRef.current[9] = el)}
                                />
                                배송지 필요
                                </label>
                                <label
                                className={
                                necessity === "N"
                                    ? "reward_label_radio_checked"
                                    : "reward_label_radio"
                                }
                                htmlFor="id_reward_radio4"
                                >
                                <input
                                className="reward_radio"
                                name="require_parcel"
                                type="radio"
                                value="N"
                                id="id_reward_radio4"
                                checked={necessity === "N"}
                                onChange={handleRadioNecessity}
                                ref={(el) => (rewardRef.current[9] = el)}
                                />
                                배송지 필요없음
                                </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <hr style={{ border: "0.3px solid #ebebeb" }} />
                    <button
                    className="reward_btn_reg"
                    type="button"
                    onClick={addReward}
                    onBlur={addForm}
                    >
                    등록
                    </button>
                    <button className="reward_btn_reset" type="button" 
                    onClick={onResetReward}
                    onBlur={onBlurResetReward}
                    >
                    초기화
                    </button>
                </div>
            </div>

            <div>
                <h3>등록된 리워드 미리보기</h3>
                {rewardArr.length === 0 ? (
                <p style={{ color: "gray" }}>리워드가 없습니다. 리워드를 추가해주세요.</p>
                ) : (
                ""
                )}
                {rewardArr &&
                rewardArr.map((item, idx) => (
                <RegReward data={item} key={idx} idx={idx} onDelete={delReward} />
                ))}
            </div>
        </div>
    );
};

export default MakerOpenProjectForm3;
