export const CodeGeneratorInputProps = [
   { name: "Name", type: "text", label: "Visitor's Name" },
   { name: "Arrival Date", type: "date", label: "Arrival Date" },
   { name: "Departure Date", type: "date", label: "Departure Date" },
];

export type CodeGeneratorInputType = {
   name: string;
   type: string;
   label: string;
};
