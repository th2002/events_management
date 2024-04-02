import Breadcrumb from '@/components/admin/Breadcrumbs/Breadcrumb';

import { Metadata } from 'next';
import DefaultLayout from '@/components/admin/Layouts/DefaultLayout';
import SelectGroupOne from '@/components/admin/SelectGroup/SelectGroupOne';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js Form Layout | TailAdmin - Next.js Dashboard Template',
  description:
    'This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template'
};

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="FormLayout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Select subject"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <SelectGroupOne />

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="text-gray flex w-full justify-center rounded bg-primary p-3 font-medium hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Sign In Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5 mt-5 flex items-center justify-between">
                  <label htmlFor="formCheckbox" className="flex cursor-pointer">
                    <div className="relative pt-0.5">
                      <input
                        type="checkbox"
                        id="formCheckbox"
                        className="taskCheckbox sr-only"
                      />
                      <div className="box border-stroke dark:border-strokedark mr-3 flex h-5 w-5 items-center justify-center rounded border">
                        <span className="text-white opacity-0">
                          <svg
                            className="fill-current"
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p>Remember me</p>
                  </label>

                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Forget password?
                  </Link>
                </div>

                <button className="text-gray flex w-full justify-center rounded bg-primary p-3 font-medium hover:bg-opacity-90">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Sign Up Form --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Sign Up Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button className="text-gray flex w-full justify-center rounded bg-primary p-3 font-medium hover:bg-opacity-90">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;

