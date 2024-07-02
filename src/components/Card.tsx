import { ReactElement } from "react";

interface ICard {
    header: ReactElement;
    body: ReactElement;
    footer: ReactElement;
}


export const Card = ({ header, body, footer }: ICard) => {

    return (
        <>

            <div className="card">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    {body}
                </div>
                <div className="card-footer">
                    {footer}
                </div>
            </div>

        </>
    );
}