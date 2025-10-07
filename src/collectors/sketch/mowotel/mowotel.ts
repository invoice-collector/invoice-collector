
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MowotelCollector extends SketchCollector {

    static CONFIG = {
        id: "mowotel",
        name: "MoWoTel",
        description: "i18n.collectors.mowotel.description",
        version: "0",
        website: "https://www.mowotel.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11617.jpg",
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
        entryUrl: "https://www.mowotel.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MowotelCollector.CONFIG);
    }
}
