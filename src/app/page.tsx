export default function Home() {
  return (
    <div className="container mx-auto">
      <img 
        src="mark.svg" 
        alt="Silverback Design Co mark" 
        className="h-24 w-24 md:h-32 md:w-32 mx-auto mt-64"
      />
      <div className="flex flex-row mt-6">
        <a href="mailto:patrick@silverbackdesign.co" className="rounded-sm py-3 px-5 font-medium text-white text-lg hover:bg-[#E3FF00] hover:text-black mx-auto flex">
          Start project
        </a>
      </div>
    </div>
  )
}
