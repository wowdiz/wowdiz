import React from "react";

const FAQUpdate = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="faq_update_title"
          style={{ width: "600px", height: "84px" }}
        />
        <input
          type="text"
          className="faq_update_content"
          style={{ width: "600px", height: "48px" }}
        />
        <button type="submit">완료</button>
        <button type="submit">취소</button>
      </form>
    </div>
  );
};

export default FAQUpdate;
