
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvernoteCollector extends SketchCollector {

    static CONFIG = {
        id: "evernote",
        name: "Evernote",
        description: "i18n.collectors.evernote.description",
        version: "0",
        website: "https://www.evernote.com/PurchaseHistory.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11728.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.evernote.com/PurchaseHistory.action",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvernoteCollector.CONFIG);
    }
}
