import DiagramCard from './DiagramCard/DiagramCard'
import './DiagramSection.scss'
import * as Three from 'three';

const diagramData = [
    // card 1
    {
        title: 'Card 1',
        categories: [
            {
                title: 'Category 1',
                description: 'Description 1'
            },
            {
                title: 'Category 2',
                description: 'Description 2'
            },
            {
                title: 'Category 3',
                description: 'Description 3'
            }
        ]
    },
    // card 2
    {
        title: 'Card 2',
        categories: [
            {
                title: 'Category 1',
                description: 'Description 1'
            }
        ]
    },
    // card 3
    {
        title: 'Card 3',
        categories: [
            {
                title: 'Category 1',
                description: 'Description 1'
            }
        ]
    },

     // card 4
     {
        title: 'Card 4',
        categories: [
            {
                title: 'Category 1',
                description: 'Description 1'
            }
        ]
    }
]


export default function DiagramSection() {
    return (
        <div className="diagram-section section">
            
            <div className="diagram-section-header">
                Diagram
            </div>

            <div className="diagram-section-content">
                {diagramData.map((card, index) => (
                    <DiagramCard key={index} {...card} currentCategory={0} changeCategory={() => {}} uniqueCurl={{
                        frequency: 0.22 + Three.MathUtils.randInt(0.01, 0.015),
                        amplitude: 0.0366 + Three.MathUtils.randInt(0.01, 0.015),
                        maxDistance: 0.0243 + Three.MathUtils.randInt(0.01, 0.015)
                    }} />
                ))}
            </div>


        </div>
    )
}
