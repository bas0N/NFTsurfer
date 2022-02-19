function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-4 mx-auto justify-between">
        <div class="flex mt-2">
          <div class="w-1/2 mx-6">
            <div class="px-6">
              <div>
                <a
                  href="#"
                  class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Brand
                </a>
              </div>

              <p class="max-w-md mt-2 text-gray-500 dark:text-gray-400">
                Join 31,000+ other and never miss out on new tips, tutorials,
                and more.
              </p>
            </div>
          </div>

          <div class="">
            <div class="grid grid-cols-3 gap-24 mx-4 px-4  ">
              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">About</h3>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">Blog</h3>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Tec
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Meraki UI
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p class="text-center text-gray-800 dark:text-white">
            © Brand 2020 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
