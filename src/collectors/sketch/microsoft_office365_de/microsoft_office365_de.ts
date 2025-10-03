
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MicrosoftOffice365DeCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_office365_de",
        name: "Microsoft Office365.de",
        description: "i18n.collectors.microsoft_office365_de.description",
        version: "0",
        website: "https://admin.microsoft.com/AdminPortal/Home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18836.jpg",
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
        entryUrl: "https://admin.microsoft.com/AdminPortal/Home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MicrosoftOffice365DeCollector.CONFIG);
    }
}
