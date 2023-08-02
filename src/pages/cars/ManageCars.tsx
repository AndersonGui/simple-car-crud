
import { HeaderContent } from "../../components/HeaderContent/HeaderContent";

export default function ManageCars() {
    return (
        <>
            <HeaderContent.Root>
                <HeaderContent.Text>Manage Cars</HeaderContent.Text>
                <HeaderContent.Actions>
                    <button className="btn-primary">Add Car</button>
                </HeaderContent.Actions>
            </HeaderContent.Root>
        </>
    )
}