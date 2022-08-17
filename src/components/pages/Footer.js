import React from "react";
import { FaAngleUp } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="position-sticky bottom-0 end-0  ">
        <div className="d-flex flex-row-reverse ">
          <div className="pe-4 mb-3 ">
            <a href="#navbar" className="text-secondary">
              <FaAngleUp size={50} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
