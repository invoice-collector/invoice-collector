
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RolandRechtsschutzCollector extends SketchCollector {

    static CONFIG = {
        id: "roland_rechtsschutz",
        name: "Roland Rechtsschutz",
        description: "i18n.collectors.roland_rechtsschutz.description",
        version: "0",
        website: "https://www.roland-service.de/epostfach/views/home.xhtml#!",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863349.jpg",
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
        entryUrl: "https://www.roland-service.de/epostfach/views/home.xhtml#!",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RolandRechtsschutzCollector.CONFIG);
    }
}
