export const ProjectItem = () => {
  return (
    <div className="flex my-8 rounded-xl overflow-hidden shadow-md mr-64 relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/3b95/b15a/f8a9b5e1cd1fb2e0095bfcc79ef91e8a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O8oPD8OanBwENxfa09X3DrJ74hAgC7AME723qTrlP-RpBSkCBPx9AFNGMgVStJLxMVkZ6bIBqrYgs36NH9YpDr-DBr4znLyF8mk7NctiBwIf27URIjt~bQud8DSqz20qeIUcKo23FO~viqFywarIqGhtvTxQv7eaBiAd1lcfstTCs8eEYmzxJamMyQO2wyBJCErubTnpeVvG13MrZEG2KMlbj0qbMJPcwK~VPRWSVNcIaLj-BJtqG~yKRfM2LyXswZNK~fpIazpW0TXwxJPsLX3YkkjsTprosfXz4lU1JnDDkzryqpOrxD9Pun4zJWm7sqP6yfuKCGNp9QMaZZ3gYw__"
        width={250}
        height={250}
        className="object-contain"
      />
      <div className="flex flex-col font-roboto px-4 py-5 justify-between">
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">
            Kemampuan Merangkum Tulisan
          </span>
          <span className="text-[12px] text-[#9E95A2] mt-2">
            Lorem ipsum dolor sit amet consectetur. Nulla risus malesuada ac
            turpis tempus.Lorem ipsum dolor sit amet consectetur....
          </span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="text-[12px]">BAHASA SUNDA</span>
          <span className="text-[12px] text-[#9E95A2]">
            Oleh Al-Baiqi Samaan
          </span>
        </div>
      </div>
      <button className="absolute right-0 bottom-0 bg-linear-to-bl from-[#F39519] to-[#FFCD67]  text-white font-medium text-[14px] p-2 m-5 rounded-md cursor-pointer">
        Add to cart
      </button>
    </div>
  );
};
