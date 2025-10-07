
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Onedrive4BusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "onedrive_4_business",
        name: "OneDrive 4 Business",
        description: "i18n.collectors.onedrive_4_business.description",
        version: "0",
        website: "https://onedrive.live.com/about/de-CH/download/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105701.jpg",
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
        entryUrl: "https://onedrive.live.com/about/de-CH/download/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Onedrive4BusinessCollector.CONFIG);
    }
}
