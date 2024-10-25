import React from 'react';

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar p-4 border-r w-full lg:w-1/5 xl:w-1/6">  
            <h2 className="text-xl font-bold mb-4  text-primary">Filters</h2>

            {/* Precio */}
            <div className="filter-section mb-4">
                <h3 className="font-semibold mb-2 ">Price</h3>
                <input type="range" min="0" max="500" className="w-full" />
                <div className="flex justify-between">
                    <span>$0</span>
                    <span>$500</span>
                </div>
            </div>

            {/* Género */}
            <div className="filter-section mb-4">
                <h3 className="font-semibold mb-2 text-primary">Gender</h3>
                <label className="block"><input type="checkbox" /> Man (24)</label>
                <label className="block"><input type="checkbox" /> Woman (16)</label>
                <label className="block"><input type="checkbox" /> Kid (10)</label>
                <label className="block"><input type="checkbox" /> Unisex (8)</label>
            </div>

            {/* Colección */}
            <div className="filter-section mb-4">
                <h3 className="font-semibold mb-2  text-primary">Collection</h3>
                <label className="block"><input type="checkbox" /> Tiempo (24)</label>
                <label className="block"><input type="checkbox" /> Mercurial (16)</label>
                <label className="block"><input type="checkbox" /> Phantom (8)</label>
                <label className="block"><input type="checkbox" /> Superfly (6)</label>
            </div>

            {/* Talla */}
            <div className="filter-section mb-4">
                <h3 className="font-semibold mb-2  text-primary">Size</h3>
                <label className="block"><input type="checkbox" /> 6 (4)</label>
                <label className="block"><input type="checkbox" /> 7 (8)</label>
                <label className="block"><input type="checkbox" /> 8 (10)</label>
                <label className="block"><input type="checkbox" /> 9 (20)</label>
                <label className="block"><input type="checkbox" /> 10 (15)</label>
            </div>

            {/* Tipo de superficie */}
            <div className="filter-section mb-4">
                <h3 className="font-semibold mb-2  text-primary">Type of surface</h3>
                <label className="block"><input type="checkbox" /> Grass (4)</label>
                <label className="block"><input type="checkbox" /> Artificial (6)</label>
                <label className="block"><input type="checkbox" /> Asphalt (2)</label>
            </div>

            {/* Botón para reiniciar los filtros */}
            <button className="bg-primary text-white px-4 py-2 rounded-md mt-4 w-full">Reset Filters</button>
        </div>
    );
};

export default FilterSidebar;


