
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParadigitCollector extends SketchCollector {

    static CONFIG = {
        id: "paradigit",
        name: "Paradigit",
        description: "i18n.collectors.paradigit.description",
        version: "0",
        website: "http://www.paradigit.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32264.jpg",
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
        entryUrl: "http://www.paradigit.nl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParadigitCollector.CONFIG);
    }
}
