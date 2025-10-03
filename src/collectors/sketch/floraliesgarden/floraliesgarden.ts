
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FloraliesgardenCollector extends SketchCollector {

    static CONFIG = {
        id: "floraliesgarden",
        name: "FloraliesGarden",
        description: "i18n.collectors.floraliesgarden.description",
        version: "0",
        website: "http://www.floraliesgarden.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119592.jpg",
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
        entryUrl: "http://www.floraliesgarden.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FloraliesgardenCollector.CONFIG);
    }
}
