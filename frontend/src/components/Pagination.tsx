import React from 'react';
import { Button } from 'react-bootstrap';

interface PagniationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PagniationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handleClick = (page: number) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div>
            <Button
            variant='outline-info'
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
            >
            Previous
            </Button>
            {Array.from({ length: totalPages }, (_, index) => (
                <Button
                    variant='outline-info'
                    key={index + 1}
                    onClick={() => handleClick(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </Button>
            ))}
            <Button
                variant='outline-info'
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;