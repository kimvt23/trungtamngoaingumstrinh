import { FC } from "react";


export type PositionType = {
    x: number;
    y: number;
}

export const MindmapLines: FC<{ 
    center: PositionType; 
    positions: PositionType[] 
}> = ({ center, positions }) => {

    return (
        <>
            <svg viewBox="0 0 640 480" className="w-full h-full absolute">
            <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
            </defs>
            {positions.map((p:PositionType, i:number) => {
                console.log({center, p});
                if (p.x === center.x) {
                    return (
                    <line
                        key={i}
                        x1={center.x-6}
                        y1={center.y}
                        x2={p.x-2}
                        y2={p.y}
                        stroke="url(#lineGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        filter="url(#glow)"
                        style={{ 
                            animation: `dash 8s linear infinite`, 
                            animationDelay: `${i * 0.4}s` 
                        }}
                    />
                    )
                } else if (p.y === center.y) {
                    return (
                    <line
                        key={i}
                        x1={center.x}
                        y1={center.y-2}
                        x2={p.x}
                        y2={p.y+2}
                        stroke="url(#lineGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        filter="url(#glow)"
                        style={{ 
                            animation: `dash 8s linear infinite`, 
                            animationDelay: `${i * 0.4}s` 
                        }}
                    />
                    )
                } else {
                    return (
                        <line
                        key={i}
                        x1={center.x}
                        y1={center.y}
                        x2={p.x}
                        y2={p.y}
                        stroke="url(#lineGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        filter="url(#glow)"
                        style={{ 
                            animation: `dash 8s linear infinite`, 
                            animationDelay: `${i * 0.4}s` 
                        }}
                        />
                    )
                }
            })}
            </svg>
        </>
    )
}