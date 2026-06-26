"use client";

import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend
} from "recharts";

const AdminAnalyticsCharts = ({ orders, artworks }) => {
    const [isDark, setIsDark] = useState(false);

    /* detect theme */
    useEffect(() => {
        const checkTheme = () => {
            const dark = document.documentElement.classList.contains("dark");
            setIsDark(dark);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);

    /* theme colors */
    const axisColor = isDark ? "#a1a1aa" : "#52525b";      // zinc
    const gridColor = isDark ? "#27272a" : "#e4e4e7";
    const tooltipBg = isDark ? "#18181b" : "#ffffff";
    const tooltipBorder = isDark ? "#3f3f46" : "#d4d4d8";

    /* monthly sales */
    const monthlySalesMap = {};

    orders.forEach((order) => {
        const month = new Date(order.createdAt).toLocaleString(
            "default",
            { month: "short" }
        );

        if (!monthlySalesMap[month]) {
            monthlySalesMap[month] = 0;
        }

        monthlySalesMap[month] += Number(order.price);
    });

    const salesData = Object.entries(monthlySalesMap).map(
        ([month, revenue]) => ({
            month,
            revenue
        })
    );

    /* category pie */
    const categoryMap = {};

    artworks.forEach((art) => {
        if (!categoryMap[art.category]) {
            categoryMap[art.category] = 0;
        }

        categoryMap[art.category] += 1;
    });

    const categoryData = Object.entries(categoryMap).map(
        ([name, value]) => ({
            name,
            value
        })
    );

    const COLORS = [
        "#8884d8",
        "#82ca9d",
        "#ffc658",
        "#ff8042",
        "#00C49F"
    ];

    return (
        <div className="grid xl:grid-cols-2 gap-8">

            {/* Bar chart */}

            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">

                <h2 className="text-lg font-semibold mb-6">
                    Monthly Sales Revenue
                </h2>

                <ResponsiveContainer width="100%" height={320}>

                    <BarChart data={salesData}>

                        <CartesianGrid
                            stroke={gridColor}
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="month"
                            stroke={axisColor}
                        />

                        <YAxis
                            stroke={axisColor}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: "8px"
                            }}
                        />

                        <Bar
                            dataKey="revenue"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>


            {/* Pie chart */}

            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">

                <h2 className="text-lg font-semibold mb-6">
                    Artworks By Category
                </h2>

                <ResponsiveContainer width="100%" height={320}>

                    <PieChart>

                        <Pie
                            data={categoryData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {categoryData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index % COLORS.length]
                                    }
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: "8px"
                            }}
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default AdminAnalyticsCharts;