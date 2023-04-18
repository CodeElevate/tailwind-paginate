function Card(props) {
  const item = props.item;
  return (
    <>
      <div className="border relative  mt-8 w-full px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm hover:shadow-md">
        <div className="flex flex-col-reverse items-stretch justify-center p-4 sm:p-6">
          <div className="basis-2/3 mt-2 relative leading-normal sm:mt-0 sm:pr-4">
            
              <h5 className="mb-2 text-xl font-bold line-clamp-3 tracking-wide text-gray-900 dark:text-white">
                {item.name}
              </h5>
            <p className="mt-3 text-sm font-bold text-gray-600 line-clamp-3 dark:text-white">
              {item.description}
            </p>
            <p className="mt-3">
                <span className="mr-1">by</span>
                <span className="text-sm font-bold text-gray-900 truncate dark:text-white user-popover"
                    >
                    {item.contributed_by}
                </span>
                {/* <span className="ml-1 text-sm">posted
                    {{ \Carbon\Carbon::parse($blog->created_at)->diffForhumans() }}</span> */}
            </p>
          </div>
          <div className="basis-1/3 relative text-center min-h-fit">
            <img
              className="min-h-[120px] max-h-[150px]  mb-2 block relative w-full rounded-xl   object-cover shadow-md hover:shadow-sm"
              src={item.image_url}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
