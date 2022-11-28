import React from "react";

export default function Footer() {
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; 
                {new Date().getFullYear()} 
                {` - Thyago "<Thp/>". All rights reserved.`}
            </p>
        </div>
    )
}