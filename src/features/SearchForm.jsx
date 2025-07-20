import { Calendar, Filter, Search } from "lucide-react";
import { useForm } from "react-hook-form";

function SearchForm({onSearch}) {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
        q: "",
        begin_date: "",
        end_date: "",
        sort: "",
        page: 0
        },
    });

    const onSubmit = (data) =>{
        const params = {
            ...data,
            begin_date: data.begin_date?.replace(/-/g, ""),
            end_date: data.end_date?.replace(/-/g, ""),
            page: 0
        }
        onSearch(params)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                type="text"
                placeholder="Search articles..."
                {...register("q")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Calendar className="h-4 w-4" />
                <span>Date Range</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Begin Date
                    </label>
                    <input
                    type="date"
                    {...register("begin_date")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    End Date
                    </label>
                    <input
                    type="date"
                    {...register("end_date")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm"
                    />
                </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end">
                <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <Filter className="h-4 w-4" />
                    <span>Sort By</span>
                </div>
                <select 
                    {...register("sort")} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm bg-white"
                >
                    <option value="">Select sorting...</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="relevance">Most Relevant</option>
                </select>
                </div>

                <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md text-sm sm:text-base min-h-[40px] flex items-center justify-center gap-2"
                >
                <Search className="h-4 w-4" />
                <span>Search</span>
                </button>
            </div>
        </form>
    )
}

export default SearchForm
