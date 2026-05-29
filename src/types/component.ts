export type ComponentType =
    | "card"
    | "button"
    | "input"
    | "table"
    | "form";

export interface BaseComponent {
    id: string;
    type: ComponentType;
}

export interface CardComponent extends BaseComponent {
    type: "card";
    title: string;
    value: string;
}

export interface ButtonComponent extends BaseComponent {
    type: "button";
    label: string;
}

export interface InputComponent extends BaseComponent {
    type: "input";
    label: string;
    placeholder?: string;
}

export interface TableComponent extends BaseComponent {
    type: "table";
    columns: string[];
    rows: string[][];
}

export interface FormComponent extends BaseComponent {
    type: "form";
    title: string;
}

export type UIComponent =
    | CardComponent
    | ButtonComponent
    | InputComponent
    | TableComponent
    | FormComponent;