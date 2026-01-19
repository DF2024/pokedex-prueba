const Pagination = ({
        totalPosts,
        postsPerPage,
        currentPage,
        setCurrentPage,
        maxPagesToShow = 5,
    }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    const half = Math.floor(maxPagesToShow / 2)
    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, start + maxPagesToShow - 1)

    if (end - start + 1 < maxPagesToShow) {
        start = Math.max(1, end - maxPagesToShow + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    return (
        <div className="mb-5">
            <ul className="flex justify-center gap-1 text-gray-900">

                <li>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-100 disabled:opacity-40"
                    >
                        ◀
                    </button>
                </li>

                {pages.map((page) => (
                <li key={page}>
                    <button
                    onClick={() => setCurrentPage(page)}
                    className={`block size-8 rounded-full border text-sm font-medium transition-colors
                        ${
                        page === currentPage
                            ? "bg-red-600 text-white border-red-600"
                            : "border-gray-200 hover:bg-gray-100"
                        }
                    `}
                    >
                    {page}
                    </button>
                </li>
                ))}

                <li>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-100 disabled:opacity-40"
                    >
                        ▶
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
