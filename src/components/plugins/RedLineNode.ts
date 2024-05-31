// Lexical
import { TextNode, SerializedTextNode } from "lexical";

// Types
type SerializedRedLineNode = SerializedTextNode & {
    type: "redline";
};

export class RedLineNode extends TextNode {
    static getType() {
        return "redline";
    }

    static clone(node: RedLineNode) {
        return new RedLineNode(node.__text, node.__key);
    }

    createDOM() {
        const dom = document.createElement("span");
        dom.style.textDecoration = "line-through";
        dom.style.color = "red";
        dom.textContent = this.getTextContent();
        return dom;
    }

    updateDOM() {
        return false;
    }

    static importJSON(serializedNode: SerializedRedLineNode): RedLineNode {
        const node = new RedLineNode(serializedNode.text);
        return node;
    }

    exportJSON(): SerializedRedLineNode {
        return {
            ...super.exportJSON(),
            type: "redline",
        };
    }
}

export function $createRedLineNode(text: string) {
    return new RedLineNode(text);
}
