
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SoniaCollector extends SketchCollector {

    static CONFIG = {
        id: "sonia",
        name: "Sonia",
        description: "i18n.collectors.sonia.description",
        version: "0",
        website: "https://sonia.so/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487995.jpg",
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
        entryUrl: "https://sonia.so/app/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoniaCollector.CONFIG);
    }
}
