
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdobeAcrobatCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_acrobat",
        name: "Adobe Acrobat",
        description: "i18n.collectors.adobe_acrobat.description",
        version: "0",
        website: "https://acrobat.adobe.com/link/documents/files/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1769549.jpg",
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
        entryUrl: "https://acrobat.adobe.com/link/documents/files/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdobeAcrobatCollector.CONFIG);
    }
}
