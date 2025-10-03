
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HollandsNieuweCollector extends SketchCollector {

    static CONFIG = {
        id: "hollands_nieuwe",
        name: "Hollands Nieuwe",
        description: "i18n.collectors.hollands_nieuwe.description",
        version: "0",
        website: "https://www.hollandsnieuwe.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32356.jpg",
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
        entryUrl: "https://www.hollandsnieuwe.nl/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HollandsNieuweCollector.CONFIG);
    }
}
