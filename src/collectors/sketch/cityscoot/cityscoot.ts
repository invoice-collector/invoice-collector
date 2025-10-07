
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityscootCollector extends SketchCollector {

    static CONFIG = {
        id: "cityscoot",
        name: "CityScoot",
        description: "i18n.collectors.cityscoot.description",
        version: "0",
        website: "https://www.cityscoot.eu/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640612.jpg",
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
        entryUrl: "https://www.cityscoot.eu/en/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityscootCollector.CONFIG);
    }
}
