import React from 'react';

const timelineData = [
    {
        title: 'Event 1',
        description: 'Description 1',
        time: '2022-01-01',
        imageUrl: 'https://via.placeholder.com/100', // 替换成你的图片链接
    },
    {
        title: 'Event 2',
        description: 'Description 2',
        time: '2022-02-01',
        imageUrl: 'https://via.placeholder.com/100', // 替换成你的图片链接
    },
    {
        title: 'Event 3',
        description: 'Description 3',
        time: '2022-03-01',
        imageUrl: 'https://via.placeholder.com/100', // 替换成你的图片链接
    },
    // 添加更多事件
];

function Timeline() {
    return (
        <div className="flex flex-col space-y-8">
            <h1 className="text-4xl font-bold">Timeline</h1>
            {timelineData.map((event, index) => (
                <div key={index} className="flex items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0">
                        <img src={event.imageUrl} alt={`Event ${index + 1}`} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-gray-500">{event.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline;
