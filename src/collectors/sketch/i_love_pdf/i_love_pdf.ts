
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ILovePdfCollector extends SketchCollector {

    static CONFIG = {
        id: "i_love_pdf",
        name: "I Love PDF",
        description: "i18n.collectors.i_love_pdf.description",
        version: "0",
        website: "https://developer.ilovepdf.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037318.jpg",
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
        entryUrl: "https://developer.ilovepdf.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ILovePdfCollector.CONFIG);
    }
}
