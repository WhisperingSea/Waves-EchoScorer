interface WWCharacterSequenceTypes {
    name: string,
    charaId: number,
    nodes: {
        nodeNumber: number,
        nodeName: string,
        nodeDescription: string
        nodeEffect?: {
            attribute: string,
            value: number
            stacks?: number
        }[]
    }[]
}

export const WWCharacterSequence: WWCharacterSequenceTypes[] = [
    {
        name: "Rover-Spectro",
        charaId: 1001,
        nodes: [
            {
                nodeNumber: 1,
                nodeName: "Odyssey of Beginnings",
                nodeDescription: `Rover's Crit. Rate is increased by 15% for 7s when casting Resonance Skill <span classname="Highlight2">Resonating Slashes</span> or Resonance Skill <span classname="Highlight2">Resonating Spin</span>.`,
                nodeEffect: [
                    {
                        attribute: "Crit. Rate",
                        value: 15
                    }
                ],
            },
            {
                nodeNumber: 2,
                nodeName: "Microcosmic Murmurs",
                nodeDescription: `Rover's <span className="Spectro">Spectro DMG Bonus</span> is increased by 20%.`,
                nodeEffect: [
                    {
                        attribute: "Spectro Damage Bonus",
                        value: 20
                    }
                ],
            },
            {
                nodeNumber: 3,
                nodeName: "Visages of Dust",
                nodeDescription: `Rover's <span classname="Highlight2">Energy Regen</span> is increased by 20%.`,
                nodeEffect: [
                    {
                        attribute: "",
                        value: 1
                    }
                ],
            },
        ]
    },
    {
        name: "",
        charaId: 1,
        nodes: [
            {
                nodeNumber: 1,
                nodeName: "",
                nodeDescription: ``,
                nodeEffect: [
                    {
                        attribute: "",
                        value: 1
                    }
                ],
            }
        ]
    },
    {
        name: "",
        charaId: 1,
        nodes: [
            {
                nodeNumber: 1,
                nodeName: "",
                nodeDescription: ``,
                nodeEffect: [
                    {
                        attribute: "",
                        value: 1
                    }
                ],
            }
        ]
    }
]