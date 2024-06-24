import React from 'react'

export default function Symbol() {
    return (
        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <svg
                className="w-4 text-gray-600"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
            >
                <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                />
                <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="19,15 12,22 5,15"
                />
            </svg>
        </div>
    )
}
