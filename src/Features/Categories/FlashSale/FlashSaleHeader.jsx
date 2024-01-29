function FlashSaleHeader() {
  return (
    <h1 className="mb-2 flex items-center justify-between rounded-md bg-yellow-400 p-2 text-xl font-bold">
      <span>
        Flash sale <em className="text-[10px] text-red-600">50% Discount</em>
      </span>
      <span className="text-sm uppercase">see all &rarr;</span>
    </h1>
  );
}

export default FlashSaleHeader;
