import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
  budget: string;
  location: string;
  category: string;
  deadline: string;
};

export default function AddRequest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("title"));

  return (
    <>
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-semibold mb-6">Add Request Page</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 items-start"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium ">
                  Title
                </label>
                <input
                  id="title"
                  {...register("title")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.title && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium ">
                  Description
                </label>
                <input
                  id="description"
                  {...register("description")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-medium ">
                  Budget
                </label>
                <input
                  id="budget"
                  {...register("budget")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.budget && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-sm font-medium ">
                  Location
                </label>
                <input
                  id="location"
                  {...register("location")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.location && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium ">
                  Category
                </label>
                <input
                  id="category"
                  {...register("category")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.category && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-sm font-medium ">
                  Deadline
                </label>
                <input
                  id="deadline"
                  {...register("deadline")}
                  type="text"
                  className="min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.deadline && <span>This field is required</span>}
              </div>

              <div className="col-span-full flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
