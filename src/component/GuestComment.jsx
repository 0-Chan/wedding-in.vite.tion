const GuestComment = ({ writer, children, date }) => {
  return (
    <>
      <div className="mt-4 rounded-lg bg-gray-50 py-4 px-5 font-nanumMyeongjo backdrop:mx-4">
        <div className="border-orange-150 border-b-2 pb-3">
          <span>from.</span> <span>{writer}</span>
        </div>
        <div className="font-base mt-4 leading-5 text-amber-600">
          {children}
        </div>
        <div className="mt-3 text-right text-sm font-thin text-gray-700">
          {date}
        </div>
      </div>
    </>
  );
};

export default GuestComment;
