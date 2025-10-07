
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DropcontactCollector extends SketchCollector {

    static CONFIG = {
        id: "dropcontact",
        name: "Dropcontact",
        description: "i18n.collectors.dropcontact.description",
        version: "0",
        website: "https://app.dropcontact.io/app/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746519.jpg",
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
        entryUrl: "https://app.dropcontact.io/app/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DropcontactCollector.CONFIG);
    }
}
