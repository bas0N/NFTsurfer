import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-4 mx-auto justify-between ">
        <div class="flex mt-2">
          <div class="w-1/2 mx-6">
            <div class="px-6">
              <div>
                <a class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  NFTsurfer
                </a>
              </div>

              <p class="max-w-md mt-2 text-gray-500 dark:text-gray-400">
                Explore the world of NFTs in an easy and accessible way. Now,
                everything in one place.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-x-24">
            <div>
              <h3 class="text-gray-700 uppercase dark:text-white">About</h3>
              <a
                href="#"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                About Us
              </a>
              <Link
                to="/about"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Licence
              </Link>
            </div>

            <div>
              <h3 class="text-gray-700 uppercase dark:text-white">Services</h3>
              <a
                href="#"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                NFT explorer
              </a>
              <a
                href="#"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                NFT ownership verification
              </a>
              <a
                href="#"
                class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                NFT financial details
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
    </footer>
  );
}

export default Footer;
