
import { SketchCollector } from '../../sketchCollector';

export class EvernotePremiumCollector extends SketchCollector {

    static CONFIG = {
        id: "evernote_premium",
        name: "Evernote Premium",
        description: "i18n.collectors.evernote_premium.description",
        version: "0",
        website: "https://www.evernote.com/Login.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137159.jpg",
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
        },
        entryUrl: "https://www.evernote.com/Login.action",
    }

    constructor() {
        super(EvernotePremiumCollector.CONFIG);
    }
}
