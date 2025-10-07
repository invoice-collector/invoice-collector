
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GettyImagesCollector extends SketchCollector {

    static CONFIG = {
        id: "getty_images",
        name: "Getty Images",
        description: "i18n.collectors.getty_images.description",
        version: "0",
        website: "https://www.gettyimages.de/Account/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/445.jpg",
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
        entryUrl: "https://www.gettyimages.de/Account/Invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GettyImagesCollector.CONFIG);
    }
}
