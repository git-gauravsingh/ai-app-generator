import { UIComponent } from "@/types/component";

export const sampleConfig: UIComponent[] = [
  {
    id: "card-1",
    type: "card",
    title: "Total Users",
    value: "1,250",
  },

  {
    id: "button-1",
    type: "button",
    label: "Create User",
  },

  {
    id: "input-1",
    type: "input",
    label: "Search",
    placeholder: "Search users...",
  },

  {
    id: "table-1",
    type: "table",
    columns: ["Name", "Role", "Status"],
    rows: [
      ["John", "Admin", "Active"],
      ["Sarah", "Manager", "Active"],
      ["Mike", "User", "Inactive"],
    ],
  },

  {
    id: "form-1",
    type: "form",
    title: "Create User",
  },
];