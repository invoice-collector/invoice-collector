
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeutscheTelefonCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_telefon",
        name: "Deutsche Telefon",
        description: "i18n.collectors.deutsche_telefon.description",
        version: "0",
        website: "https://partnerportal.dtst.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385957.jpg",
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
        entryUrl: "https://partnerportal.dtst.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeutscheTelefonCollector.CONFIG);
    }
}
