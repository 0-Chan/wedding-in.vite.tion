const GuestComment = ({ writer, comment, date }) => {
  return (
    <>
      <div className="mx-4 mt-4 rounded-lg bg-gray-50 py-4 px-5">
        <div className="border-orange-150 border-b-2 pb-3">
          <span>from.</span> <span>{writer}</span>
        </div>
        <div className="font-base mt-4 leading-5 text-amber-600">{comment}</div>
        <div className="mt-3 text-right text-sm font-thin text-gray-700">
          {date}
        </div>
      </div>
    </>
  );
};

export default GuestComment;
