const GuestComment = ({ writer, children, date }) => {
  return (
    <>
      <div className="mx-auto mt-4 w-11/12 rounded-2xl bg-gray-50 p-4 font-nanumMyeongjo">
        <div className="border-orange-150 border-b-2 pb-2 text-lg">
          <span>from. {writer}</span>
        </div>
        <div className="mt-2 font-medium leading-7 text-amber-600">
          {children}
        </div>
        <div className="text-right text-sm font-thin text-gray-700">{date}</div>
      </div>
    </>
  );
};

export default GuestComment;
