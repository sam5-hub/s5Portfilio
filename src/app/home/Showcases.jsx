import React from 'react';

const items = [
    {
        title: 'Item 1',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
    {
        title: 'Item 2',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
    {
        title: 'Item 3',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
    {
        title: 'Item 4',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
    {
        title: 'Item 5',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
    {
        title: 'Item 6',
        imageUrl: 'https://via.placeholder.com/200', // 替换成你的图片链接
    },
];

const silverGradientColor = 'from-gray-300 to-gray-500'; // 银白色渐变

function ShowcasesPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Showcases</h1>
            <div className="grid grid-cols-3 gap-4 grid-rows-2">
                {items.map((item, index) => (
                    <div key={index} className={`bg-gradient-to-br ${silverGradientColor} h-200 rounded-md p-4`}>
                        <img src={item.imageUrl} alt={`Item ${index + 1}`}
                             className="w-full h-3/4 object-cover rounded-md mb-4"/>
                        <h2 className="text-gray-800 text-lg font-semibold">{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ShowcasesPage;
