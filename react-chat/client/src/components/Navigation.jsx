import { Link } from "react-router";

export default function Navigation() {
   return (
    <nav class="flex p-7" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
            <Link to='/' class="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 h-4 w-4">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
            </Link>
        </li>
        <li>
            <div class="flex items-center">
            <span class="mx-2.5 text-gray-800 ">/</span>
            <Link to='/chat' class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                Chat
            </Link>
            </div>
        </li>
        <li aria-current="page">
            <div class="flex items-center">
            <span class="mx-2.5 text-gray-800 ">/</span>
            <span class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                Replication
            </span>
            </div>
        </li>
        </ol>
    </nav>
   );
}