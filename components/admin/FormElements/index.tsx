'use client';
import Breadcrumb from '@/components/admin/Breadcrumbs/Breadcrumb';
import CheckboxFive from '@/components/admin/Checkboxes/CheckboxFive';
import CheckboxFour from '@/components/admin/Checkboxes/CheckboxFour';
import CheckboxOne from '@/components/admin/Checkboxes/CheckboxOne';
import CheckboxThree from '@/components/admin/Checkboxes/CheckboxThree';
import CheckboxTwo from '@/components/admin/Checkboxes/CheckboxTwo';
import SwitcherFour from '@/components/admin/Switchers/SwitcherFour';
import SwitcherOne from '@/components/admin/Switchers/SwitcherOne';
import SwitcherThree from '@/components/admin/Switchers/SwitcherThree';
import SwitcherTwo from '@/components/admin/Switchers/SwitcherTwo';
import DatePickerTwo from '@/components/admin/FormElements/DatePicker/DatePickerTwo';
import DatePickerOne from '@/components/admin/FormElements/DatePicker/DatePickerOne';
import MultiSelect from '@/components/admin/FormElements/MultiSelect';
import SelectGroupTwo from '@/components/admin/SelectGroup/SelectGroupTwo';

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="FormElements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Default Input
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Active Input
                </label>
                <input
                  type="text"
                  placeholder="Active Input"
                  className="disabled:bg-whiter dark:bg-form-input w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Disabled label
                </label>
                <input
                  type="text"
                  placeholder="Disabled label"
                  disabled
                  className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>
            </div>
          </div>

          {/* <!-- Toggle switch input --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Toggle switch input
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div>

          {/* <!-- Time and date --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Time and date
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <DatePickerOne />
              <DatePickerTwo />
            </div>
          </div>

          {/* <!-- File upload --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="border-stroke file:border-stroke file:bg-whiter disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark w-full cursor-pointer rounded-lg border-[1.5px] bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="border-stroke file:border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark w-full rounded-md border p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default dark:file:bg-white/30 dark:file:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Textarea Fields
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Default textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Active textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="disabled:bg-whiter dark:bg-form-input w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Disabled textarea
                </label>
                <textarea
                  rows={6}
                  disabled
                  placeholder="Disabled textarea"
                  className="border-stroke disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Checkbox and radio --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Checkbox and radio
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <CheckboxOne />
              <CheckboxTwo />
              <CheckboxThree />
              <CheckboxFour />
              <CheckboxFive />
            </div>
          </div>

          {/* <!-- Select input --> */}
          <div className="border-stroke dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white shadow-default">
            <div className="border-stroke px-6.5 dark:border-strokedark border-b py-4">
              <h3 className="font-medium text-black dark:text-white">
                Select input
              </h3>
            </div>
            <div className="gap-5.5 p-6.5 flex flex-col">
              <SelectGroupTwo />
              <MultiSelect id="multiSelect" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormElements;

