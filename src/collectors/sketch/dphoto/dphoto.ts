
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DphotoCollector extends SketchCollector {

    static CONFIG = {
        id: "dphoto",
        name: "dphoto",
        description: "i18n.collectors.dphoto.description",
        version: "0",
        website: "https://app.lightbox.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413131.jpg",
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
        entryUrl: "https://app.lightbox.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DphotoCollector.CONFIG);
    }
}
