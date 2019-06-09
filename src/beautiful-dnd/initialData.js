export default {
    items: {
        'item-1': {
            id: 'item-1',
            content: 'boop',
            bgColor: 'pink',
            color: 'black',
        },
        'item-2': {
            id: 'item-2',
            content: 'beep',
            bgColor: 'deeppink',
            color: 'white',
        },
    },
    hitboxes: {
        'hitbox-1': {
            id: 'hitbox-1',
            contents: [
                'item-1', 
                'item-2',
            ],
        },
        'hitbox-2': {
            id: 'hitbox-2',
            contents: [],
        },
    },
    hitboxOrder: ['hitbox-1', 'hitbox-2'],
};