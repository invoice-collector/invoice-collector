
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PortraitproCollector extends SketchCollector {

    static CONFIG = {
        id: "portraitpro",
        name: "PortraitPro",
        description: "i18n.collectors.portraitpro.description",
        version: "0",
        website: "http://www.portraitprofessional.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14655.jpg",
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
        entryUrl: "http://www.portraitprofessional.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PortraitproCollector.CONFIG);
    }
}
