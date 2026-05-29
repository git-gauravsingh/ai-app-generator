import UnknownComponent from "@/components/fallback/UnknownComponent";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Table from "@/components/ui/Table";
import Form from "@/components/ui/Form";
import EmptyState from "@/components/states/EmptyState";
import { UIComponent } from "@/types/component";

interface DynamicRendererProps {
    components: UIComponent[];
}

export default function DynamicRenderer({
    components,
}: DynamicRendererProps) {
    if (!components.length) {
        return <EmptyState />;
    }
    return (
        <div className="space-y-4">
            {components.map((component) => {
                switch (component.type) {
                    case "card":
                        return (
                            <Card
                                key={component.id}
                                title={component.title}
                                value={component.value}
                            />
                        );

                    case "button":
                        return (
                            <Button
                                key={component.id}
                                label={component.label}
                            />
                        );

                    case "input":
                        return (
                            <Input
                                key={component.id}
                                label={component.label}
                                placeholder={component.placeholder}
                            />
                        );

                    case "table":
                        return (
                            <Table
                                key={component.id}
                                columns={component.columns}
                                rows={component.rows}
                            />
                        );

                    case "form":
                        return (
                            <Form
                                key={component.id}
                                title={component.title}
                            />
                        );

                    default: {
                        const unknownComponent = component as {
                            id: string;
                            type: string;
                        };

                        return (
                            <UnknownComponent
                                key={unknownComponent.id}
                                type={unknownComponent.type}
                            />
                        );
                    }
                }
            })}
        </div>
    );
}