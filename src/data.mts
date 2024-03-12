class CardData {
    content: string;
    x: number;
    y: number;
    father: CardData | null = null;
    children: CardData[] = [];
    child: CardData | null = null;
    previous: CardData | null = null;
    next: CardData | null = null;
    constructor(content: string, x: number, y: number) {
        this.content = content;
        this.x = x;
        this.y = y;
    }
}

export { CardData };