/* eslint-disable @typescript-eslint/no-explicit-any */
import Popup from "reactjs-popup";
import Icon from "./Icons";

const CustomDropdownSelect = ({
  value,
  setValue,
  options,
  open,
  disabled = false,
}: {
  value: any[];
  setValue: React.Dispatch<React.SetStateAction<any[]>>;
  options: any[];
  open?: boolean | undefined;
  disabled: boolean;
}) => {
  return (
    <Popup
      trigger={
        disabled ? (
          <></>
        ) : (
          <div className="text-grey-text cursor-pointer flex items-center justify-center gap-1 rounded-xl border bg-white border-grey-input px-[13px] py-[8px]">
            {value[1]}
            <div className="px-2">
              <Icon width="10" height="6" id={"angle-down"} />
            </div>
          </div>
        )
      }
      on="click"
      open={open}
      closeOnDocumentClick
      arrow={false}
      mouseLeaveDelay={50}
      mouseEnterDelay={0}
      nested
      position="bottom center"
      contentStyle={{
        padding: "0px",
        marginTop: "6px",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        border: 0,
        width: "fit-content",
        color: "#5E5BA7",
        overflow: "hidden",
      }}
    >
      {
        <div className="text-grey-text gap-[13px] bg-white">
          {options.map(({ key, value }: { key: number; value: any }) => (
            <div
              key={key}
              className=" border-t border-t-grey-input py-[8px] px-[21px] gap-1 cursor-pointer flex items-start w-full"
              onClick={() => {
                setValue([key, value]);
                close();
              }}
            >
              {value}
            </div>
          ))}
        </div>
      }
    </Popup>
  );
};

export default CustomDropdownSelect;
