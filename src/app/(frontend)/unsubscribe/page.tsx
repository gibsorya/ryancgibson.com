import { unsubscribeToNewsletter } from "./unsubscribe-action";

import './styles.css'

type Args = {
  searchParams: Promise<{ email?: string, groupId?: string }>;
};

export default async function Page({ searchParams }: Args) {
    const { groupId, email } = await searchParams;

    if(!groupId || !email) {
        return (
            <div className="unsubscribe-page">
                <div className="unsubscribe-message-body">
                    <p className="unsubscribe-message"><b>Cannot unsubscribe</b>: no groupId or email provided.</p>
                    <p className="unsubscribe-message">If you clicked on an unsubscribe link and see this, please shoot me an email!</p>
                </div>
            </div>
        );
    }

    const response = await unsubscribeToNewsletter(email, groupId);

    if(!response) {
        return (
            <div className="unsubscribe-page">
                <div className="unsubscribe-message-body">
                    <p className="unsubscribe-message"><b>Cannot unsubscribe</b>.</p>
                    <p className="unsubscribe-message">Reason: Unknown error</p>
                </div>
            </div>
        );
    }

    if(response.ok) {
        return (
            <div className="unsubscribe-page">
                <div className="unsubscribe-message-body">
                    <p className="unsubscribe-message">You have successfully unsubscribed.</p>
                </div>
            </div>
        );
    } else if(response.error) {
        return (
            <div className="unsubscribe-page">
                <div className="unsubscribe-message-body">
                    <p className="unsubscribe-message"><b>Cannot unsubscribe</b>.</p>
                    <p className="unsubscribe-message">Reason: {response.error}</p>
                </div>
            </div>
        );
    }
}