import { SketchCollector } from '../../sketchCollector';

export class MailboxOrgCollector extends SketchCollector {

    static CONFIG = {
        id: "mailbox.org",
        name: "Mailbox.org",
        description: "i18n.collectors.mailbox.org.description",
        version: "0",
        website: "https://mailbox.org",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mailbox.org_logo.svg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        }
    }

    constructor() {
        super(MailboxOrgCollector.CONFIG);
    }
}
