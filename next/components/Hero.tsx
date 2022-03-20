const Hero = () => {
  return (
    <div className="flex max-w-full border-b border-black bg-yellow-500">
      <div className="m-auto flex max-w-6xl justify-between space-x-5 pt-10">
        <div className="space-y-5 p-5">
          <h1 className="font-serif text-8xl">Stay curious.</h1>
          <p className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="500ms rounded-full bg-gray-900 py-2 px-5 text-lg text-white transition duration-300 ease-in-out hover:bg-black">
            Start reading
          </button>
        </div>
        <div className="flex items-end">
          <img
            className="hidden h-64 md:block lg:h-80"
            src="https://miro.medium.com/max/698/4*BIK9VGjeCj2TaTDw4id2nA.png"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
