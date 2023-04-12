/*
 * Copyright (c) 2023 Brandon Jordan
 */

const make_id = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

export function $(selector) {
    return document.querySelector(selector);
}

export function $all(selector) {
    return document.querySelectorAll(selector);
}

export async function tempElement(tagName, attributes, callback) {
    let temp = new Elements(tagName, attributes);
    temp.style('display', 'none');
    await callback(temp.element);
    temp.remove();
}

export class Element {
    constructor(tagName, attributes) {
        this.element = document.createElement(tagName);
        this.id = 'e-' + make_id() + '-' + make_id() + '-' + make_id() + '-' + make_id();
        if (attributes) {
            for (let attribute in attributes) {
                if (attribute === 'class') {
                    this.element['className'] = attributes[attribute];
                } else if (attribute === 'text') {
                    this.element['innerText'] = attributes[attribute];
                } else if (attribute === 'html') {
                    this.element['innerHTML'] = attributes[attribute];
                } else if (attribute === 'editable') {
                    this.element['contentEditable'] = attributes[attribute];
                } else if (attribute === 'parent') {
                    this.parent = attributes[attribute];
                } else {
                    this.element[attribute] = attributes[attribute];
                }
            }
        }
        if (!this.parent) {
            this.parent = document.querySelector('body');
        }
        this.element.id = this.id;
        this.parent.appendChild(this.element);
        this.element = $(`${tagName}#${this.id}`)
        return this;
    }

    style(property, value) {
        this.element.style[property] = value;
        return this;
    }

    createChild(tagName, attributes) {
        attributes['parent'] = this.element;
        return new Elements(tagName, attributes);
    }
}