export const defaultHTML = `<div class="container flex flex-col px-4 pb-6 pt-1 sm:mx-auto xl:px-24">
   <header class="pb-2 sm:pb-0 sm:pt-1">
      <nav class="flex w-full flex-row items-center justify-between sm:h-12">
         <div class="flex flex-row items-center space-x-2">
            <a class="flex font-sans text-2xl font-semibold text-white -mt-1" href="/">Listenbox</a>
            <div class="hidden items-center space-x-2 sm:flex"><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/later">Listen Later</a><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/pricing">Pricing</a><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/guides">Guides</a></div>
         </div>
         <div class="hidden items-center space-x-2 sm:flex">
            <a class="flex h-12 items-center rounded-md p-2 text-sm font-medium text-gray-300 duration-200 hover:bg-gray-700 hover:text-white sm:h-auto" href="mailto:hello@listenbox.app" target="_blank" rel="noreferrer">Support</a>
            <a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/account">
               <div class="flex flex-row items-center space-x-1">
                  <img class="rounded-full" src="https://www.gravatar.com/avatar/cae334b5cdcdbd49eb89f3eb16630fbd?s=24" loading="lazy" width="24" height="24" alt="stiggpwnz@gmail.com">
                  <p>Account</p>
               </div>
            </a>
         </div>
         <button aria-label="menu" class="-mr-2 flex h-12 w-12 items-center justify-center rounded-md p-3 text-gray-400 duration-200 hover:bg-gray-700 hover:text-white sm:hidden">
            <svg class="h-full w-full" stroke="currentColor" fill="none" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
         </button>
      </nav>
      <div aria-hidden="true" class="rah-static rah-static--height-zero " style="height:0;overflow:hidden">
         <div style="display: none;">
            <nav class="flex flex-col"><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/later">Listen Later</a><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/pricing">Pricing</a><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium duration-200 hover:bg-gray-700 hover:text-white sm:h-auto text-gray-300" href="/guides">Guides</a><a class="flex h-12 items-center rounded-md p-2 text-sm font-medium text-gray-300 duration-200 hover:bg-gray-700 hover:text-white sm:h-auto" href="mailto:hello@listenbox.app" target="_blank" rel="noreferrer">Support</a><a class="flex h-12 items-center space-x-2 rounded-md p-2 font-medium text-white text-gray-300" href="/account"><img class="rounded-full" src="https://www.gravatar.com/avatar/cae334b5cdcdbd49eb89f3eb16630fbd?s=32" loading="lazy" width="32" height="32" alt="stiggpwnz@gmail.com"><span>stiggpwnz@gmail.com</span></a></nav>
         </div>
      </div>
   </header>
   <div class="mx-auto flex w-full max-w-4xl flex-col">
      <div class="flex flex-col">
         <h1 class="text-5xl font-extrabold text-white">Shows</h1>
         <form method="post" action="/?index">
            <input type="hidden" name="_action" readonly="" value="submit-url">
            <label class="flex w-full max-w-lg flex-col space-y-1">
               <span class="font-semibold text-white">Add new</span>
               <div class="flex"><input type="url" class="hover:shadow-outline form-input min-w-0 flex-grow rounded-none rounded-l-md duration-300 disabled:opacity-50" placeholder="YouTube link" required="" name="url"><button type="submit" class="h-12 w-20 rounded-r-md bg-accent py-2 font-medium text-white duration-200 hover:bg-indigo-900 disabled:opacity-75">Add</button></div>
            </label>
         </form>
      </div>
      <div class="mt-4 divide-y divide-gray-700 sm:rounded-lg sm:bg-gray-900 sm:p-3 sm:shadow-dark-sm">
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/KCwFTzwuW5L4">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqNEaXwSJKHYPyr2WaVZIjnODmuXNbivK-A7pHZdWg=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Савромат</p>
                  <p class="font-medium text-gray-200">Савромат</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">1110 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-06-11T15:00:40.000Z" title="Sun Jun 11 2023 15:00:40 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->38 minutes ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2od8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/weTBGCVeHD7V">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqPbgsboRetsqDJkezGiomVuIm4suqJkS7J_IUeamC0=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Yannic Kilcher</p>
                  <p class="font-medium text-gray-200">Yannic Kilcher</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">405 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-06-06T19:55:30.000Z" title="Tue Jun 06 2023 19:55:30 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->5 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2ol8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/BSrg4NQZbiPX">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqNZhUJ3OQ_gAn61e9JUIsX0IqSVMmWnJe5dyU03qco=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Real Engineering</p>
                  <p class="font-medium text-gray-200">Real Engineering</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">159 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-06-03T14:00:07.000Z" title="Sat Jun 03 2023 14:00:07 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->8 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2ot8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/ZK172ZBZ_Jpg">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://i.ytimg.com/vi/OaYXRzeZ8WI/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4EgALoAooCDAgAEAEYHCA2KH8wDw==&amp;rs=AOn4CLA2TUQqOvywuX3vOu8Lf7tugoqgoQ" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Listen Later YT</p>
                  <p class="font-medium text-gray-200">Adel Nizamuddin</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">190 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-06-01T17:00:39.000Z" title="Thu Jun 01 2023 17:00:39 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->10 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2p58p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/gSFM8fWyXs70">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqPc8BygvgYIue1NQrGbfvD5smwXzs5frGt8Ge61fzg=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Skyrionn</p>
                  <p class="font-medium text-gray-200">Skyrionn</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">284 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-05-29T17:00:26.000Z" title="Mon May 29 2023 17:00:26 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->13 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2pd8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/WYyCvIC8j7ux">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ujr5QN7R1PSDkka8u0zLoKN8yk0Yy7OxUK6qFeuwhc98WGE8msVqAC7IbR0OH8XezS_YSwqk=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Агиль Рустамзаде</p>
                  <p class="font-medium text-gray-200">Агиль Рустамзаде</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">26 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-05-25T13:52:48.000Z" title="Thu May 25 2023 13:52:48 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->17 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2pl8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/E8AYc4IpNICF">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqNjyV-rQqEnek46vUASOBe6OjY5yf7w7TSnwyq5SA=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">PolyMatter</p>
                  <p class="font-medium text-gray-200">PolyMatter</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">139 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-05-20T14:08:14.000Z" title="Sat May 20 2023 14:08:14 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->22 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2pt8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/XZ1JTrHKHx1F">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/DuaPUjzsQQ_gFjcpQ3rDGHDve6yahoowFjm9zXMsQBIylAFD8ibzHCxGP0bdAldnUyMAiQ5n=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Ryan Carniato</p>
                  <p class="font-medium text-gray-200">Ryan Carniato</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">70 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-05-19T23:44:00.000Z" title="Fri May 19 2023 23:44:00 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->23 days ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2q58p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/BaxvIAHoPWoi">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/iJU7OZlxQmhdiX1sdiSnfxuQxuQ6rqvZOvdi9oklKujdyQ-FTkB3bJLu8X_yAi_YKYuQA0CY=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Robert Miles AI Safety</p>
                  <p class="font-medium text-gray-200">Robert Miles AI Safety</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">47 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2023-04-28T16:37:28.000Z" title="Fri Apr 28 2023 16:37:28 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->about 1 month ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2qd8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
         <div class="flex flex-row space-x-2 p-2 hover:bg-gray-800 sm:items-center sm:p-3">
            <a class="flex flex-grow flex-row space-x-2" href="/i/80zfz1_EI4NU">
               <img class="h-10 w-10 rounded-sm object-cover sm:h-18 sm:w-18" src="https://yt3.googleusercontent.com/ytc/AGIKgqMYWDEPBgIxtbW2dsgLUL85xKNmMA5yOVX4oWGW=s900-c-k-c0x00ffffff-no-rj" alt="podcast thumbnail">
               <div class="flex flex-col space-y-1">
                  <p class="font-bold text-white">Bushwacker</p>
                  <p class="font-medium text-gray-200">Bushwacker</p>
                  <div class="flex flex-col sm:flex-row sm:space-x-3">
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                           </svg>
                        </div>
                        <span class="text-sm">122 episodes</span>
                     </div>
                     <div class="inline-flex items-center space-x-1 text-gray-400">
                        <div class="h-4 w-4 flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <span class="text-sm">
                           <time datetime="2022-08-21T09:35:48.000Z" title="Sun Aug 21 2022 09:35:48 GMT+0000 (Coordinated Universal Time)">
                              Updated<!-- --> <!-- -->10 months ago
                           </time>
                        </span>
                     </div>
                  </div>
               </div>
            </a>
            <div class="relative" data-headlessui-state="">
               <button type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2ql8p:">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Delete" class="h-12 w-12 rounded-md p-3 text-white duration-300 hover:bg-gray-400 hover:bg-opacity-25">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
               </button>
            </div>
            <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
         </div>
      </div>
   </div>
   <footer class="mx-auto mt-10">
      <nav class="flex flex-row items-center space-x-4 text-sm font-medium text-gray-400"><a class="duration-200 hover:text-gray-200" href="/terms">Terms</a><a class="duration-200 hover:text-gray-200" href="/privacy">Privacy</a><a class="duration-200 hover:text-gray-200" href="/dmca">DMCA</a><a class="duration-200 hover:text-gray-200" href="https://stats.uptimerobot.com/rX3QPSAow1" target="_blank" rel="noreferrer">Status</a></nav>
   </footer>
</div>
`
