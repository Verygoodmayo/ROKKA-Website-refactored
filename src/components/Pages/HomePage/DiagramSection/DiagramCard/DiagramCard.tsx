import { Canvas } from '@react-three/fiber';
import BackgroundSketch from '../../../../Sketchs/BackgroundSketch/BackgroundSketch';
import './DiagramCard.scss'
import { Color } from 'three';

interface DiagramCardProps {
    title: string;
    categories: {
        title: string;
        description: string;
    }[];
    currentCategory: number;
    changeCategory: (category: number) => void;
    uniqueCurl: {
        frequency: number;
        amplitude: number;
        maxDistance: number;
    }
}

export default function DiagramCard({title, categories, currentCategory, changeCategory, uniqueCurl}: DiagramCardProps) {

    return (
        <div className="diagram-card">
            <div className="diagram-card-header">
                <h3>{title}</h3>
            </div>
            <div className="diagram-card-categories">
                {categories.map((category, index) => (
                    <div 
                        className={`diagram-card-category ${currentCategory === index ? 'active' : ''}`}
                        key={category.title} 
                        onClick={() => changeCategory(index)}
                    >
                        <h4>{category.title}</h4>
                    </div>
                ))}
            </div>
            <div className='category-description'>
                <p>{categories[currentCategory].description}</p>
            </div>
            <div className='diagram-card-background'>
                <Canvas>
                    <BackgroundSketch 
                        specialUniforms={{
                            particleSize: { value: 100. },
                            frequency: { value: uniqueCurl?.frequency || 0.122 },
                            amplitude: { value: uniqueCurl?.amplitude || 0.366 },
                            maxDistance: { value: uniqueCurl?.maxDistance || 0.243 },
                            u_color: { value: new Color('#ffffff') },
                        }}
                    />
                </Canvas>
            </div>
        </div>
    )
}